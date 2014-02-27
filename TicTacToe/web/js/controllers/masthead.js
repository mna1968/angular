'use strict';
angular.module('rs001')
    .controller('MastheadCtrl',['$rootScope','$scope', function ($rootScope, $scope) {

        $scope.navTemplateUrl = 'views/masthead.html';

        $scope.appName = 'RS001Web';

        $scope.mastheadshow = false;

        $scope.$on('showmasthead', function(){
//            $scope.mastheadshow = stateSrv.getMasthead();;
        });

        $scope.primaryNav = [
            {route:'/', label:'TicTacToe'}

        ];

    }]);
