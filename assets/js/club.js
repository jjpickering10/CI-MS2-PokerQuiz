let firstOption = document.getElementById("first-option");
let secondOption = document.getElementById("second-option");
let firstOptionCards = document.getElementById("first-option-cards");
let secondOptionCards = document.getElementById("second-option-cards");
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
    images: ["assets/images/AS.png","assets/images/0S.png","assets/images/QS.png","assets/images/JS.png","assets/images/KS.png"
    ]
  },
  {
    text: "Straight Flush",
    id: 2,
    images: ["assets/images/5H.png","assets/images/6H.png","assets/images/9H.png","assets/images/7H.png","assets/images/8H.png"
    ]
  },
  {
    text: "Four of a kind",
    id: 3,
    images: ["assets/images/3S.png","assets/images/3D.png","assets/images/3C.png","assets/images/3H.png","assets/images/2H.png"
    ]
  },
  {
    text: "Full House",
    id: 4,
    images: ["assets/images/6C.png","assets/images/6D.png","assets/images/7C.png","assets/images/6S.png","assets/images/7S.png"
    ]
  },
  {
    text: "Flush",
    id: 6,
    images: ["assets/images/5D.png","assets/images/8D.png","assets/images/2D.png","assets/images/7D.png","assets/images/4D.png"
    ]
  },
  {
    text: "Straight",
    id: 7,
    images: ["assets/images/8S.png","assets/images/9C.png","assets/images/JC.png","assets/images/QC.png","assets/images/0H.png"
    ]
  },
  {
    text: "Three of a kind",
    id: 8,
    images: ["assets/images/4H.png","assets/images/8C.png","assets/images/4C.png","assets/images/4S.png","assets/images/JD.png"
    ]
  },
  {
    text: "Two pair",
    id: 9,
    images: ["assets/images/2S.png","assets/images/5S.png","assets/images/2C.png","assets/images/5C.png","assets/images/AH.png"
    ]
  },
  {
    text: "One pair",
    id: 10,
    images: ["assets/images/KC.png","assets/images/AC.png","assets/images/JH.png","assets/images/KD.png","assets/images/QH.png"
    ]
  },
  {
    text: "High Card",
    id: 11,
    images: ["assets/images/AD.png","assets/images/KH.png","assets/images/9S.png","assets/images/0D.png","assets/images/QD.png"
    ]
  },
];

// console.log(firstOption)
startButton.addEventListener("click", startGame);



function startGame (){
    // firstOption.removeAttribute('data-correct', "true")
    // secondOption.removeAttribute('data-correct', "true")
    // firstOption.classList.remove('correct')
    // secondOption.classList.remove('correct')
    // firstOption.classList.remove('wrong')
    // secondOption.classList.remove('wrong')
    startButton.classList.add('hide')
    firstOption.classList.remove('hide')
    secondOption.classList.remove('hide')
    //shuffledRankings = shuffleRankings(handRankings)
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
    while (firstOptionCards.firstChild) {
         firstOptionCards.removeChild(firstOptionCards.firstChild)
     }
      while (secondOptionCards.firstChild) {
         secondOptionCards.removeChild(secondOptionCards.firstChild)
     }
    shuffledRankings = shuffleRankings(handRankings)
    console.log(shuffledRankings)
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

    for (let i = 0; i < optionOne.images.length; i++) {
        const card = optionOne.images[i];
        const image = document.createElement('img')
        console.log(card)
        image.setAttribute('src', card)
        image.classList.add('image-size')
        firstOptionCards.appendChild(image);
    }

    for (let i = 0; i < optionTwo.images.length; i++) {
        const image = document.createElement('img')
        const card = optionTwo.images[i];
        console.log(card)
        image.setAttribute('src', card)
        image.classList.add('image-size')
        secondOptionCards.appendChild(image);
    }

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

    if (shuffledRankings.length -1  > rankingIndex + 1) {
    //questionCounter++
    rankingIndex++;
    setTimeout(() => {
      setRankings();
    }, 1000);
  } else {
      return window.location.assign('index.html')
  }
}