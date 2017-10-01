"use strict";

// This will be a five question guessing game.
// The questions will be a mix of Yes/No answers. User input must accept either y/n or Yes/No responses. toUpperCase() or toLowerCase()
// will be used to validate user input and accommodate user enter all-caps answers as well.
// Include usefull and well written console.log() messages
// correctly display to the brower console for each question of the guessing game.

// set the initial values for the variables used later.
var playerScore = 0;

//  Ask the player their name
var playerName = prompt ('What is your name, player?');
console.log ('Player entered their name as ' + playerName + '.');

// Ask player their first question.
var firstQuestion = prompt ('Did I drive to school today ' + playerName + '?' + ' Please answer either Yes or No').toUpperCase();
console.log ('Player entered answer ' + firstQuestion + '.');

// Evaluate player answer.

if (firstQuestion === 'No' || firstQuestion === 'N') {
  alert ('Great Guess! ' + playerName + ' Riding the bus saves me from having to find parking in Seattle.');
  playerScore++ ;
} else {
  alert ('Sorry, wrong answer, ' + playerName + '.' + ' Riding the bus saves me from having to find parking in Seattle.' );
}
alert ('Your score is ' + playerScore + ' ' + playerName + '.' );

// Ask player their second question

var secondQuestion = prompt ('Do I like to play baseball ' + playerName + '?' + ' Please answer either Yes or No').toUpperCase();
console.log ('Player entered secondQuestion answer as ' + secondQuestion + '.');
if (secondQuestion === 'No' || secondQuestion === 'N') {
  alert ('Great Guess! ' + playerName + 'I haven\'t played baseball since Highschool.');
  playerScore++ ;
} else {
  alert ('Sorry, wrong answer, ' + playerName + ' I haven\'t played baseball since Highshcool.');
}
alert ('Your score is ' + playerScore + ' ' + playerName + '.' );

// Ask player their third question.

var thirdQuestion = prompt ('Do I like to play the guitar, ' + playerName + '?' + 'Please answer either Yes or No').toUpperCase();
console.log ('Player entered answer ' + secondQuestion + '.');
if (thirdQuestion === 'No' || thirdQuestion === 'N' ) {
  alert ('That is correct ' + playerName + 'I unfortunately do not /(as of yet/) play any musical instrament.')
} else {
  alert ('Actually ' + playerName + ' I never learned to play any musical instrament.');
var fourthQuestion = prompt ('Do I like to SCUBA dive ' + playerName + '?');
if (fourthQuestion === 'Yes' || fourthQuestion === 'Y') {
  alert ('You know me well ' + playerName + ' I used to SCUBA dive regularly, I miss it very much and cannot wait to get into the water again');
} else {
  alert ('Sorry ' + playerName + ' that is the wrong answer. I actually love SCUBA diving.');
}
var fifthQuestion = prompt ('Do I like to read mystery novels ' + playerName + '?' + 'Please answer either Yes or No').toUpperCase();
console.log ('Player entered answer ' + fifthQuestion + '.');
if (fithQuestion === 'No' || fithQuestion === 'N') {
  alert ('Great Guess! ' + playerName + ' I have read a few mystery novels, but I would much rather read Sci-fi.' );
  playerScore++;
} else {
  alert ('Sorry, wrong answer, ' + playerName + ' I have read a few mystery novels, but I would much rather read Sci-fi.')
}

// Question # 6

// var userGuess = prompt ('Hello, can you guess my number? Please enter a number between 1 and 200.');
// var userNumberConverted = parseInt(userGuess);
// var guessCount = 0;
// var highValue = 200;
// var lowValue = 1;
//
// while (userNumberConverted != 42) {
//   userNumberConverted = parseInt(userGuess);
//   console.log ('Player entered ' + userGuess + '.' );
//   guessCount++;
//   if (userNumberConverted < 42){
//     lowValue = userNumberConverted;
//     alert ('You\'re guess was incorrect. Please guess a higher number');
//     userGuess = prompt ('Please guess again, enter a number between ' + userNumberConverted + ' and ' + highValue + '.' );
//   } else if (userNumberConverted > 42){
//     highValue = userNumberConverted;
//     alert ('You\'re guess was incorrect. Please guess a lower number');
//     userGuess = prompt ('Please guess again, enter a number between ' + lowValue + ' and ' + userNumberConverted + '.' );
//   }
// if (guessCount === 0 && userNumberConverted === 42) {
//   alert ('congratulations, you guess correct on the first try!');
// } else {
//   alert ('congratulations, you guessed the correct number in ' + guessCount + '.');
// }
