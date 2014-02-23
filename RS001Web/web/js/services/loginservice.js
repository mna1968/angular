/**
 * Created with IntelliJ IDEA.
 * User: Sridhar Rangapuram
 * Date: 2/23/14
 * Time: 9:08 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';
angular.module("rs001")
    .service('loginSrv',['$resource', function($resource){
        var loginUrl = "/stubs/login.json";
        return{
            login:function(userid, pwd){
                if(userid === "123" && pwd === "123"){
                    return true;
                }else{
                    return false;
                }
//               return $resource(loginUrl, {}, {'login':{method: 'GET','params': {userid:"",password:''}}});
//               return $resource(loginUrl,{},{method:GET});
            }

        }

    }]);