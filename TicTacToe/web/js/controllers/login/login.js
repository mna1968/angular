/**
 * Created with IntelliJ IDEA.
 * User: Sridhar Rangapuram
 * Date: 2/22/14
 * Time: 3:29 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';
angular.module('rs001')
    .controller('LoginCtrl',['$scope','loginSrv','$location',function($scope,loginSrv,$location){


        $scope.onSubmit = function(e){
            e.preventDefault();
            var form = jQuery(e.target);

            if($('input:first').val() === "" ){
                alert("Please enter username!");
            }else if($('input').eq(1).val()===""){
                alert("Please enter password!");
            }
            else{
                var result = loginSrv.login($('input:first').val(),$('input').eq(1).val());
                if(result === true){
                    $location.path('/components');
                } else{
                    alert("Login Failed");
                }
            }

        }


//        $('form').submit(function(e){
//
//            e.preventDefault();
//            var form = jQuery(e.target);
//
//            if($('input:first').val() === "" ){
//                alert("Please enter username!");
//            }else if($('input').eq(1).val()===""){
//                alert("Please enter password!");
//            }
//            else{
//
//                alert("sdfdsjk");
//                var result = loginsrv.login($('input:first').val(),$('input').eq(1).val());
//
//                if(result === true){
//                    MastheadCtrl.masthead = true;
//                } else{
//                    alert("Login Failed");
//                }


        //               $scope.loginresult.login(function(json){
//                   if(json){
//                       console.log(JSON.stringify(json.response.data));
//                   }
//               },function(error){
//                   console.log("Error in login()");
//               });


//                $.ajax({
//                    type: "GET",
//                    url: form.attr("action"),
//                    data: form.serialize(),
//                    success: function(data) {
//                        console.log("Login Succeeded");
//                    },
//                    error: function (xhr, ajaxOptions, thrownError) {
//                        console.log("Login Failed");
//                    }
//                });
//            }


//        });


    }]);