/**
 * Created with IntelliJ IDEA.
 * User: Sridhar Rangapuram
 * Date: 2/23/14
 * Time: 9:08 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';
angular.module("rs001")
    .service('airbnbSrv',['$resource', function($resource){
        var tableUrl = "/stubs/table.json";
        return{
            getData:function(){
               return $resource(tableUrl, {}, {'getData':{'method':'POST'}});
            }

        }

    }]);