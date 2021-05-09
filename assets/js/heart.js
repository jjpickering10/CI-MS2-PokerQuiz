const handOne = document.getElementById('hand-one')
const handTwo = document.getElementById('hand-two')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
const message = document.getElementById('message')

let scoreCounter = 0;

// ---- Using API from https://deckofcardsapi.com/ -----
startButton.addEventListener('click', function(){
    const handRequest = new XMLHttpRequest();
handRequest.open('GET', 'https://deckofcardsapi.com/api/deck/new/draw/?count=2')
handRequest.onload = function() {
    const handData = JSON.parse(handRequest.responseText)
    console.log(handData)
    displayHands(handData)
}
handRequest.send();
})

function displayHands(data) {
    cardOne = data.cards[0].value
    cardTwo = data.cards[1].value

    handOne.innerText = `${cardOne} ${data.cards[0].suit}`
    handTwo.innerText = `${cardTwo} ${data.cards[1].suit}`

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
    message.innerText = successMessage
}

function failure() {
    const failureMessage = pairFailure[Math.floor(Math.random() * pairFailure.length)];
    message.innerText = failureMessage
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