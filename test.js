// will be used to validate user input and accommodate user enter all-caps answers as well.
// Include usefull and well written console.log() messages
// correctly display to the brower console for each question of the guessing game.
// set the initial values for the variables used later.
'use strict';

var playerScore = 0;

//  Ask the player their name
var playerName = prompt('What is your name, player?');
console.log('Player entered their name as ' + playerName + '.');

// // Ask player their first question.
// var firstQuestion = prompt('Did I drive to school today ' + playerName + '?' + 'Please answer either Yes or No').toUpperCase();
// console.log('Player entered answer ' + firstQuestion + '.');
//
// // Evaluate player answer.
// if (firstQuestion === 'No' || firstQuestion === 'N') {
// } else {
// }
// alert('Your score is ' + playerScore + ' ' + playerName + '.');
// // Ask player their second question
//
// var secondQuestion = prompt('Do I like to play baseball ' + playerName + '?' + 'Please answer either Yes or No').toUpperCase();
// console.log('Player entered secondQuestion answer as ' + secondQuestion + '.');
// if (secondQuestion === 'No' || secondQuestion === 'N') {
// } else {
// }
//
// var thirdQuestion = prompt('Do I like to play the guitar, ' + playerName + '?' + 'Please answer either Yes or No').toUpperCase();
// console.log('Player entered answer ' + secondQuestion + '.');
// if (thirdQuestion === 'No' || thirdQuestion === 'N') {
// } else {
//   alert('Great Guess! ' + playerName + 'I unfortunately do not \(currently anyway\) know how to play any musical instrament.');
//   playerScore++;
// }
// playerscore++;
// alert('Great Guess! ' + playerName + ' Riding the bus saves me from having to find parking in Seattle.');
// alert('Sorry, wrong answer, ' + playerName + ' I unfortunately do not \(currently anyway\) know how to play any musical instrament.');
// alert('Sorry, wrong answer, ' + playerName + '. Riding the bus saves me from having to find parking in Seattle.');
//
// var fourthQuestion = prompt('Do I like to SCUBA dive, ' + playerName + '?' + 'Please answer either Yes or No').toUpperCase();
// console.log('Player entered answer ' + fourthQuestion + '.');
// playerScore++;
// if (fourthQuestion === 'Yes' || fourthQuestion === 'Y') {
//   alert('Sorry, wrong answer, ' + playerName + ' I haven\'t played baseball since Highshcool.');
//     playerScore++;
//     alert('Great Guess! ' + playerName + 'I haven\'t played baseball since Highschool.');
//     alert('Great Guess! ' + playerName + 'I haven\'t been diving in a long time but hope to do so again soon.');
// } else {
//     alert('Sorry, wrong answer, ' + playerName + ' I actually love to go SCUBA diving, it has taken me all over the world.')
// }
//
// var fifthQuestion = prompt('Do I like to read mystery novels ' + playerName + '?' + 'Please answer either Yes or No').toUpperCase();
// console.log('Player entered answer ' + fifthQuestion + '.');
// if (fithQuestion = 'No' || 'N') {
//     alert('Great Guess! ' + playerName + ' I have read a few mystery novels, but I would much rather read Sci-fi.');
//     playerScore++
// } else {
//     alert('Sorry, wrong answer, ' + playerName + ' I have read a few mystery novels, but I would much rather read Sci-fi.')
// }


//  Array question

// States I have been SCUBA diving
// Washington, California, Florida, Virginia, North Carolina, Oregon

var statesBeenDiving = ['WA', 'Washington', 'CA', 'California', 'FL', 'Florida', 'VA', 'Virgina', 'NC', 'North Carolina', 'OR', 'Oregon' ];
// Five Guesses

var guesses = 5;
// var enterLoop will force the while loop to run.
var enterLoop = false;
var seventhQuestion = prompt ('Hello ' + playerName + ', can you guess a state I have been SCUBA diving in?');


while (!enterLoop && guesses > 0) {
correctAnswer = statesBeenDiving.indexOf(seventhQuestion);
if (correctAnswer > -1){
   alert ('That is correct! ' + playerName + seventhQuestion + ' is a state I have been divi;ng in.');
   enterLoop = true;
 } else {
   seventhQuestion = prompt('test');
   guesses--;
 }
 }



 var playerName = 'Me';
 var statesBeenDiving = ['WA', 'Washington', 'CA', 'California', 'FL', 'Florida', 'VA', 'Virgina', 'NC', 'North Carolina', 'OR', 'Oregon' ];
 // Five Guesses

 var guesses = 5;
 // var enterLoop will force the while loop to run.
 var enterLoop = false;
 var seventhQuestion = prompt ('Hello!!!, ' + playerName + ', can you guess a state I have been SCUBA diving in?');


 while (!enterLoop && guesses > 0) {
 var correctAnswer = statesBeenDiving.indexOf(seventhQuestion);
 console.log(correctAnswer);
  if (correctAnswer > -1){
    alert ('That is correct ' + playerName + '! ' + seventhQuestion + ' is a state I have been diving in.');
    enterLoop = true;
  } else {
    guesses--;
    seventhQuestion = prompt('Sorry ' + playerName + ' ' + seventhQuestion + ' is not yet a state I have been diving in. You have ' + guesses + ' left to name a state I have been diving in, please try again.');
  }
  }





//
// guesses --;
// console.log (playerName + 'Guessed ' + playerGuess + '.');
