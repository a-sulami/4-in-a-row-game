
var ar1 = [
    [41, 31, 21, 11],
    [42, 32, 22, 12],
    [43, 33, 23, 13],
    [44, 34, 24, 14],
];
var chkWinner = [
    [41, 31, 21, 11],
    [42, 32, 22, 12],
    [43, 33, 23, 13],
    [44, 34, 24, 14]
];
var chkWinnerH = [41, 32, 23, 14];
var chkWinnerH2 = [44, 33, 22, 11];
$(document).ready(function () {
    var playerTurn1 = 0;
    var color1 = "red";
    var color2 = "blue";
    var color = [color1, color2];
    var counter = 0;
// to change the players turn
    function playerTurn() {
        if (playerTurn1 == 0) {
            playerTurn1++
        } else {
            playerTurn1--
        }
    }
    function checkWinner() {
// check win vertical
        var w = [[], [], [], []];
        for (let i = 0; i < chkWinnerH.length; i++) {
            for (let j = 0; j < chkWinnerH.length; j++) {
                if ($("#" + chkWinner[i][j]).hasClass(color[playerTurn1])) {


                    w[i].push("#" + chkWinner[i][j])

                }
            }
        }

        if (w[0].length == 4 || w[1].length == 4 || w[2].length == 4 || w[3].length == 4) {
            alert('Win');
            reset();

        }
        // check win Horizontal 
        var w = [[], [], [], []];
        for (let i = 0; i < chkWinnerH.length; i++) {
            for (let j = 0; j < chkWinnerH.length; j++) {
                if ($("#" + chkWinner[j][i]).hasClass(color[playerTurn1])) {


                    w[i].push("#" + chkWinner[j][i])





                }

            }


        }


        if (w[0].length == 4 || w[1].length == 4 || w[2].length == 4 || w[3].length == 4) {
            alert('Win');
            reset();
        }

        // check win cross way 
        var wH = [];
        var wH2 = [];
        for (let k = 0; k < chkWinnerH.length; k++) {
            if ($("#" + chkWinnerH[k]).hasClass(color[playerTurn1])) {

                wH.push("#" + [k]);

            }
        }
        for (let k = 0; k < chkWinnerH2.length; k++) {
            if ($("#" + chkWinnerH2[k]).hasClass(color[playerTurn1])) {


                wH2.push("#" + [k]);


            }
        }

        if (wH.length === 4 || wH2.length === 4) {
            alert("Win H !!");
            reset();

        }

    };

    function reset(){
        location.reload();
    }



// to take the clicks from the user 

    $('[class^="column"]').on('click', function (event) {


        var index = event.currentTarget.className.slice(-1) - 1;
        $("#" + ar1[index]).addClass((color[playerTurn1]));

        counter ++;

       
        ar1[index].shift();



        checkWinner();
        playerTurn();
        var turn = (playerTurn1 + 1);
        $("span").text(turn);
// for the tie statment
        if (counter == 16){
            alert("its a Tie !!");  
            reset();
        }
        // for the restart Button 
        $('.buttonR').click(function() {
            location.reload();
        });

    });


});