var player1Result = document.getElementById("player1-result");
let player1ResultCounter = 0;
var player2Result = document.getElementById("player2-result");
let player2ResultCounter = 0;
var tieResult = document.getElementById("tie-result");
let tieCounter = 0;
let turn = document.getElementById("turn");
let winnerDisplay = document.getElementById("winnerDisplay");
let signDisplay = document.getElementById("signDisplay");
let i = 0;
let j = 1;
let cells = document.getElementsByClassName("tile");
let resetGame = document.getElementById("reset");
let finalWinner = document.getElementById("final-winner");

//////////////////////////////////////////////////////////////////////////////////////////////////

function init(selector) {
  for (let cell of cells) {
    cell.addEventListener("click", function () {
      if (i % 2 == 0) {
        this.textContent = "×";
      } else {
        this.style.color = "#f2b236";
        this.textContent = "O";
        turn.innerText = "O";
      }
      /////////////////////////////////////////////////
      // here we have to check for win or draw
      if (isVictory(cells)) {
        if (i % 2 == 0) {
          player1ResultCounter++;
          player1Result.innerText = player1ResultCounter;
          winnerDisplay.style.display = "block";
          signDisplay.innerText = "×";
          checkFinalWinner();
          resetBoard(cells);
        } else {
          player2ResultCounter++;
          player2Result.innerText = player2ResultCounter;
          winnerDisplay.style.display = "block";
          signDisplay.innerText = "O";
          signDisplay.style.color = "#f2b236";
          checkFinalWinner();
          resetBoard(cells);
        }
      } else if (i == 8) {
        tieCounter++;
        tieResult.innerText = tieCounter;
        winnerDisplay.style.display = "block";
        signDisplay.innerText = "Tie!";
        signDisplay.style.color = "rgb(177, 177, 177)";
        checkFinalWinner();
        resetBoard(cells);
      }
      i++;

      if (j % 2 == 0) {
        turn.innerText = "×";
      } else {
        turn.innerText = "O";
      }
      j++;
    });
  }
}

function isVictory(cells) {
  let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let comb of combs) {
    if (
      cells[comb[0]].textContent == cells[comb[1]].textContent &&
      cells[comb[1]].textContent == cells[comb[2]].textContent &&
      cells[comb[0]].textContent != ""
    ) {
      return true;
    }
  }

  return false;
}

init();

resetGame.addEventListener("click", function () {
  resetBoard(cells);
});

function resetBoard(cells) {
  i = 0;
  i--;
  j = 0;

  for (let cell of cells) {
    cell.textContent = "";
    cell.style = "none";
  }

  if (i == 0) {
    player1Result = i;
    tieResult = i;
    player2Result = i;
    winnerDisplay.style.display = "none";
    alWinner.style.display = "none";
  }
}

//////
function checkFinalWinner() {
  if (player1ResultCounter == 3) {
    finalWinner.style.display = "block";
    finalWinner.textContent = "Player 1 wins the game!";
  } else if (player2ResultCounter == 3) {
    finalWinner.style.display = "block";
    finalWinner.textContent = "Player 2 wins the game!";
  } else if (tieCounter == 3) {
    finalWinner.style.display = "block";
    finalWinner.textContent = "No winners this time!";
  } else if (
    player1ResultCounter != 3 ||
    player2ResultCounter != 3 ||
    tieCounter != 3
  ) {
    finalWinner.style.display = "none";
  }
}
