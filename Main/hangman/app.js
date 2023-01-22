// https://random-word-api.herokuapp.com/word - api to genereate a random word
const api = "https://random-word-api.herokuapp.com/word";
let randomWord;
let tries = 6;
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

/////////////////////////////////////////////////////////////
const tryCounter = document.getElementById("tryCounter");
tryCounter.innerText = 6;
const keyboard = document.getElementById("keyboard");
const letterDisplay = document.getElementById("letterDisplay");
const resetGame = document.getElementById("reset");
const winDisplay = document.getElementById("winDisplay");

//////////////////////////////////////////////////////////////

function getWord() {
  fetch(api)
    .then((odgovor) => odgovor.json())
    .then((data) => {
      randomWord = data;
      createLines(randomWord);
    })
    .catch((error) => console.log(error));
}

getWord();

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////

var lines = document.getElementsByClassName("hiddenLetters");

//////////////////////////////////////////////////////////////////
for (let i = 0; i < letters.length; i++) {
  var letter = document.createElement("li");
  letter.setAttribute("value", letters[i]);
  letter.innerText = letters[i];
  keyboard.append(letter);
}

/////////////////////////////////////////////////////////////////////

const keyboardButtons = document.getElementsByTagName("li");
let inputLetter;
for (const button of keyboardButtons) {
  button.addEventListener("click", function () {
    inputLetter = button.innerHTML;
    check(button);

    button.style.opacity = "0.5";
    button.style.zIndex = "-1";
  });
}

/////////////////////////////

function check(button) {
  for (let i = 0; i < lines.length; i++) {
    if (button.innerHTML === lines[i].attributes.name.value) {
      lines[i].innerText = lines[i].attributes.name.value;
    }
  }

  if (!randomWord[0].split("").includes(button.innerHTML)) {
    if (tries > 1) {
      tries--;
      if (tries == 5) {
        hangmanHead();
      } else if (tries == 4) {
        hangmanBody();
      } else if (tries == 3) {
        hangmanLeftArm();
      } else if (tries == 2) {
        hangmanRightArm();
      } else if (tries == 1) {
        hangmanLeftLeg();
      }
    } else {
      console.log("loser");
      winDisplay.innerText = "You lose!";

      document.getElementsByClassName("screen")[0].style.opacity = 0.5;
      winDisplay.style.display = "block";
      winDisplay.style.border = "2px solid red";
      winDisplay.style.boxShadow = "5px 5px 10px rgba(255, 0, 0)";

      tries = 0;
      hangmanRightLeg();
    }
  }

  tryCounter.innerText = tries;
  let winCounter = 0;
  for (j = 0; j < lines.length; j++) {
    if (lines[j].innerText.toLowerCase() == lines[j].attributes.name.value) {
      winCounter++;
      if (winCounter == lines.length) {
        ////// WIN CONDITION
        winDisplay.innerText = "You win!";
        winDisplay.style.display = "block";
        document.getElementsByClassName("screen")[0].style.opacity = 0.5;
      }
    }
  }
}

/////////////////////////// Reset / new word

resetGame.addEventListener("click", function () {
  getWord();
  deleteLines(randomWord);
  letterDisplay;
  tries = 6;
  tryCounter.innerText = 6;
  winDisplay.style.display = "none";
  document.getElementsByClassName("screen")[0].style.opacity = 1;
  const context = canvas.getContext("2d");
  context.clearRect(0, 98, 90, 250);
  for (const button of keyboardButtons) {
    button.style.zIndex = "1";
    button.style.opacity = "1";
  }
});

///////////////////////// Create lines

function createLines(randomWord) {
  for (let i = 0; i < randomWord[0].split("").length; i++) {
    var line = document.createElement("li");
    line.setAttribute("class", "hiddenLetters");
    line.setAttribute("name", randomWord[0].split("")[i]);
    letterDisplay.append(line);
  }
}

function deleteLines(randomWord) {
  for (let i = 0; i < randomWord[0].split("").length; i++) {
    letterDisplay.removeChild(letterDisplay.firstChild);
  }
}

////////////////////////////
///////////////////////////
////////////////////////////
///////////////////////////
////////////////////////////
///////////////////////////
////////////////////////////
///////////////////////////
////////////////////////////
///////////////////////////
var canvas = document.getElementById("platno");
var ctx = canvas.getContext("2d");

function hangmanBase() {
  var ctxLinija = canvas.getContext("2d");
  var ctxLinija2 = canvas.getContext("2d");
  var ctxLinija3 = canvas.getContext("2d");

  ctx.beginPath();
  ctx.rect(150, 250, 100, 50);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctxLinija.beginPath();
  ctxLinija.moveTo(200, 250);
  ctxLinija.lineTo(200, 50);
  ctxLinija.lineWidth = 4;
  ctxLinija.strokeStyle = "gray";
  ctxLinija.stroke();

  ctxLinija2.beginPath();
  ctxLinija2.moveTo(200, 50);
  ctxLinija2.lineTo(65, 50);
  ctxLinija2.lineWidth = 4;
  ctxLinija2.strokeStyle = "gray";
  ctxLinija2.stroke();

  ctxLinija3.beginPath();
  ctxLinija3.moveTo(65, 50);
  ctxLinija3.lineTo(65, 100);
  ctxLinija3.lineWidth = 4;
  ctxLinija3.strokeStyle = "gray";
  ctxLinija3.stroke();
}

hangmanBase();

function hangmanHead() {
  var ctxHead = canvas.getContext("2d");
  var centerX = 65;
  var centerY = 120;
  var radius = 20;

  ctxHead.beginPath();
  ctxHead.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  // ctxHead.arc(centerX, centerY, radius, 0.5*Math.PI, 1.5*Math.PI);
  ctxHead.fillStyle = "rgb(237, 183, 85)";
  ctxHead.fill();
  ctxHead.lineWidth = 3;
  ctxHead.strokeStyle = "rgb(237, 183, 85)";
  ctxHead.stroke();
}

function hangmanBody() {
  var ctxBody = canvas.getContext("2d");
  ctxBody.beginPath();
  ctxBody.moveTo(65, 140);
  ctxBody.lineTo(65, 220);
  ctxBody.lineWidth = 4;
  ctxBody.strokeStyle = "rgb(237, 183, 85)";
  ctxBody.stroke();
}

function hangmanLeftArm() {
  var ctxLeftArm = canvas.getContext("2d");
  ctxLeftArm.beginPath();
  ctxLeftArm.moveTo(65, 150);
  ctxLeftArm.lineTo(85, 200);
  ctxLeftArm.lineWidth = 4;
  ctxLeftArm.strokeStyle = "rgb(237, 183, 85)";
  ctxLeftArm.stroke();
}

function hangmanRightArm() {
  var ctxRightArm = canvas.getContext("2d");
  ctxRightArm.beginPath();
  ctxRightArm.moveTo(65, 150);
  ctxRightArm.lineTo(45, 200);
  ctxRightArm.lineWidth = 4;
  ctxRightArm.strokeStyle = "rgb(237, 183, 85)";
  ctxRightArm.stroke();
}

function hangmanLeftLeg() {
  var ctxLeftLeg = canvas.getContext("2d");
  ctxLeftLeg.beginPath();
  ctxLeftLeg.moveTo(65, 220);
  ctxLeftLeg.lineTo(75, 280);
  ctxLeftLeg.lineWidth = 4;
  ctxLeftLeg.strokeStyle = "rgb(237, 183, 85)";
  ctxLeftLeg.stroke();
}

function hangmanRightLeg() {
  var ctxRightLeg = canvas.getContext("2d");
  ctxRightLeg.beginPath();
  ctxRightLeg.moveTo(65, 220);
  ctxRightLeg.lineTo(55, 280);
  ctxRightLeg.lineWidth = 4;
  ctxRightLeg.strokeStyle = "rgb(237, 183, 85)";
  ctxRightLeg.stroke();
}
