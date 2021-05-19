let firstOption = document.getElementById("first-option");
let secondOption = document.getElementById("second-option");
let firstOptionCards = document.getElementById("first-option-cards");
let secondOptionCards = document.getElementById("second-option-cards");
const startButton = document.getElementById("start");
const currentScore = document.getElementById("score");

const modal = document.getElementById("modal");
const overlay = document.getElementById("modal-overlay");

const diamondButton = document.getElementById("diamond");
const heartButton = document.getElementById("heart");
const spadeButton = document.getElementById("spade");
const homeButton = document.getElementById("home-button");
const playAgainButton = document.getElementById("play-again-button");
const scoresButton = document.getElementById("scores-button");
const pageContainer = document.getElementById("club-container");

startButton.addEventListener("click", startGame);
diamondButton.addEventListener("click", () => {
  window.location.assign("diamond.html");
});
heartButton.addEventListener("click", () => {
  window.location.assign("heart.html");
});
spadeButton.addEventListener("click", () => {
  window.location.assign("spade.html");
});
homeButton.addEventListener("click", () => {
  window.location.assign("index.html");
});
playAgainButton.addEventListener("click", () => {
  window.location.assign("club.html");
});
scoresButton.addEventListener("click", () => {
  window.location.assign("score.html");
});

let shuffledRankings;
let rankingIndex = 0;
let rightAnswers = 0;

let handRankings = [
  {
    text: "Royal Flush",
    id: 1,
    images: [
      "assets/images/AS.png",
      "assets/images/0S.png",
      "assets/images/QS.png",
      "assets/images/JS.png",
      "assets/images/KS.png",
    ],
  },
  {
    text: "Straight Flush",
    id: 2,
    images: [
      "assets/images/5H.png",
      "assets/images/6H.png",
      "assets/images/9H.png",
      "assets/images/7H.png",
      "assets/images/8H.png",
    ],
  },
  {
    text: "Four of a kind",
    id: 3,
    images: [
      "assets/images/3S.png",
      "assets/images/3D.png",
      "assets/images/3C.png",
      "assets/images/3H.png",
      "assets/images/2H.png",
    ],
  },
  {
    text: "Full House",
    id: 4,
    images: [
      "assets/images/6C.png",
      "assets/images/6D.png",
      "assets/images/7C.png",
      "assets/images/6S.png",
      "assets/images/7S.png",
    ],
  },
  {
    text: "Flush",
    id: 6,
    images: [
      "assets/images/5D.png",
      "assets/images/8D.png",
      "assets/images/2D.png",
      "assets/images/7D.png",
      "assets/images/4D.png",
    ],
  },
  {
    text: "Straight",
    id: 7,
    images: [
      "assets/images/8S.png",
      "assets/images/9C.png",
      "assets/images/JC.png",
      "assets/images/QC.png",
      "assets/images/0H.png",
    ],
  },
  {
    text: "Three of a kind",
    id: 8,
    images: [
      "assets/images/4H.png",
      "assets/images/8C.png",
      "assets/images/4C.png",
      "assets/images/4S.png",
      "assets/images/JD.png",
    ],
  },
  {
    text: "Two pair",
    id: 9,
    images: [
      "assets/images/2S.png",
      "assets/images/5S.png",
      "assets/images/2C.png",
      "assets/images/5C.png",
      "assets/images/AH.png",
    ],
  },
  {
    text: "One pair",
    id: 10,
    images: [
      "assets/images/KC.png",
      "assets/images/AC.png",
      "assets/images/JH.png",
      "assets/images/KD.png",
      "assets/images/QH.png",
    ],
  },
  {
    text: "High Card",
    id: 11,
    images: [
      "assets/images/acediamond.png",
      "assets/images/KH.png",
      "assets/images/9S.png",
      "assets/images/0D.png",
      "assets/images/QD.png",
    ],
  },
];

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  firstOption.classList.remove("hide");
  secondOption.classList.remove("hide");
  setRankings();
}

function shuffleRankings(array) {
  // Used code from --- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function setRankings() {
  while (firstOptionCards.firstChild) {
    firstOptionCards.removeChild(firstOptionCards.firstChild);
  }
  while (secondOptionCards.firstChild) {
    secondOptionCards.removeChild(secondOptionCards.firstChild);
  }
  shuffledRankings = shuffleRankings(handRankings);
  startButton.classList.add("hide");
  firstOption.removeAttribute("data-correct", "true");
  secondOption.removeAttribute("data-correct", "true");
  firstOption.classList.remove("correct");
  secondOption.classList.remove("correct");
  firstOption.classList.remove("wrong");
  secondOption.classList.remove("wrong");
  displayRankings(
    shuffledRankings[rankingIndex],
    shuffledRankings[rankingIndex + 1]
  );
}

function displayRankings(optionOne, optionTwo) {
  for (let i = 0; i < optionOne.images.length; i++) {
    const card = optionOne.images[i];
    const image = document.createElement("img");
    image.setAttribute("src", card);
    image.classList.add("image-size");
    firstOptionCards.appendChild(image);
  }

  for (let i = 0; i < optionTwo.images.length; i++) {
    const image = document.createElement("img");
    const card = optionTwo.images[i];
    image.setAttribute("src", card);
    image.classList.add("image-size");
    secondOptionCards.appendChild(image);
  }

  if (optionOne.id <= optionTwo.id) {
    firstOption.dataset.correct = true;
  }
  if (optionTwo.id <= optionOne.id) {
    secondOption.dataset.correct = true;
  }
  document.querySelectorAll(".start").forEach((item) => {
    item.addEventListener("click", rankingInfo);
  });
}

function rankingInfo(answer) {
  const buttonSelect = answer.target;

  const correctAnswer = buttonSelect.dataset.correct;

  if ((buttonSelect.dataset = correctAnswer)) {
    buttonSelect.classList.add("correct");
    rightAnswers++;
  } else {
    buttonSelect.classList.add("wrong");
  }
  currentScore.innerHTML = rightAnswers;
  localStorage.setItem("latest-club-score", rightAnswers);

  if (shuffledRankings.length - 1 > rankingIndex + 1) {
    rankingIndex++;
    setTimeout(() => {
      setRankings();
    }, 1000);
  } else {
    openModal();
  }
}

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
  pageContainer.classList.add("not-active");
  currentScore.innerText = `${rightAnswers} out of 10`;
}

const saveScoreButton = document.getElementById("save-score");
const userName = document.getElementById("username");
userName.addEventListener('keyup', () => {
    saveScoreButton.disabled = false
})


//  https://stackoverflow.com/questions/12162786/adding-new-objects-to-localstorage

function saveScores() {
  const userScore = localStorage.getItem("latest-club-score");
  const clubScores = JSON.parse(localStorage.getItem("clubScores")) || [];
  const latestClubScores = {
    name: userName.value,
    score: userScore,
  };
  clubScores.push(latestClubScores);
  localStorage.setItem("clubScores", JSON.stringify(clubScores));

  userName.classList.add("hide");
  saveScoreButton.classList.add("hide");
}
