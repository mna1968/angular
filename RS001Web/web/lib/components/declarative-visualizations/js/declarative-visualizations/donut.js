define([
  'jquery',
  'd3-amd'
], function ($, d3) {
    'use strict';
    return function (element) {

      var data = [], newPieData = [], oldPieData = [];
      var el = $(element);
      var dataURL;
      if(el.data('target') === undefined || el.data('target') === 'self' || el.data('target').length === 0) {
        dataURL = 'self';
      }
      else {
        dataURL = el.data('target');
      }
      var hideLabel = el.data('labelhidden') || false;
      // TODO labelwrap is too much a blunt instrument - make it easy to disable and improve legend handling more generally
      var labelWrap = el.data('labelwrap') || 300;
      var thickness = el.data('thickness') || 40;
      var showAsPercentage = (el.data('show-as-percentage') !== undefined) ? el.data('show-as-percentage') : true;
      // label placement is at right by default. Possible values are 'above', 'below', 'left', 'top', 'around'
      // TODO additional label-placement options
      var labelPlacement = el.data('label-placement') || 'right';
      var width = el.width(),
          height = el.height();

      // classes is a comma-separated list of class names that can be given for visualization elements
      // the list will wrap if more data items are present than class names
      var classes = data.classes = el.data('classes') ? el.data('classes').split(',') : null;

      var donut = d3.select(element).attr('style', 'position: relative');

      var r = el.data('radius') || 75,
        rText = r + 15,
        angleOffset = Math.PI/2,
        tweenDuration = el.data('duration') || 0;

      var arc = d3.svg.arc()
        .innerRadius(r - thickness)
        .outerRadius(r);

      var pie = d3.layout.pie()
        .startAngle(angleOffset)
        .endAngle(Math.PI*2+angleOffset)
        .sort(null)                         //disable sorting
        .value(function(d,i) {
          return d[1];
        });

      var svg = donut.append('svg')
        .attr('class', 'visualization-donut')
        .attr('viewBox', [0,0,width,height])
        .attr('preserveAspectRatio', 'xMinYMid');
      var gRoot = svg.append('g')
        .attr('transform', function(d, i) {
          if(labelPlacement == 'around') {
            // make room for labels around the outside
            var space = rText - r;
            var scale = r / rText;
            return 'translate(' + space + ',' + space + ')' +
                    'scale(' + scale + ',' + scale + ')';
          } else {
            return 'translate(1,1)';
          }
        });

      var arcGroup = gRoot.append('svg:g')
        .attr('class', 'arc_group')
        .attr('transform', 'translate(' + r + ',' + r + ')');

      var labelGroup = $('<div>')            //use divs for label, d3 lacking of text wrapping
        .attr('class', 'legend')
        // .attr('style', 'left: ' + ((((r * 2) + 50) / width) * 100) + '%')
        .appendTo(el);

      function createLabels() {               //auto layout for multiple columns
        if (hideLabel) return;

        var totalValue = d3.sum(data, function(d) {
          return d3.sum(d3.values(d));
        });

        function valueText(d, i) {
          if(showAsPercentage) {
            return (data[i][1] / totalValue * 100).toFixed(0) + '%';
          } else {
            return data[i][1].toFixed(0);
          }
        }

        if (labelPlacement == 'around') {

          // labels go around the outside
          var labels = gRoot.append('g')
            .selectAll('text')
            .data(pie(data))
            .enter().append('text')
              .attr('text-anchor', 'middle')
              .attr('class', className)
              .attr('transform', function(d, i) {
                  var x = 2 + r + Math.cos( (d.startAngle + d.endAngle - Math.PI) / 2 ) * rText;
                  var y = r + Math.sin( (d.startAngle + d.endAngle - Math.PI) / 2 ) * rText;
                  return 'translate(' + x + ', ' + y + ')';
              })
              .text(valueText);

        } else {
          labelGroup.empty();
          var leftContainer = $('<div>').appendTo(labelGroup);
          for (var d = 0; d < data.length; d++) {
            var oneLabel = d3.select(leftContainer.get(0)).append('div')
                .style({'margin-bottom': '5px', 'position': 'relative'})
            var colorDot = oneLabel.append('div')
                .classed('colorKey', true)
                .classed(className(null, d), true);

            var textLabel = $('<p>')
                .html(data[d][0] + '<strong>' + valueText(null, d) + '</strong>')
                .appendTo(oneLabel);
          }
        }
      }

      $(window).on('resize', resize);

      function className(d, i) {
        if(classes) {
          return classes[i % classes.length];
        } else {
          return 'fill' + i;
        }
      }

      function resize() {
        if (labelWrap && el.width() < labelWrap) {
          donut.classed('wrapped', true);
        } else {
          donut.classed('wrapped', false);
        }

        labelGroup.attr('style', 'left: ' + ((((r * 2) + 50) / el.width()) * 100) + '%');
      }

      function updateViz() {
        el.removeData(); // clear out $.cache so calls to $.fn.data will work
        newPieData = pie(data);
        var arcs = arcGroup.selectAll('g').data(newPieData);

        var arc = arcs.enter().append('svg:g')
          .attr('class', 'arc');

        arc.append('svg:path')
          .attr('class', className);

        arcs.select('path')
          .transition()
          .duration(tweenDuration)
          .attrTween('d', pieTween);

        var toRemove = arcs.exit()
          .transition()
          .duration(tweenDuration)
          .remove();
        toRemove.select('path')
          .transition()
          .duration(tweenDuration)
          .attrTween('d', removePieTween);
      }

      function pieTween(d, i) {           //calculating tweening between two arcs
        var s0, e0;
        if (oldPieData[i]) {
          s0 = oldPieData[i].startAngle;
          e0 = oldPieData[i].endAngle;
        } else if (!(oldPieData[i]) && oldPieData[i-1]) {
          s0 = oldPieData[i-1].endAngle;
          e0 = oldPieData[i-1].endAngle;
        } else if(!(oldPieData[i-1]) && oldPieData.length > 0){
          s0 = oldPieData[oldPieData.length-1].endAngle;
          e0 = oldPieData[oldPieData.length-1].endAngle;
        } else {
          s0 = 0;
          e0 = 0;
        }
        var i = d3.interpolate({startAngle: s0, endAngle: e0}, {startAngle: d.startAngle, endAngle: d.endAngle});
        return function(t) {
          var b = i(t);
          return arc(b);
        };
      }
      function removePieTween(d, i) {
        var s0 = 2 * Math.PI + angleOffset;
        var e0 = 2 * Math.PI + angleOffset;
        var i = d3.interpolate({startAngle: d.startAngle, endAngle: d.endAngle}, {startAngle: s0, endAngle: e0});
        return function(t) {
          var b = i(t);
          return arc(b);
        };
      }
      donut.update = function(){
        switch(dataURL) {
        case 'self':
          data = el.data('source');
          createLabels();
          updateViz();
          resize();
          break;
        default:
          $.getJSON(dataURL, function(responseData){
              data = responseData;
              createLabels();
              updateViz();
              resize();
          });
          break;
        }
      }
      donut.update();
      return donut;
    };
  }
);
