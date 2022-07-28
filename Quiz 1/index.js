//QUIZ - HOW WELL DO YOU KNOW ME

//readlineSync tries to let your script have a conversation with the user via a console
var readlineSync = require('readline-sync');

//to store score
var currentScore = 0;

var highScores = [
  {
    name: "Ayussh",
    score: 6
  },
  {
    name: "Adi",
    score: 5
  }
]

//array for questions
var questions = [
   {
    question: "Q1. What's the name of the city that I live in ? ",
    answer: "Delhi"
  },
  { question: "Q2. I was born in which month? ",
    answer: "April"
  },
  {
    question: "Q3. What is the name of my school? ",
    answer: "St. Marks"
  },
  {
    question: "Q4. What is the name of my college? ",
    answer: "Amity University"
  },
  {
    question: "Q5. Do I eat Non-Veg. Yes or No? ",
    answer: "Yes" 
  },
  {
    question: "Q6. My favourite TV SHow? ",
    answer:"Californication"
  }
]

 //welcome function to welcome the user
function welcome() {
  var userName = readlineSync.question("What is your name? ");
  console.log("Welcome to my quiz " + userName + "\nHope you are having a great day. Let's find out how well do you  know me!!")
}

//quiz function to check if the ans is right or not simple if else loop
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("You are right!");
    currentScore = currentScore + 1;
  }
  else {
    console.log("Oops, You are wrong");
    currentScore = currentScore;
  }
  console.log("Current Score: ", currentScore);
  console.log("--------------------");
}

// //function to play the quiz. Will use the quiz function in here
function play () {
  for(i=0; i< questions.length; i++){
    var currentQuestion = questions[i];
          quiz(currentQuestion.question, currentQuestion.answer)
  }
}

// //function to show the final Scores
function showScores() {
      console.log("YAY! You SCORED: ", currentScore);

      console.log("Check out the high scores, if you should be there ping me and I'll update it");

      highScores.map(score => console.log(score.name, " : ", score.score))
}

//calling the above created function
welcome();
play();
showScores();