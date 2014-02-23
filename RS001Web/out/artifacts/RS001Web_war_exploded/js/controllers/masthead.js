'use strict';
angular.module('rs001')
    .controller('MastheadCtrl', function ($rootScope, $scope) {

        $scope.navTemplateUrl = 'views/masthead.html';

        $scope.appName = 'RS001Web';

        $rootScope.mastheadshow = true;

        $rootScope.$on('showmasthead', function(){
            $rootScope.mastheadshow = false;
        });

        $scope.primaryNav = [
            {route:'/components', label:'Components'}
        ];

    });
