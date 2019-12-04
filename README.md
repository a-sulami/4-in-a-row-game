# 4-in-a-row-game


https://a-sulami.github.io/4-in-a-row-game/


made by : Abdularhman Alsulami 


i made a Connect4 game Useing html , css and javascript 
my html page has a header and main , the main has 5 divs first one is the container for the game board and the last four divs are for the columens which the game board will be a 4 x 4 board , in the css file i used the flexBox to make the columns inside the container . 
in java script i used an array (ar1) to git the ids of the cells and ass colors to it after being clicked 
$('[class^="column"]').on('click', function (event) {


        var index = event.currentTarget.className.slice(-1) - 1;
        $("#" + ar1[index]).addClass((color[playerTurn1]));

        counter ++;

       
        ar1[index].shift();



        checkWinner();
        playerTurn();
         
this is the main function to take the clicked cells from the player and add the color , .shift() is to rmove the colored cell so the player can only the last cell in the colum first and so on . 
checkWinner() function is to call the function and check if there is a winner by looping throw a 2d array [chkWinner] and check vertcally then horizantly and crossly . i used push() to add the cells with the same color and in the same vertical , horizintal or cross way to check for a winner . if the length of the new array w[] == 4 it means we have a winner 







