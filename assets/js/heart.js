const handOne = document.getElementById('hand-one')
const handTwo = document.getElementById('hand-two')
const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const score = document.getElementById('score')
const message = document.getElementById('message')
const question = document.getElementById('question')

const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')

const clubButton = document.getElementById('club')
const diamondButton = document.getElementById('diamond')
const spadeButton = document.getElementById('spade')
const homeButton = document.getElementById('home-button')
const playAgainButton = document.getElementById('play-again-button')

let scoreCounter = 0;
let questionCounter = 0;

startButton.addEventListener('click', startGame)

clubButton.addEventListener('click', () => {
    window.location.assign('club.html')
});
diamondButton.addEventListener('click', () => {
    window.location.assign('diamond.html')
});
spadeButton.addEventListener('click', () => {
    window.location.assign('spade.html')
} );
homeButton.addEventListener('click', () => {
    window.location.assign('index.html')
} );
playAgainButton.addEventListener('click', () => {
    window.location.assign('heart.html')
} );

function startGame() {
    question.classList.add('hide')
    startButton.classList.add('hide')
    nextButton.classList.add('hide')
    message.classList.add('hide')
    // ---- Using API from https://deckofcardsapi.com/ -----
    const handRequest = new XMLHttpRequest();
handRequest.open('GET', 'https://deckofcardsapi.com/api/deck/new/draw/?count=2')
handRequest.onload = function() {
    const handData = JSON.parse(handRequest.responseText)
    console.log(handData)
    displayHands(handData)
}
handRequest.send();
}

function displayHands(data) {
    cardOne = data.cards[0].value
    cardTwo = data.cards[1].value

    // handOne.innerHTML = `${cardOne} ${data.cards[0].suit}`
    // handTwo.innerHTML = `${cardTwo} ${data.cards[1].suit}`

    handOne.innerHTML = `<img class="img-one" src="${data.cards[0].image}" alt="${cardOne}, ${data.cards[0].suit} playing card">`
    handTwo.innerHTML = `<img class="img-two" src="${data.cards[1].image}" alt="${cardTwo}, ${data.cards[1].suit} playing card">`

    

    console.log(cardOne === cardTwo)

    if (cardOne === cardTwo) {
        scoreCounter++
        score.innerText = scoreCounter
        success()
    } else {
        failure()
    }
}


function success() {
    const successMessage = pairSuccess[Math.floor(Math.random() * pairSuccess.length)];
    setTimeout(() => {
        
        message.classList.remove('hide')
        message.classList.add('message-text')
        message.innerText = successMessage
        nextButton.classList.remove('hide')
        nextButton.classList.add('next-button')
    }, 6000);

        nextButton.addEventListener('click', nextShuffle)
}
    

function failure() {
    const failureMessage = pairFailure[Math.floor(Math.random() * pairFailure.length)];
    setTimeout(() => {
        
        message.classList.remove('hide')
        message.classList.add('message-text')
        message.innerText = failureMessage
        nextButton.classList.remove('hide')
        nextButton.classList.add('next-button')
    }, 6000);

        nextButton.addEventListener('click', nextShuffle)
    
}

function nextShuffle(){
    questionCounter++
    if (questionCounter < 10) {
    setTimeout(() => {
        startGame()
    }, 1000);
} else {
    openModal()
}
}

function openModal(){
     modal.classList.add('active')
     overlay.classList.add('overlay')
     score.innerText = `${scoreCounter} pair/s in 10 attempts`
 }


let pairFailure = [

    "Please give me a pair",
    "I never get a pair",
    "Never a pair",
    "Urgh, maybe next time",
    "No pair for you"

]

let pairSuccess = [

    "Woooooo!!!!",
    "OMG yes!",
    "Love a good pair",
    "So easy",
    ":)"
]