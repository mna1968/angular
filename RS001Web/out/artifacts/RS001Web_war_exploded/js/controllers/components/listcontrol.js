/**
 * Created with IntelliJ IDEA.
 * User: Sridhar Rangapuram
 * Date: 2/23/14
 * Time: 10:51 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';
angular.module('rs001')
    .controller('listCtrl',['$scope','$rootScope',function($scope,$rootScope){

//        stateSrv.setMasthead(true);
        $rootScope.$emit('showmasthead');

    }]);