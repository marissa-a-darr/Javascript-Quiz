let questions = [
  {
    questionNumberOne: {
      question: "What is JavaScript?",
      Answers: [
        { A: "A strictly backend coding language" },
        { B: "A strictly frontend coding language" },
        { C: "A object oriented coding language" },
        { D: "A new coffee drink" },
      ],
    },

    questionNumberTwo: {
      question:
        "To print code to the console, how would you fill in this blank 'console.____('Hello There');",
      Answers: [{ A: "print" }, { B: "" }],
    },
  },
];


// `${questions.questionNumberTwo.question.answer[1].B}`
// console.log(questions[0].questionNumberOne.Answers[1].B)
var quizInfo = document.querySelector(".start-info");
var quizContent = document.querySelector(".quiz-container");
var startButton = document.querySelector(".start-quiz");
var timerEl = document.querySelector("#timer");
var userScore = document.querySelector(".score");
var quizQuestion = document.querySelector(".quiz-question");
var answerA = document.querySelector(".answer-a");
var answerB = document.querySelector(".answer-b");
var answerC = document.querySelector(".answer-c");
var answerD = document.querySelector(".answer-d");
var previousQuestion = document.querySelector(".previous-q");
var nextQuestion = document.querySelector(".next-q");


window.onload = function beginQuiz () {
    quizContent.setAttribute.style('none') = true;
    
}
var timeLeft = 60;
function timer() {
  timeInterval = setInterval(function () {
    if (timeLeft == 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "";
      timeLeft = 60;
    } else {
      timerEl.textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

startButton.addEventListener("click", beginQuiz);
startButton.addEventListener("click", timer);