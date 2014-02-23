'use strict';
requirejs.config({
    baseUrl: './',
    paths: {
        'underscore'             : 'lib/underscore/underscore-min',
        'angular-bootstrap'      : 'lib/angular-bootstrap/ui-bootstrap-tpls.min',
        'angularSpinner'         : 'lib/angular-spinner/angular-spinner',
        'MastheadCtrl'           :  'js/controllers/masthead',
        'loginSrv'                : 'js/services/loginservice',
        'LoginCtrl'               : 'js/controllers/login/login',
        'listCtrl'                : 'js/controllers/components/listcontrol'




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
    'loginSrv',
    'LoginCtrl',
    'listCtrl'

], function(){

});
