/**
 * Created with IntelliJ IDEA.
 * User: Sridhar Rangapuram
 * Date: 2/22/14
 * Time: 3:29 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';
angular.module('rs001', [
        'ngResource',
        'ngRoute'
    ])
    .config(function ($routeProvider ) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/components/tictactoe.html',
                controller: 'tictactoeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).run(function($location, $rootScope,$resource) {

        var path = function() {
            return $location.path();
        };
        $rootScope.$watch(path, function (newVal) {
            $rootScope.activeRoute = newVal;
        });

    });

requirejs([
    './js/config.js'
], function () {
    angular.bootstrap(document, ['rs001']);
});
