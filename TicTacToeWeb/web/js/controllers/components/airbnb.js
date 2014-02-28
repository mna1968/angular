/**
 * Created with IntelliJ IDEA.
 * User: Sridhar Rangapuram
 * Date: 2/23/14
 * Time: 10:51 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';
angular.module('rs001')
    .controller('airbnbCtrl',['$scope','$rootScope','airbnbSrv',function($scope,$rootScope,airbnbSrv){


        $scope.tableData = {};

        $scope.headerdata = null;
        $scope.hosting1 = null;
        $scope.hosting2 = null;
        $scope.hosting3 = null;



        $scope.createTableRows=function(data, index){

            var row = $("#airbnbtablebody").children();
            var tdRow=$(row[index]);
            data.forEach(function(item){

                var td = $("<td></td>");
                if(item === '0'){
                    td.text("X");
                }else if(item === "1"){

                }else{
                    td.text(item);
                }
                tdRow.append(td);
            });
            console.log(index);


        }

        var result = airbnbSrv.getData();
        result.getData(function(json){
            $scope.headerdata = json.response.data.dates;
            $scope.hosting1 = json.response.data.id1;
            $scope.createTableRows($scope.hosting1,0);
            $scope.hosting2 = json.response.data.id2;
            $scope.createTableRows($scope.hosting2,1);
            $scope.hosting3 = json.response.data.id3;
            $scope.createTableRows($scope.hosting3,2);
            console.log(json.response.data.id1);

        },function(error){
            alert("Error in AirBNB Call!");

        });

        $scope.onhostclick=function(){

            var toDate =$("#toDate").val().trim();
            var fromDate = $("#fromDate").val().trim();

            var startIndex =$scope.headerdata.indexOf(toDate);
            var endIndex = $scope.headerdata.indexOf(fromDate);

            var allhostings = [$scope.hosting1,$scope.hosting2,$scope.hosting3];

            var availableHostings = [];
            allhostings.forEach(function(item){

                if(item){
                    var stIndex = startIndex;
                    var enIndex = endIndex;
                    var available = true;
                    while(stIndex <= enIndex){
                        var val = item[stIndex];
                        if(val === "0"){
                            available = false;
                        }
                        stIndex++;

                    }
                    if(available === true){
                        availableHostings.push(item[0]);
                    }

                }

            });

            $("#results").text(availableHostings);


        }
        $scope.reset=function(){

           $("#toDate").val("");
            $("#fromDate").val("");
            $("#results").text("");
        }


    }]);