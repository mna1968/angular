'use strict';
requirejs.config({
    baseUrl: './',
    paths: {
        'underscore'             : 'lib/underscore/underscore-min',
        'angular-bootstrap'      : 'lib/angular-bootstrap/ui-bootstrap-tpls.min',
        'angularSpinner'         : 'lib/angular-spinner/angular-spinner',
        'stateSrv'               : 'js/services/stateservice',
        'loginSrv'               : 'js/services/loginservice',
        'MastheadCtrl'           : 'js/controllers/masthead',
        'tictactoeCtrl'               : 'js/controllers/components/tictactoe',
        'airbnbCtrl'               : 'js/controllers/components/airbnb'




    },
    shim: {
        'underscore'             : { deps: ['jquery'], exports: '_' },
        'angular-bootstrap': ['jquery'],
        'angularSpinner': ['jquery']
    }
});

define([
    'jquery',
    'stateSrv',
    'loginSrv',
    'MastheadCtrl',
    'tictactoeCtrl',
    'airbnbCtrl'


], function(){

});
