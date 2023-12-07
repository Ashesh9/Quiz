var questions = document.getElementById("#play");
var playbtn = document.querySelector("#Start");
var ask = document.getElementById("#ask");
var isWin = false;

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
iswin = true;

function letsCalculate(iswin = true) {
  // event.preventDefault();
  var asked = "";
  for (var i = 0; i < questions.length; i++) {
    asked += questions[i];
    console.log(questions[i]);

    var options = document.querySelector("#answer");
    for (var j = 0; j < 4; j++) {
      var answer = answers[j];
      options.textContent = answer;
      console.log(answers[j]);
    }
  }

  return asked;
}
function Quiz() {
  var problem = letsCalculate();
  var xyz = document.querySelector("#play");
  xyz.textContent = problem;
}

playbtn.addEventListener("click", Quiz);
//playbtn.addEventListener("click", letsCalculate);

//function letsCalculate(event) {
//event.preventDefault();
//if (timer >= 0 && iswin === true) {
//let ask = "";
//for (var i = 0; i < questions.length; i++) {
/// ask.textContent = questions[i];
///console.log(questions[i]);
//}
//}
//return ask;
//}
//letsCalculate.addEventListener("click", letsCalculate);
