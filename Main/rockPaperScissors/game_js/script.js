let robotScore = 0;
let playerScore = 0;

const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const computerChoice = document.getElementById("computer-choice");
const choices = ["rock", "paper", "scissors"];
let status1 = document.getElementById("status");
let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");

const results = document.getElementById("results");
const playAgainButton = document.getElementById("playAgain");
const endBanner = document.getElementsByClassName("endBanner")[0];
const body = document.getElementsByClassName("flex")[0];
const container = document.getElementsByClassName("container")[0];

///// PAPER event listener //////////////////////////////////////////////////////
paper.addEventListener("click", function (e) {
  robotChoice();
  displayWinner(e.target.id, robotChoice());

  displayScore();
  computerChoice.style.color = getRandomColor();
});

///// ROCK event listener ///////////////////////////////////////////////////////
rock.addEventListener("click", function (e) {
  robotChoice();
  displayWinner(e.target.id, robotChoice());

  displayScore();
  computerChoice.style.color = getRandomColor();
});

///// SCISSORS event listener //////////////////////////////////////////////////
scissors.addEventListener("click", function (e) {
  robotChoice();
  displayWinner(e.target.id, robotChoice());

  displayScore();
  computerChoice.style.color = getRandomColor();
});

////// Randomize the robot's choice /////////////////////////////////////////////

function robotChoice() {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice.innerHTML = choice;
  return choice;
}

////// Generator random boje u svrhu vidljivosti //////////////////////////////////

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/////// Score / end banner displayer ////////////////////////////////////////////////////////////

function displayScore() {
  computerScore.innerHTML = robotScore;
  userScore.innerHTML = playerScore;

  function endBannerDisplay(player, robot) {
    if (player == 5) {
      endBanner.classList.remove("invisible");
      body.style.opacity = 0.3;
      container.style.opacity = 0.3;
      results.innerHTML = "You win this one!";

      playAgainButton.addEventListener("click", function () {
        playerScore = 0;
        robotScore = 0;
        endBanner.classList.add("invisible");
        body.style.opacity = 1;
        container.style.opacity = 1;
        computerScore.innerHTML = robotScore;
        userScore.innerHTML = playerScore;
        status1.innerHTML = "start of the game";
      });
    } else if (robot == 5) {
      endBanner.classList.remove("invisible");
      body.style.opacity = 0.3;
      container.style.opacity = 0.3;
      results.innerHTML = "You LOSE!";
      playAgainButton.addEventListener("click", function () {
        playerScore = 0;
        robotScore = 0;
        endBanner.classList.add("invisible");
        body.style.opacity = 1;
        container.style.opacity = 1;
        computerScore.innerHTML = robotScore;
        userScore.innerHTML = playerScore;
        status1.innerHTML = "start of the game";
      });
    }
  }

  if (playerScore == 5 || robotScore == 5) {
    endBannerDisplay(playerScore, robotScore);
  }
}

/////// BATTLE //////////////////////////////////////////////////////////////////////

function displayWinner(playerChoice, computerChoice) {
  if (playerChoice === "paper" && computerChoice === "paper") {
    status1.innerHTML = "Tie";
  } else if (playerChoice === "rock" && computerChoice === "rock") {
    status1.innerHTML = "Tie";
  } else if (playerChoice === "scissors" && computerChoice === "scissors") {
    status1.innerHTML = "Tie";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    status1.innerHTML = "You win!";

    playerScore++;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    status1.innerHTML = "You win!";

    playerScore++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    status1.innerHTML = "You win!";

    playerScore++;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    status1.innerHTML = "You LOSE!";

    robotScore++;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    status1.innerHTML = "You LOSE!";

    robotScore++;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    status1.innerHTML = "You LOSE!";

    robotScore++;
  }
}

//////// End of the game bannner
