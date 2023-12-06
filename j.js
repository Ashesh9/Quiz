var questions = document.getElementById("#play");
var playbtn = document.querySelector("#Start");
var ask = document.getElementById("#ask");
var iswin = true;

var questions = [
  "How much is 2+4:",
  "How much is 20-3:",
  "How much is 3*5:",
  "How much is 50/2:",
];
var answers = [question1, question2, question3, question4];
var question1 = [6, 3, 5, 2];
var question2 = [10, 9, 12, 17];
var question3 = [15, 13, 14, 18];
var question4 = [25, 21, 22, 23];
var rightanswers = [6, 17, 15, 25];

function letsCalculate() {
  //event.preventDefault();
  var asked = "";
  for (var i = 0; i < questions.length; i++) {
    asked += questions[i];
    console.log(questions[i]);
  }
  return asked;
}
function Quiz() {
  var abc = letsCalculate();
  var xyz = document.querySelector("#play");
  xyz.textContent = abc;
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
