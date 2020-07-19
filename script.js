//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var foxScore = 0;
var beeScore = 0;
var dolphinScore = 0;
var parrotScore = 0;

var result = document.getElementById("result");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//#qestion 2//
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//#question 3//
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", fox);
q1a2.addEventListener("click", bee);
q1a3.addEventListener("click", dolphin);
q1a4.addEventListener("click", parrot);

q2a1.addEventListener("click", fox);
q2a2.addEventListener("click", bee);
q2a3.addEventListener("click", dolphin);
q2a4.addEventListener("click", parrot);

q3a1.addEventListener("click", fox);
q3a2.addEventListener("click", bee);
q3a3.addEventListener("click", dolphin);
q3a4.addEventListener("click", parrot);

//#TODO: Define quiz functions here
function fox() {
  foxScore = foxScore + 1;
  questionCount = questionCount + 1;
  if (questionCount >= 3) {
    updateResult();
  }
}

function bee() {
  beeScore = beeScore + 1;
  questionCount = questionCount + 1;
  if (questionCount >= 3) {
    updateResult();
  }
}

function dolphin() {
  dolphinScore = dolphinScore + 1;
  questionCount = questionCount + 1;
  if (questionCount >= 3) {
    updateResult();
  }
}

function parrot() {
  parrotScore = parrotScore + 1;
  questionCount = questionCount + 1;
  if (questionCount >= 3) {
    updateResult();
  }
}

function updateResult() {
  if (foxScore >= 2) {
    result.innerHTML = "fox!";
  } else if (beeScore >= 2) {
    result.innerHTML = "bee!";
  } else if (dolphinScore >= 2) {
    result.innerHTML = "dolphin!";
  } else if (parrotScore >= 2) {
    result.innerHTML = "parrot!";
  } else {
    result.innerHTML = "Hmm.. Steve is confused. Try again later.";
  }
}
// add corresponding image to text result //
