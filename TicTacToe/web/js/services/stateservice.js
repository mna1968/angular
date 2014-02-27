/**
 * Created with IntelliJ IDEA.
 * User: Sridhar Rangapuram
 * Date: 2/23/14
 * Time: 3:26 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';
angular.module("rs001")
    .service('stateSrv',['$scope', function($scope){
         $scope.masthead = false;
        return{

            setMasthead:function(value){

                $scope.masthead = value;
            },
            getMasthead:function(){

                return $scope.masthead;
            }
        };

    }]);