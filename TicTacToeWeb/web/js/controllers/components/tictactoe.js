/**
 * Created with IntelliJ IDEA.
 * User: Sridhar Rangapuram
 * Date: 2/23/14
 * Time: 10:51 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';
angular.module('rs001')
    .controller('tictactoeCtrl',['$scope','$rootScope',function($scope,$rootScope){


//if IE4/NS6, apply style
//        if (document.all||document.getElementById){
//            document.write('<style>.tictac{')
//            document.write('width:50px;height:50px;')
//            document.write('}</style>')
//        }

        $scope.sqr1
        $scope.sqr2
        $scope.sqr3
        $scope.sqr4
        $scope.sqr5
        $scope.sqr6
        $scope.sqr7
        $scope.sqr8
        $scope.sqr9
        $scope.sqr1T = 0
        $scope.sqr2T = 0
        $scope.sqr3T = 0
        $scope.sqr4T = 0
        $scope.sqr5T = 0
        $scope.sqr6T = 0
        $scope.sqr7T = 0
        $scope.sqr8T = 0
        $scope.sqr9T = 0
        $scope.moveCount = 0
        $scope.turn = 0
        $scope.mode = 1


        $scope.onformitemClick=function(e){

            $scope.currentElement = e.currentTarget;
            alert($scope.currentElement.name);
            if($scope.currentElement.value == '     ' && $scope.turn == 0 && $scope.mode == 1)
            {
                if($scope.currentElement.name === 'sqr1'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 1;
                    $scope.vari();
                    $scope.check();
                }else if($scope.currentElement.name === 'sqr2'){
                    document.tic.sqr2.value = ' X ';
                    $scope.sqr2T = 1;
                    $scope.turn = 1;
                    $scope.vari();
                    $scope.check();
                }else if($scope.currentElement.name === 'sqr3'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 1;
                    $scope.vari();
                    $scope.check();
                }else if($scope.currentElement.name === 'sqr4'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 1;
                    $scope.vari();
                    $scope.check();
                }else if($scope.currentElement.name === 'sqr5'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 1;
                    $scope.vari();
                    $scope.check();
                }else if($scope.currentElement.name === 'sqr6'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 1;
                    $scope.vari();
                    $scope.check();
                }else if($scope.currentElement.name === 'sqr7'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 1;
                    $scope.vari();
                    $scope.check();
                }else if($scope.currentElement.name === 'sqr8'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 1;
                    $scope.vari();
                    $scope.check();
                }else if($scope.currentElement.name === 'sqr9'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 1;
                    $scope.vari();
                    $scope.check();
                }

            }
            else if($scope.currentElement.value == '     ' && $scope.turn == 1 && $scope.mode == 2)
            {

                if($scope.currentElement.name === 'sqr1'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 0;
                    $scope.vari();
                    $scope.player1Check()
                }else if($scope.currentElement.name === 'sqr2'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 0;
                    $scope.vari();
                    $scope.player1Check()
                }else if($scope.currentElement.name === 'sqr3'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 0;
                    $scope.vari();
                    $scope.player1Check()
                }else if($scope.currentElement.name === 'sqr4'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 0;
                    $scope.vari();
                    $scope.player1Check()
                }else if($scope.currentElement.name === 'sqr5'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 0;
                    $scope.vari();
                    $scope.player1Check()

                }else if($scope.currentElement.name === 'sqr6'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 0;
                    $scope.vari();
                    $scope.player1Check()
                }else if($scope.currentElement.name === 'sqr7'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 0;
                    $scope.vari();
                    $scope.player1Check()
                }else if($scope.currentElement.name === 'sqr8'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 0;
                    $scope.vari();
                    $scope.player1Check()
                }else if($scope.currentElement.name === 'sqr9'){
                    document.tic.sqr1.value = ' X ';
                    $scope.sqr1T = 1;
                    $scope.turn = 0;
                    $scope.vari();
                    $scope.player1Check()
                }

            } else if($scope.currentElement.value == '     ' && $scope.turn == 0 && $scope.mode == 2)
            {
                currentElement.value = ' O ';
                $scope.sqr1T = 1;
                $scope.turn = 1;
                $scope.vari();
                $scope.player1Check()

                if($scope.currentElement.name === 'sqr1'){

                }else if($scope.currentElement.name === 'sqr2'){

                }else if($scope.currentElement.name === 'sqr3'){

                }else if($scope.currentElement.name === 'sqr4'){

                }else if($scope.currentElement.name === 'sqr5'){

                }else if($scope.currentElement.name === 'sqr6'){

                }else if($scope.currentElement.name === 'sqr7'){

                }else if($scope.currentElement.name === 'sqr8'){

                }else if($scope.currentElement.name === 'sqr9'){

                }
            }
            $scope.drawCheck();

        }




        $scope.vari =function()
        {
            $scope.sqr1 = document.tic.sqr1.value
            $scope.sqr2 = document.tic.sqr2.value
            $scope.sqr3 = document.tic.sqr3.value
            $scope.sqr4 = document.tic.sqr4.value
            $scope.sqr5 = document.tic.sqr5.value
            $scope.sqr6 = document.tic.sqr6.value
            $scope.sqr7 = document.tic.sqr7.value
            $scope.sqr8 = document.tic.sqr8.value
            $scope.sqr9 = document.tic.sqr9.value
        }
        $scope.check=function()
        {
            if($scope.sqr1 == " X " && $scope.sqr2 == " X " && $scope.sqr3 == " X ")
            {
                alert("You Win!")
                $scope.reset()
            }
            else if($scope.sqr4 == " X " && $scope.sqr5 == " X " && $scope.sqr6 == " X ")
            {
                alert("You Win!")
                $scope.reset()
            }
            else if($scope.sqr7 == " X " && $scope.sqr8 == " X " && $scope.sqr9 == " X ")
            {
                alert("You Win!")
                $scope.reset()
            }
            else if($scope.sqr1 == " X " && $scope.sqr5 == " X " && $scope.sqr9 == " X ")
            {
                alert("You Win!")
                $scope.reset()
            }
            else if($scope.sqr1 == " X " && $scope.sqr4 == " X " && $scope.sqr7 == " X ")
            {
                alert("You Win!")
                $scope.reset()
            }
            else if($scope.sqr2 == " X " && $scope.sqr5 == " X " && $scope.sqr8 == " X ")
            {
                alert("You Win!")
                $scope.reset()
            }
            else if($scope.sqr3 == " X " && $scope.sqr6 == " X " && $scope.sqr9 == " X ")
            {
                alert("You Win!")
                $scope.reset()
            }
            else if($scope.sqr1 == " X " && $scope.sqr5 == " X " && $scope.sqr9 == " X ")
            {
                alert("You Win!")
                $scope.reset()
            }
            else if($scope.sqr3 == " X " && $scope.sqr5 == " X " && $scope.sqr7 == " X ")
            {
                alert("You Win!")
                $scope.reset()
            }
            else
            {
                $scope.winCheck()
                $scope.check2()
                $scope.drawCheck()
            }
        }

        $scope.check2= function()
        {
            $scope.vari()
            $scope.drawCheck()
            if($scope.sqr1 == " O " && $scope.sqr2 == " O " && $scope.sqr3 == " O ")
            {
                alert("You Lose!")
                $scope.reset()
            }
            else if($scope.sqr4 == " O " && $scope.sqr5 == " O " && $scope.sqr6 == " O ")
            {
                alert("You Lose!")
                $scope.reset()
            }
            else if($scope.sqr7 == " O " && $scope.sqr8 == " O " && $scope.sqr9 == " O ")
            {
                alert("You Lose!")
                $scope.reset()
            }
            else if($scope.sqr1 == " O " && $scope.sqr5 == " O " && $scope.sqr9 == " O ")
            {
                alert("You Lose!")
                $scope.reset()
            }
            else if($scope.sqr1 == " O " && $scope.sqr4 == " O " && $scope.sqr7 == " O ")
            {
                alert("You Lose!")
                $scope.reset()
            }
            else if($scope.sqr2 == " O " && $scope.sqr5 == " O " && $scope.sqr8 == " O ")
            {
                alert("You Lose!")
                $scope.reset()
            }
            else if($scope.sqr3 == " O " && $scope.sqr6 == " O " && $scope.sqr9 == " O ")
            {
                alert("You Lose!")
                $scope.reset()
            }
            else if($scope.sqr1 == " O " && $scope.sqr5 == " O " && $scope.sqr9 == " O ")
            {
                alert("You Lose!")
                $scope.reset()
            }
            else if($scope.sqr3 == " O " && $scope.sqr5 == " O " && $scope.sqr7 == " O ")
            {
                alert("You Lose!")
                $scope.reset()
            }
        }

        $scope.player1Check=function()
        {
            if($scope.sqr1 == " X " && $scope.sqr2 == " X " && $scope.sqr3 == " X ")
            {
                alert("Player 1 wins!")
                $scope.reset()
            }
            else if($scope.sqr4 == " X " && $scope.sqr5 == " X " && $scope.sqr6 == " X ")
            {
                alert("Player 1 wins!")
                $scope.reset()
            }
            else if($scope.sqr7 == " X " && $scope.sqr8 == " X " && $scope.sqr9 == " X ")
            {
                alert("Player 1 wins!")
                $scope.reset()
            }
            else if($scope.sqr1 == " X " && $scope.sqr5 == " X " && $scope.sqr9 == " X ")
            {
                alert("Player 1 wins!")
                $scope.reset()
            }
            else if($scope.sqr1 == " X " && $scope.sqr4 == " X " && $scope.sqr7 == " X ")
            {
                alert("Player 1 wins!")
                $scope.reset()
            }
            else if($scope.sqr2 == " X " && $scope.sqr5 == " X " && $scope.sqr8 == " X ")
            {
                alert("Player 1 wins!")
                $scope.reset()
            }
            else if($scope.sqr3 == " X " && $scope.sqr6 == " X " && $scope.sqr9 == " X ")
            {
                alert("Player 1 wins!")
                $scope.reset()
            }
            else if($scope.sqr1 == " X " && $scope.sqr5 == " X " && $scope.sqr9 == " X ")
            {
                alert("Player 1 wins!")
                $scope.reset()
            }
            else if($scope.sqr3 == " X " && $scope.sqr5 == " X " && $scope.sqr7 == " X ")
            {
                alert("Player 1 wins!")
                $scope.reset()
            }
            else
            {
                $scope.player2Check()
                $scope.drawCheck()
            }
        }

        $scope.player2Check=function()
        {
            $scope.vari()
            $scope.drawCheck()
            if($scope.sqr1 == " O " && $scope.sqr2 == " O " && $scope.sqr3 == " O ")
            {
                alert("Player 2 wins!")
                $scope.reset()
            }
            else if($scope.sqr4 == " O " && $scope.sqr5 == " O " && $scope.sqr6 == " O ")
            {
                alert("Player 2 wins!")
                $scope.reset()
            }
            else if($scope.sqr7 == " O " && $scope.sqr8 == " O " && $scope.sqr9 == " O ")
            {
                alert("Player 2 wins!")
                $scope.reset()
            }
            else if($scope.sqr1 == " O " && $scope.sqr5 == " O " && $scope.sqr9 == " O ")
            {
                alert("Player 2 wins!")
                $scope.reset()
            }
            else if($scope.sqr1 == " O " && $scope.sqr4 == " O " && $scope.sqr7 == " O ")
            {
                alert("Player 2 wins!")
                $scope.reset()
            }
            else if($scope.sqr2 == " O " && $scope.sqr5 == " O " && $scope.sqr8 == " O ")
            {
                alert("Player 2 wins!")
                $scope.reset()
            }
            else if($scope.sqr3 == " O " && $scope.sqr6 == " O " && $scope.sqr9 == " O ")
            {
                alert("Player 2 wins!")
                $scope.reset()
            }
            else if($scope.sqr1 == " O " && $scope.sqr5 == " O " && $scope.sqr9 == " O ")
            {
                alert("Player 2 wins!")
                $scope.reset()
            }
            else if($scope.sqr3 == " O " && $scope.sqr5 == " O " && $scope.sqr7 == " O ")
            {
                alert("Player 2 wins!")
                $scope.reset()
            }
        }

        $scope.drawCheck =function()
        {
            $scope.vari()
            $scope.moveCount = $scope.sqr1T + $scope.sqr2T + $scope.sqr3T + $scope.sqr4T + $scope.sqr5T + $scope.sqr6T + $scope.sqr7T + $scope.sqr8T + $scope.sqr9T
            if($scope.moveCount == 9)
            {
                $scope.reset()
                alert("Draw")
            }
        }

        $scope.winCheck=function()
        {
            $scope.check2()
            if($scope.sqr1 == " O " && $scope.sqr2 == " O " && $scope.sqr3T == 0 && $scope.turn == 1)
            {
                document.tic.sqr3.value = " O "
                $scope.sqr3T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr2 == " O " && $scope.sqr3 == " O " && $scope.sqr1T == 0 && $scope.turn == 1)
            {
                document.tic.sqr1.value = " O "
                $scope.sqr1T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr4 == " O " && $scope.sqr5 == " O " && $scope.sqr6T == 0 && $scope.turn == 1)
            {
                document.tic.sqr6.value = " O "
                $scope.sqr6T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr5 == " O " && $scope.sqr6 == " O " && $scope.sqr4T == 0 && $scope.turn == 1)
            {
                document.tic.sqr4.value = " O "
                $scope.sqr4T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr7 == " O " && $scope.sqr8 == " O " && $scope.sqr9T == 0 && $scope.turn == 1)
            {
                document.tic.sqr9.value = " O "
                $scope.sqr9T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr8 == " O " && $scope.sqr9 == " O " && $scope.sqr7T == 0 && $scope.turn == 1)
            {
                document.tic.sqr7.value = " O "
                $scope.sqr7T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr1 == " O " && $scope.sqr5 == " O " && $scope.sqr9T == 0 && $scope.turn == 1)
            {
                document.tic.sqr9.value = " O "
                $scope.sqr9T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr5 == " O " && $scope.sqr9 == " O " && $scope.sqr1T == 0 && $scope.turn == 1)
            {
                document.tic.sqr1.value = " O "
                $scope.sqr1T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr3 == " O " && $scope.sqr5 == " O " && $scope.sqr7T == 0 && $scope.turn == 1)
            {
                document.tic.sqr7.value = " O "
                $scope.sqr7T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr7 == " O " && $scope.sqr5 == " O " && $scope.sqr3T == 0 && $scope.turn == 1)
            {
                document.tic.sqr3.value = " O "
                $scope.sqr3T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr1 == " O " && $scope.sqr3 == " O " && $scope.sqr2T == 0 && $scope.turn == 1)
            {
                document.tic.sqr2.value = " O "
                $scope.sqr2T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr4 == " O " && $scope.sqr6 == " O " && $scope.sqr5T == 0 && $scope.turn == 1)
            {
                document.tic.sqr5.value = " O "
                $scope.sqr5T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr7 == " O " && $scope.sqr9 == " O " && $scope.sqr8T == 0 && $scope.turn == 1)
            {
                document.tic.sqr8.value = " O "
                $scope.sqr8T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr1 == " O " && $scope.sqr7 == " O " && $scope.sqr4T == 0 && $scope.turn == 1)
            {
                document.tic.sqr4.value = " O "
                $scope.sqr4T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr2 == " O " && $scope.sqr8 == " O " && $scope.sqr5T == 0 && $scope.turn == 1)
            {
                document.tic.sqr5.value = " O "
                $scope.sqr5T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr3 == " O " && $scope.sqr9 == " O " && $scope.sqr6T == 0 && $scope.turn == 1)
            {
                document.tic.sqr6.value = " O "
                $scope.sqr6T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr1 == " O " && $scope.sqr5 == " O " && $scope.sqr9T == 0 && $scope.turn == 1)
            {
                document.tic.sqr9.value = " O "
                $scope.sqr9T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr4 == " O " && $scope.sqr7 == " O " && $scope.sqr1T == 0 && $scope.turn == 1)
            {
                document.tic.$scope.sqr1.value = " O "
                $scope.sqr1T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr5 == " O " && $scope.sqr8 == " O " && $scope.sqr2T == 0 && $scope.turn == 1)
            {
                document.tic.sqr2.value = " O "
                $scope.sqr2T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr6 == " O " && $scope.sqr9 == " O " && $scope.sqr3T == 0 && $scope.turn == 1)
            {
                document.tic.sqr3.value = " O "
                $scope.sqr3T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr1 == " O " && $scope.sqr4 == " O " && $scope.sqr7T == 0 && $scope.turn == 1)
            {
                document.tic.$scope.sqr7.value = " O "
                $scope.sqr7T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr2 == " O " && $scope.sqr5 == " O " && $scope.sqr8T == 0 && $scope.turn == 1)
            {
                document.tic.sqr8.value = " O "
                $scope.sqr8T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr3 == " O " && $scope.sqr6 == " O " && $scope.sqr9T == 0 && $scope.turn == 1)
            {
                document.tic.sqr9.value = " O "
                $scope.sqr9T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr1 == " O " && $scope.sqr9 == " O " && $scope.sqr5T == 0 && $scope.turn == 1)
            {
                document.tic.sqr5.value = " O "
                $scope.sqr5T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr3 == " O " && $scope.sqr7 == " O " && $scope.sqr5T == 0 && $scope.turn == 1)
            {
                document.tic.sqr5.value = " O "
                $scope.sqr5T = 1;
                $scope.turn = 0;
            }
            else
            {
                $scope.computer()
            }
            $scope.check2()
        }
        $scope.computer=function()
        {
            $scope.check2()
            if($scope.sqr1 == " X " && $scope.sqr2 == " X " && $scope.sqr3T == 0 && $scope.turn == 1)
            {
                document.tic.sqr3.value = " O "
                $scope.sqr3T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr2 == " X " && $scope.sqr3 == " X " && $scope.sqr1T == 0 && $scope.turn == 1)
            {
                document.tic.$scope.sqr1.value = " O "
                $scope.sqr1T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr4 == " X " && $scope.sqr5 == " X " && $scope.sqr6T == 0 && $scope.turn == 1)
            {
                document.tic.sqr6.value = " O "
                $scope.sqr6T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr5 == " X " && $scope.sqr6 == " X " && $scope.sqr4T == 0 && $scope.turn == 1)
            {
                document.tic.sqr4.value = " O "
                $scope.sqr4T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr7 == " X " && $scope.sqr8 == " X " && $scope.sqr9T == 0 && $scope.turn == 1)
            {
                document.tic.sqr9.value = " O "
                $scope.sqr9T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr8 == " X " && $scope.sqr9 == " X " && $scope.sqr7T == 0 && $scope.turn == 1)
            {
                document.tic.$scope.sqr7.value = " O "
                $scope.sqr7T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr1 == " X " && $scope.sqr5 == " X " && $scope.sqr9T == 0 && $scope.turn == 1)
            {
                document.tic.sqr9.value = " O "
                $scope.sqr9T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr5 == " X " && $scope.sqr9 == " X " && $scope.sqr1T == 0 && $scope.turn == 1)
            {
                document.tic.sqr1.value = " O "
                $scope.sqr1T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr3 == " X " && $scope.sqr5 == " X " && $scope.sqr7T == 0 && $scope.turn == 1)
            {
                document.tic.sqr7.value = " O "
                $scope.sqr7T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr7 == " X " && $scope.sqr5 == " X " && $scope.sqr3T == 0 && $scope.turn == 1)
            {
                document.tic.sqr3.value = " O "
                $scope.sqr3T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr1 == " X " && $scope.sqr3 == " X " && $scope.sqr2T == 0 && $scope.turn == 1)
            {
                document.tic.sqr2.value = " O "
                $scope.sqr2T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr4 == " X " && $scope.sqr6 == " X " && $scope.sqr5T == 0 && $scope.turn == 1)
            {
                document.tic.sqr5.value = " O "
                $scope.sqr5T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr7 == " X " && $scope.sqr9 == " X " && $scope.sqr8T == 0 && $scope.turn == 1)
            {
                document.tic.sqr8.value = " O "
                $scope.sqr8T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr1 == " X " && $scope.sqr7 == " X " && $scope.sqr4T == 0 && $scope.turn == 1)
            {
                document.tic.sqr4.value = " O "
                $scope.sqr4T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr2 == " X " && $scope.sqr8 == " X " && $scope.sqr5T == 0 && $scope.turn == 1)
            {
                document.tic.sqr5.value = " O "
                $scope.sqr5T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr3 == " X " && $scope.sqr9 == " X " && $scope.sqr6T == 0 && $scope.turn == 1)
            {
                document.tic.sqr6.value = " O "
                $scope.sqr6T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr1 == " X " && $scope.sqr5 == " X " && $scope.sqr9T == 0 && $scope.turn == 1)
            {
                document.tic.sqr9.value = " O "
                $scope.sqr9T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr4 == " X " && $scope.sqr7 == " X " && $scope.sqr1T == 0 && $scope.turn == 1)
            {
                document.tic.$scope.sqr1.value = " O "
                $scope.sqr1T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr5 == " X " && $scope.sqr8 == " X " && $scope.sqr2T == 0 && $scope.turn == 1)
            {
                document.tic.sqr2.value = " O "
                $scope.sqr2T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr6 == " X " && $scope.sqr9 == " X " && $scope.sqr3T == 0 && $scope.turn == 1)
            {
                document.tic.sqr3.value = " O "
                $scope.sqr3T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr1 == " X " && $scope.sqr4 == " X " && $scope.sqr7T == 0 && $scope.turn == 1)
            {
                document.tic.sqr7.value = " O "
                $scope.sqr7T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr2 == " X " && $scope.sqr5 == " X " && $scope.sqr8T == 0 && $scope.turn == 1)
            {
                document.tic.sqr8.value = " O "
                $scope.sqr8T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr3 == " X " && $scope.sqr6 == " X " && $scope.sqr9T == 0 && $scope.turn == 1)
            {
                document.tic.sqr9.value = " O "
                $scope.sqr9T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr1 == " X " && $scope.sqr9 == " X " && $scope.sqr5T == 0 && $scope.turn == 1)
            {
                document.tic.sqr5.value = " O "
                $scope.sqr5T = 1;
                $scope.turn = 0;
            }
            else if($scope.sqr3 == " X " && $scope.sqr7 == " X " && $scope.sqr5T == 0 && $scope.turn == 1)
            {
                document.tic.sqr5.value = " O "
                $scope.sqr5T = 1;
                $scope.turn = 0;
            }
            else
            {
                $scope.AI()
            }
            $scope.check2()
        }

        $scope.AI =function()
        {
            $scope.vari()
            if(document.tic.sqr5.value == "     " && $scope.turn == 1)
            {
                document.tic.sqr5.value = " O "
                $scope.turn = 0
                $scope.sqr5T = 1
            }
            else if(document.tic.$scope.sqr1.value == "     " && $scope.turn == 1)
            {
                document.tic.$scope.sqr1.value = " O "
                $scope.turn = 0
                $scope.sqr1T = 1
            }
            else if(document.tic.sqr9.value == "     " && $scope.turn == 1)
            {
                document.tic.sqr9.value = " O "
                $scope.turn = 0
                $scope.sqr9T = 1
            }
            else if(document.tic.sqr6.value == "     " && $scope.turn == 1)
            {
                document.tic.sqr6.value = " O "
                $scope.turn = 0
                $scope.sqr6T = 1
            }
            else if(document.tic.sqr2.value == "     " && $scope.turn == 1)
            {
                document.tic.sqr2.value = " O "
                $scope.turn = 0
                $scope.sqr2T = 1
            }
            else if(document.tic.sqr8.value == "     " && $scope.turn == 1)
            {
                document.tic.sqr8.value = " O "
                $scope.turn = 0
                $scope.sqr8T = 1
            }
            else if(document.tic.sqr3.value == "     " && $scope.turn == 1)
            {
                document.tic.sqr3.value = " O "
                $scope.turn = 0
                $scope.sqr3T = 1
            }
            else if(document.tic.sqr7.value == "     " && $scope.turn == 1)
            {
                document.tic.sqr7.value = " O "
                $scope.turn = 0
                $scope.sqr7T = 1
            }
            else if(document.tic.sqr4.value == "     " && $scope.turn == 1)
            {
                document.tic.sqr4.value = " O "
                $scope.turn = 0
                $scope.sqr4T = 1
            }
            $scope.check2()
        }

        $scope.reset=function()
        {
            document.tic.$scope.sqr1.value = "     "
            document.tic.sqr2.value = "     "
            document.tic.sqr3.value = "     "
            document.tic.sqr4.value = "     "
            document.tic.sqr5.value = "     "
            document.tic.sqr6.value = "     "
            document.tic.sqr7.value = "     "
            document.tic.sqr8.value = "     "
            document.tic.sqr9.value = "     "
            $scope.sqr1T = 0
            $scope.sqr2T = 0
            $scope.sqr3T = 0
            $scope.sqr4T = 0
            $scope.sqr5T = 0
            $scope.sqr6T = 0
            $scope.sqr7T = 0
            $scope.sqr8T = 0
            $scope.sqr9T = 0
            $scope.vari()
            $scope.turn = 0
            $scope.moveCount = 0
        }

        $scope.resetter=function()
        {
            $scope.reset()
        }




    }]);