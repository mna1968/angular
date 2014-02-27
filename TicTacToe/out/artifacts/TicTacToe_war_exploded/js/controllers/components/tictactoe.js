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


        $scope.validateGame=function(){

            var dim = $scope.players.getBoardDimension();
            var boardelements = $("#board").children();
            var success = "success";
            var line = true;


            for(var i =0; i < dim; i++){

                if($(boardelements[i]).text().trim()==='X'){
                    line = true;
                    var temp = i;
                    var index = dim;
                    while(temp < dim-1){
                        if($(boardelements[index]).text().trim() !='X'){
                            success = "";
                            temp = dim;
                        }
                        index = index+dim;
                        temp++;
                    }
                    if(success === "success"){
                         break;
                    }

                    if(i===0 || i === dim-1){

                        success="success";
                        temp = i;
                        index = 0;
                        while(temp < dim-1){
                            index = index+dim+1;
                            if($(boardelements[index]).text().trim() !='X'){
                                success = "";
                                temp = dim;
                            }
                            index = index+dim;
                            temp++;
                        }
                    }
                    if(success === "success"){
                        break;
                    }

                }else if($(boardelements[i]).text().trim()==='0'){
                    line = true;
                    var temp = i;
                    var index = dim;
                    while(temp < dim-1){
                        if($(boardelements[index]).text().trim() !='0'){
                            success = "";
                            temp = dim;
                        }
                        index = index+dim;
                        temp++;
                    }
                    if(success === "success"){
                        break;
                    }

                    if(i===0 || i === dim-1){

                        success="success";
                        temp = i;
                        index = 0;
                        while(temp < dim-1){
                            index = index+dim+1;
                            if($(boardelements[index]).text().trim() !='0'){
                                success = "";
                                temp = dim;
                            }
                            index = index+dim;
                            temp++;
                        }
                    }
                    if(success === "success"){
                        break;
                    }

                }
            }
            if(line === true){
                success = "success";
            }

            return success;

        }



        $scope.currentPlayer = $scope.players.getCurrentPlayer();

        $("#pone").addClass('font');
        $("#pstatus").text("Player "+$scope.players.getCurrentPlayer() + " to play!");

        console.log($scope.currentPlayer);


        $scope.onClickHndlr=function(e){
            var obj = $(e.currentTarget);
            if($("#gstatus").text().trim() === ""){
                if($scope.players.getCurrentPlayer() === $scope.players.getPlayerOne()){
                    obj.text('X');
                    if($scope.validateGame()=== "success"){
                        $("#gstatus").text("Player "+$scope.players.getPlayerOne() + "wins!");
                    }else{
                        $scope.players.setCurrentPlayer($scope.players.getPlayerTwo());
                        $("#ptwo").addClass("font");
                        $("#pone").removeClass("font");

                    }

                }else if($scope.players.getCurrentPlayer() === $scope.players.getPlayerTwo()){

                    obj.text('0');
                    if($scope.validateGame()=== "success"){
                        $("#gstatus").text("Player "+$scope.players.getPlayerTwo() + "wins!");
                    }else{
                        $scope.players.setCurrentPlayer($scope.players.getPlayerOne());
                        $("#pone").addClass("font");
                        $("#ptwo").removeClass("font");

                    }
                }
            }
            $("#pstatus").text("Player "+$scope.players.getCurrentPlayer() + " to play!");

        };

        $scope.prepareBoard=function(num){
            $scope.players.setBoardDimension(num);

            if(num === 1 ){
                console.log("Cannot play the game with one box. Please enter more than one");
            }
            else {

                var board = angular.element('#board');
                var boardWidth = num *(35+4);

                console.log(board.width());
                board.width(boardWidth);

                for(var row =0; row < num; row++){

                    for(var col=0; col < num; col++){

                        var btnObj = angular.element("<button class='btn btn-default btndimensions' ng-click='onClickHndlr($event)'></button>");
                        board.append(btnObj);
                        $compile(btnObj)($scope);


                    }


                }


            }


        }


        $scope.prepareBoard(3);




    }]);