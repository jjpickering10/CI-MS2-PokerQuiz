const handOne = document.getElementById("hand-one");
const handTwo = document.getElementById("hand-two");
const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const score = document.getElementById("score");
const message = document.getElementById("message");
const question = document.getElementById("question");

const modal = document.getElementById("modal");
const overlay = document.getElementById("modal-overlay");

const clubButton = document.getElementById("club");
const diamondButton = document.getElementById("diamond");
const spadeButton = document.getElementById("spade");
const homeButton = document.getElementById("home-button");
const playAgainButton = document.getElementById("play-again-button");
const scoresButton = document.getElementById("scores-button");

const pageContainer = document.getElementById("pair-container");

let scoreCounter = 0;
let questionCounter = 0;

startButton.addEventListener("click", startGame);

clubButton.addEventListener("click", () => {
  window.location.assign("club.html");
});
diamondButton.addEventListener("click", () => {
  window.location.assign("diamond.html");
});
spadeButton.addEventListener("click", () => {
  window.location.assign("spade.html");
});
homeButton.addEventListener("click", () => {
  window.location.assign("index.html");
});
playAgainButton.addEventListener("click", () => {
  window.location.assign("heart.html");
});
scoresButton.addEventListener("click", () => {
  window.location.assign("score.html");
});

function startGame() {
  question.classList.add("hide");
  startButton.classList.add("hide");
  nextButton.classList.add("hide");
  message.classList.add("hide");
  // ---- Using API from https://deckofcardsapi.com/ -----
  const handRequest = new XMLHttpRequest();
  handRequest.open(
    "GET",
    "https://deckofcardsapi.com/api/deck/new/draw/?count=2"
  );
  handRequest.onload = function () {
                                if (handRequest.status >= 200 && handRequest.status < 400) {

    const handData = JSON.parse(handRequest.responseText);
    console.log(handData);
    displayHands(handData);
    } else {
              alert("We've encountered an error. Let's blame the dealer. Please refresh page and play again.")
          }
  };
  handRequest.send();
}

function displayHands(data) {
  cardOne = data.cards[0].value;
  cardTwo = data.cards[1].value;

  handOne.innerHTML = `<img class="img-one" src="${data.cards[0].image}" alt="${cardOne}, ${data.cards[0].suit} playing card">`;
  handTwo.innerHTML = `<img class="img-two" src="${data.cards[1].image}" alt="${cardTwo}, ${data.cards[1].suit} playing card">`;

  if (cardOne === cardTwo) {
    scoreCounter++;
    score.innerText = scoreCounter;
    success();
  } else {
    failure();
  }
}

function success() {
  const successMessage =
    pairSuccess[Math.floor(Math.random() * pairSuccess.length)];
  setTimeout(() => {
    message.classList.remove("hide");
    message.classList.add("message-text");
    message.innerText = successMessage;
    nextButton.classList.remove("hide");
    nextButton.classList.add("next-button");
  }, 6000);

  nextButton.addEventListener("click", nextShuffle);
}

function failure() {
  const failureMessage =
    pairFailure[Math.floor(Math.random() * pairFailure.length)];
  setTimeout(() => {
    message.classList.remove("hide");
    message.classList.add("message-text");
    message.innerText = failureMessage;
    nextButton.classList.remove("hide");
    nextButton.classList.add("next-button");
  }, 6000);

  nextButton.addEventListener("click", nextShuffle);
}

function nextShuffle() {
  localStorage.setItem("latest-heart-score", scoreCounter);

  questionCounter++;
  if (questionCounter < 10) {
    setTimeout(() => {
      startGame();
    }, 1000);
  } else {
    openModal();
  }
}

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
  pageContainer.classList.add("not-active");
  score.innerText = `${scoreCounter} pair/s in 10 attempts`;
}

//  https://stackoverflow.com/questions/12162786/adding-new-objects-to-localstorage

function saveScores() {
  const saveScoreButton = document.getElementById("save-score");
  const userScore = localStorage.getItem("latest-heart-score");
  const userName = document.getElementById("username");
  const heartScores = JSON.parse(localStorage.getItem("heartScores")) || [];
  const latestHeartScores = {
    name: userName.value,
    score: userScore,
  };
  heartScores.push(latestHeartScores);
  localStorage.setItem("heartScores", JSON.stringify(heartScores));

  userName.classList.add("hide");
  saveScoreButton.classList.add("hide");
}

let pairFailure = [
  "Please give me a pair",
  "I never get a pair",
  "Never a pair",
  "Urgh, maybe next time",
  "No pair for you",
];

let pairSuccess = [
  "Woooooo!!!!",
  "OMG yes!",
  "Love a good pair",
  "So easy",
  ":)",
];
