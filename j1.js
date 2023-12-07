var questions = document.getElementById("#play");
var playbtn = document.querySelector("#Start");
var q = document.getElementById("#play");
var isWin = false;
var timerElement = document.querySelector("#counter");

var questions = [
  "How much is 2+4:",
  "How much is 20-3:",
  "How much is 3*5:",
  "How much is 50/2:",
];
var answers = [answer1, answer2, answer3, answer4];
var answer1 = ["6", "3", "5", "2"];
var answer2 = ["10", "9", "12", "17"];
var answer3 = ["15", "13", "14", "18"];
var answer4 = ["25", "21", "22", "3"];
var rightanswers = ["6", "17", "15", "25"];

function renderQuestions() {
  var q = questions[Math.floor(Math.random * questions.length)];
  console.log(q);
  return q;
}
function startGame() {
  isWin = false;
  timerCount = 20;
  // Prevents start button from being clicked when round is in progress
  playbtn.disabled = true;
  renderQuestions();
  startTimer();
}

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

//function Quiz() {
//var problem = renderQuestions();
//var xyz = document.querySelector("#play");
//xyz.textContent = problem;
//}
playbtn.addEventListener("click", startGame);
