'use strict';
requirejs.config({
    baseUrl: './',
    paths: {
        'underscore'             : 'lib/underscore/underscore-min',
        'angular-bootstrap'      : 'lib/angular-bootstrap/ui-bootstrap-tpls.min',
        'angularSpinner'         : 'lib/angular-spinner/angular-spinner',
        'MastheadCtrl'           : 'js/controllers/masthead',
        'tictactoeCtrl'               : 'js/controllers/components/tictactoe'




    },
    shim: {
        'underscore'             : { deps: ['jquery'], exports: '_' },
        'angular-bootstrap': ['jquery'],
        'angularSpinner': ['jquery']
    }
});

define([
    'jquery',
    'MastheadCtrl',
    'tictactoeCtrl'


], function(){

});
