const tictactoe = document.getElementById("tictactoe");
const rockPaperScissors = document.getElementById("rockPaperScissors");
const hangman = document.getElementById("hangman");
tictactoe.addEventListener("click", function () {
  open("Main/TicTacToe/index.html");
});

rockPaperScissors.addEventListener("click", function () {
  open("Main/rockPaperScissors/game_js/index.html");
});

hangman.addEventListener("click", function () {
  open("Main/hangman/index.html");
});
