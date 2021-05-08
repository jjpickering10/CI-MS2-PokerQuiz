const firstOption = document.getElementById("first-option");
const secondOption = document.getElementById("second-option");
const startButton = document.getElementById("start");

let shuffledRankings;
let rankingIndex = 0

startButton.addEventListener("click", startGame);



function startGame (){
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


function setRankings (){

}

let handRankings = [
  {
    text: "Royal Flush",
    id: 1,
  },
  {
    text: "Straight Flush",
    id: 2,
  },
  {
    text: "4 of a kind",
    id: 3,
  },
  {
    text: "Full House",
    id: 4,
  },
  {
    text: "Flush",
    id: 5,
  },
];