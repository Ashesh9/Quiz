var ask = document.querySelector("#play");
var playbtn = document.querySelector("#Start");
var isWin = false;
var timerElement = document.querySelector("#counter");
var loseDeclare = document.querySelector("#declare");
var lose = document.querySelector("#loss");
var win = document.querySelector("#win");
var winDeclare = document.querySelector("#declare");
var resetButton = document.querySelector("#reset");
var defDeclare = document.querySelector("#declare");
var option0 = document.querySelector("#answer0");
var option1 = document.querySelector("#answer1");
var option2 = document.querySelector("#answer2");
var option3 = document.querySelector("#answer3");

var winCounter = 0;
var loseCounter = 0;

index = [];
index[0] = ["How much is 2+4:", "6", "3", "5", "2"];
index[1] = ["How much is 20-3:", "10", "9", "12", "17"];
index[2] = ["How much is 3*5:", "15", "13", "14", "18"];
index[3] = ["How much is 50/2:", "25", "21", "22", "3"];

const rightanswers = ["6", "17", "15", "25"];

function renderQuestions() {
  var i = Math.floor(Math.random() * 4);
  let x = [];
  let queset = [];
  queset = x.concat(index[i]);
  ask.textContent = queset[0];
  option0.textContent = queset[1];
  option1.textContent = queset[2];
  option2.textContent = queset[3];
  option3.textContent = queset[4];
}

function startGame() {
  isWin = false;
  timerCount = 5;
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
  defDeclare.textContent = "Good Luck";
  ask.textContent = "Question:";
  option0.textContent = "option";
  option1.textContent = "option";
  option2.textContent = "option";
  option3.textContent = "option";
  timerElement.textContent = 10;

  // Renders win and loss counts and sets them into client storage
  setWins();
  setLosses();
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
