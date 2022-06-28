var readlineSync = require('readline-sync');

var score = 0;

var highScores = [
  {
    name: "Ayussh",
    score: 6,
  },

  {
    name: "Adi",
    score: 4,
  },
]


var questions = [ {
    question: "Q1. What's the name of the city that I visited recently ? ",
    answer: "Mumbai"
  },
  {
    question: "Q2. I was born in which year ? ",
    answer: "1999"
  },
  {
    question: "Q3. What is the name of my school ? ",
    answer: "DPS "
  },
  {
    question: "Q4. What is the name of my college ?",
    answer: "VIPS"
  },
  {
    question: "Q5. Do I eat Non-Veg. Yes or No ?",
    answer: "No"
  },
  {
    question: "Q6. My favourite TV SHow ?",
    answer:"Californication"
  }
]

function welcome() {
  const chalk = require('chalk');
  var userName = readlineSync.question("What's your name? ");
  console.log(chalk.blue.bold("Welcome to my quiz "+ userName + " Hope you are having a great day. Let's find out how well do you  know me!!"));
}

// play function
function quiz(question, answer) {

  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    const log = console.log;
    const chalk = require('chalk');
    log(chalk.bgGreen.bold("You are right!"));
    score = score + 1;
  }
  else {
    const log = console.log;
    const chalk = require('chalk');
    log(chalk.bgRed.bold("Oops! Wrong Answer"));
    score = score;
  }
   console.log("Current Score: ", score);
              console.log("---------");
}

 
function play() {
  for( var i = 0; i < questions.length; i ++) {
  var currentQuestion = questions[i];
          quiz(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
      console.log("YAY! You SCORED: ", score);

      console.log("Check out the high scores, if you should be there ping me and I'll update it");

      highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
play();
showScores();
