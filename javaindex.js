var ask = document.querySelector("#play");
var playbtn = document.querySelector("#Start");
var q = document.querySelector("#play");
var isWin = false;
var timerElement = document.querySelector("#counter");
var loseDeclare = document.querySelector("#declare");
var lose = document.querySelector("#loss");
var win = document.querySelector("#win");
var winDeclare = document.querySelector("#declare");
var resetButton = document.querySelector("#reset");
var defDeclare = document.querySelector("#declare");
var options = document.querySelector("#answer");

var winCounter = 0;
var loseCounter = 0;

var questions = [
  "How much is 2+4:",
  "How much is 20-3:",
  "How much is 3*5:",
  "How much is 50/2:",
];
var answers = [
  "6",
  "3",
  "5",
  "2",
  "10",
  "9",
  "12",
  "17",
  "15",
  "13",
  "14",
  "18",
  "25",
  "21",
  "22",
  "3",
];
var answer1 = ["6", "3", "5", "2"];
var answer2 = ["10", "9", "12", "17"];
var answer3 = ["15", "13", "14", "18"];
var answer4 = ["25", "21", "22", "3"];

var rightanswers = ["6", "17", "15", "25"];

function renderQuestions() {
  var i = Math.floor(Math.random() * questions.length);
  var issue = questions[i];

  ask.textContent = issue;

  //program a loop to render options.
  if ((i = 0)) {
    for (var j = 0; j < 4; j++) {
      var x = answers[j];
      options.textContent = x;
      console.log(options);
    }
  }

  console.log(ask);
}

function startGame() {
  isWin = false;
  timerCount = 10;
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

function loseGame() {
  loseDeclare.textContent = "GAME OVER";
  loseCounter++;
  playbtn.disabled = false;
  setLosses();
}
// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

function winGame() {
  winDeclare.textContent = "YOU WON!!!🏆 ";
  winCounter++;
  playbtn.disabled = false;
  setWins();
}
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

playbtn.addEventListener("click", startGame);

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  defDeclare.textContent = "...";
  // Renders win and loss counts and sets them into client storage
  setWins();
  setLosses();
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
