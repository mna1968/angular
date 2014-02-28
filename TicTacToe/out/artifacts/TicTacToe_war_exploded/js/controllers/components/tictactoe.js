/**
 * Created with IntelliJ IDEA.
 * User: Sridhar Rangapuram
 * Date: 2/23/14
 * Time: 10:51 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';
angular.module('rs001')
    .controller('tictactoeCtrl',['$scope','$rootScope','$compile',function($scope,$rootScope,$compile){


        $scope.players = (function(){

            var playerone=1;
            var playertwo=2;
            var currentPlayer = playerone;
            var boardDimension;

            return {

                getPlayerOne:function(){
                    return playerone;
                },
                getPlayerTwo:function(){
                    return playertwo;
                },
                setCurrentPlayer:function(player){
                    currentPlayer = player;
                },
                getCurrentPlayer:function(){
                    return currentPlayer;
                },
                setBoardDimension:function(num){
                    boardDimension = num;
                },
                getBoardDimension:function(){
                    return boardDimension;
                }

            };

        })();


        $scope.checkHorizontals=function(elements, dim, value){

            for(var row = 0; row < dim; row++){
                var i =row*dim;
                var success = "success";
                var temp = 0;
                while(temp < dim){
                    if($(elements[i]).text().trim() != value){
                        success = "";
                        temp = dim;
                    }
                    i++;
                    temp++;
                }
                if(success === "success"){
                    break;
                }
            }

            return success;

        }

        $scope.checkVerticals=function(elements, dim, value){

            for(var col = 0; col < dim;col++){
                var i =col;
                var success = "success";
                var temp = 0;
                while(temp < dim){
                    if($(elements[i]).text().trim() != value){
                        success = "";
                        temp = dim;
                    }
                    i=i+dim;
                    temp++;
                }
                if(success === "success"){
                    break;
                }
            }

            return success;


        }

        $scope.checkDiagonals=function(elements, dim, value){

            for(var dia = 0; dia < 2;dia++){
                var i =dia;
                var matrixSize = dim*dim;

                if(i === 0){

                    var success = "success";
                    while(i < matrixSize){
                        if($(elements[i]).text().trim() != value){
                            success = "";
                            i =matrixSize;
                        }
                        i=i+dim+1;
                    }
                    if(success === "success"){
                        break;
                    }
                }else{
                    i = dim-1;
                    var success = "success";
                    var temp =0;
                    while(temp < dim){
                        if($(elements[i]).text().trim() != value){
                            success = "";
                            temp = dim;
                        }
                        i=i+dim-1;
                        temp++;
                    }
                    if(success === "success"){
                        break;
                    }

                }

            }

            return success;

        }


        $scope.validateGame=function(){

            var dim = $scope.players.getBoardDimension();
            var boardelements = $("#board").children();
            var success = "success";
            var value =  $scope.players.getCurrentPlayer()=== 1?'X':'O';

            if($scope.checkHorizontals(boardelements,dim,value) === "success"){
                return success;
            }else if($scope.checkVerticals(boardelements,dim,value) === "success"){
                return success;
            }else if($scope.checkDiagonals(boardelements,dim,value) === "success"){
                return success;
            }else{
                success = "";
            }
            return success;

        }


        $scope.currentPlayer = $scope.players.getCurrentPlayer();

        $("#pone").addClass('font');

        console.log($scope.currentPlayer);


        $scope.onClickHndlr=function(e){
            var obj = $(e.currentTarget);
            if($("#gstatus").text().trim() === ""){
                if($scope.players.getCurrentPlayer() === $scope.players.getPlayerOne()){
                    obj.text('X');
                    if($scope.validateGame()=== "success"){
                        $("#gstatus").text("Game Over!");
                    }else{
                        $scope.players.setCurrentPlayer($scope.players.getPlayerTwo());
                        $("#ptwo").addClass("font");
                        $("#pone").removeClass("font");

                    }

                }else if($scope.players.getCurrentPlayer() === $scope.players.getPlayerTwo()){

                    obj.text('O');
                    if($scope.validateGame()=== "success"){
                        $("#gstatus").text("Gave OVer!");
                    }else{
                        $scope.players.setCurrentPlayer($scope.players.getPlayerOne());
                        $("#pone").addClass("font");
                        $("#ptwo").removeClass("font");

                    }
                }
            }

        };

        $scope.prepareBoard=function(num){
            $scope.players.setBoardDimension(num);

            if(num === 1 ){
                console.log("Cannot play the game with one box. Please enter more than one");
            }
            else {

                var board = angular.element('#board');
//                var boardWidth = num *(35+4);

                console.log(board.width());
//                board.width(boardWidth);

                for(var row =0; row < num; row++){

                    for(var col=0; col < num; col++){

                        var btnObj = angular.element("<button class='btn btn-default btndimensions' ng-click='onClickHndlr($event)'></button>");
                        board.append(btnObj);
                        $compile(btnObj)($scope);

                    }

                }

            }


        }

        $scope.reset = function(){

            var boardelements = $("#board").children();
            for(var i = 0; i < boardelements.length; i++){
                $(boardelements[i]).text("");
            }
            $("#gstatus").text("");
            $scope.players.setCurrentPlayer($scope.players.getPlayerOne());
            $("#pone").addClass("font");
            $("#ptwo").removeClass("font");


        }


        $scope.prepareBoard(3);




    }]);