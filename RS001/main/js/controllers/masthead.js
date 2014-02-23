'use strict';
angular.module('sr001')
    .controller('MastheadCtrl', function ($rootScope, $scope) {

        $scope.navTemplateUrl = 'views/masthead.html';

        $scope.appName = 'test';

        $("#mastHead").hide();

        $scope.primaryNav = [
            {route:'/components', label:'Components'}
        ];

    });
