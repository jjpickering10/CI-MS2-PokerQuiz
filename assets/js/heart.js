const handOne = document.getElementById('hand-one')
const handTwo = document.getElementById('hand-two')
const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const score = document.getElementById('score')
const message = document.getElementById('message')
const question = document.getElementById('question')

let scoreCounter = 0;
let questionCounter = 0;

startButton.addEventListener('click', startGame)

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
    nextButton.addEventListener('click', nextShuffle)
}


function success() {
    const successMessage = pairSuccess[Math.floor(Math.random() * pairSuccess.length)];
    setTimeout(() => {
        
        message.classList.remove('hide')
        message.classList.add('message-text')
        message.innerText = successMessage
        nextButton.classList.remove('hide')
    }, 6000);
}
    

function failure() {
    const failureMessage = pairFailure[Math.floor(Math.random() * pairFailure.length)];
    setTimeout(() => {
        
        message.classList.remove('hide')
        message.classList.add('message-text')
        message.innerText = failureMessage
        nextButton.classList.remove('hide')
    }, 6000);
    
}

function nextShuffle(){
    questionCounter++
    if (questionCounter < 10) {
    setTimeout(() => {
        startGame()
    }, 1000);
} else {
    window.location.assign('index.html')
}
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