let firstOption = document.getElementById("first-option");
let secondOption = document.getElementById("second-option");
const startButton = document.getElementById("start");
const currentScore = document.getElementById('score')
//const answerButton = document.getElementsByName('.answer-text')

let shuffledRankings;
let rankingIndex = 0
let rightAnswers = 0

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

// console.log(firstOption)
startButton.addEventListener("click", startGame);



function startGame (){
    firstOption.removeAttribute('data-correct', "true")
    secondOption.removeAttribute('data-correct', "true")
    firstOption.classList.remove('correct')
    secondOption.classList.remove('correct')
    firstOption.classList.remove('wrong')
    secondOption.classList.remove('wrong')
    startButton.classList.add('hide')
    shuffledRankings = shuffleRankings(handRankings)
    setRankings();
}

// function setRankings() {
//     displayRankings(shuffledRankings[rankingIndex], shuffledRankings[rankingIndex + 1])
// }

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
    startButton.classList.add('hide')
    firstOption.removeAttribute('data-correct', "true")
    secondOption.removeAttribute('data-correct', "true")
    firstOption.classList.remove('correct')
    secondOption.classList.remove('correct')
    firstOption.classList.remove('wrong')
    secondOption.classList.remove('wrong')
    displayRankings(shuffledRankings[rankingIndex], shuffledRankings[rankingIndex+1])
}

    


    
function displayRankings(optionOne, optionTwo) {
    // if (optionOne.id === optionTwo.id) {
    // return window.location.assign('index.html')
    // }
    firstOption.innerText = optionOne.text
    secondOption.innerText = optionTwo.text
    
    if (optionOne.id <= optionTwo.id) {
        firstOption.dataset.correct = true;
    }
    if (optionTwo.id <= optionOne.id) {
        secondOption.dataset.correct = true; 
    }
    // if (optionOne.text === optionTwo.text){
    //     getRankings();
    // }
document.querySelectorAll('.answer-text').forEach(item => {
    item.addEventListener('click', rankingInfo)
})
}
 
    


function rankingInfo(answer){

    const buttonSelect = answer.target
    
    const correctAnswer= buttonSelect.dataset.correct
 

    if ((buttonSelect.dataset = correctAnswer)) {
        buttonSelect.classList.add('correct')
        rightAnswers++
    } else {
        buttonSelect.classList.add('wrong')
    }
currentScore.innerHTML = rightAnswers;

    if (shuffledRankings.length > rankingIndex + 1) {
    rankingIndex++;
    setTimeout(() => {
      setRankings();
    }, 1000);
  } else {
      return window.location.assign('index.html')
  }
}