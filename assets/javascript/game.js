
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessed = [];
var guessLeft = 9;
var computerLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
var computerGuessed = computerLetter;

function init () {

    computerLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    guessed = "";
    guessLeft = 9;
    $("#image-dive").hide();
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    guessed = event.key;
    $("#guessed").append(guessed);

    if(userGuess !== computerLetter)    {
        guessLeft --;
        $("#guessLeft").text(guessLeft);

        if(guessLeft === 0){
            losses++;
            guessLeft = 9;
            $("#losses").text(losses);
            $("#guessLeft").text(guessLeft);
            $("#guessed").text("");
            $("#image-div").html('<img src="assets/images/loserr1.gif" />');
        init();

            alert(" You didn't guess correctly, but please try again ");
        }


    } else if (userGuess === computerLetter){
        wins++;
        $("#wins").text(wins);
        $("#guessLeft").text(9);
        $("#guessed").text("");
        init();
        alert("You Guessed what I was thinking, it was the letter " + ' " ' + userGuess + ' " ' + " you really are a Psychic.. ");
        $("#image-div").html('<img src="assets/images/winner1.gif" />');

    }
};

function restarted () {
    location.reload()

}