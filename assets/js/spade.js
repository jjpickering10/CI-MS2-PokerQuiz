    // ---- Using API from https://deckofcardsapi.com/ -----
const cardBoard = document.getElementById('card-board')
const cardChoice = document.getElementById('card-choice')
const results = document.getElementById('results')
const startButton = document.getElementById('start')
const gameStart = document.getElementById('game-start')

let correctChoices = 0
const attempts = 2
let attemptCounter = 0
let newObject = {}
let anotherObject = {}
let finalArray = []
let shuffledQuestions;


startButton.addEventListener('click', startGame)

function startGame(){ //----https://stackoverflow.com/questions/4908378/javascript-array-of-functions#4908388
    // functions[0]()
    shuffledQuestions = shuffleQuestions(questions)
    console.log(shuffledQuestions)
}

function shuffleQuestions(array) { // Used code from --- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = array.length, temporaryValue, randomIndex;

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




//----------------------------------------------


function displayHands(data) {
    startButton.classList.add('hide')
    data.forEach(e => {
        const card = document.createElement('img')
        card.setAttribute('src', e.image)
        card.setAttribute('data-correct', e.correct)
        cardBoard.appendChild(card);
        card.addEventListener('click', selectCard)
    })
}

function selectCard(e) {
    attemptCounter++
    const selectedCard = e.target
    correctAnswer = selectedCard.dataset.correct
    if (correctAnswer === "true") {
        correctChoices++
    }
    cardChoice.appendChild(selectedCard)
    if (attempts < attemptCounter + 1) {
        cardBoard.classList.add('hide')
        reviewAnswers()
    }
}

function reviewAnswers() {
    
    if (correctChoices === 2) {
        results.innerText = "You got it right!"
    } else {
        results.innerText = "You got it wrong!"
    }
}

let questions = [
    function() { {
    var getBoard;
    var partialBoard;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=4S,6H,7H");
    ourRequest.onload = function () {
    partialBoard = JSON.parse(ourRequest.responseText)
    getBoard = partialBoard.deck_id; // --- Returns deck ID, but not cards
    drawBoard();
    }
    ourRequest.send();

    function drawBoard() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    `https://deckofcardsapi.com/api/deck/${getBoard}/draw/?count=3`)
    ourRequest.onload = function () {
    gameBoard = JSON.parse(ourRequest.responseText) // --- Returns cards from deck ID above
    gameBoard.cards.forEach(e => {
        const board = document.createElement('img')
        board.setAttribute('src', e.image)
        cardChoice.appendChild(board);
        })
     
    getOptions()
    }
    ourRequest.send();
}
    function getOptions() {
        
    var getDeck;
    var partialDeck;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,QD,5C,8C,7S,JH,0D,9C");
    ourRequest.onload = function () {
    partialDeck = JSON.parse(ourRequest.responseText)
    getDeck = partialDeck.deck_id; // --- Returns deck ID, but not cards
    drawDeck();
    }
    ourRequest.send();

    function drawDeck() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    `https://deckofcardsapi.com/api/deck/${getDeck}/draw/?count=12`)
    ourRequest.onload = function () {
    gameDeck = JSON.parse(ourRequest.responseText) // --- Returns cards from deck ID above
    newObject = {...gameDeck.cards}

    for (index in newObject) {
        if (newObject[index].value === "5") {
            anotherObject = {...newObject[index], ...{correct: "true"}}
            finalArray.push(anotherObject)
            
        } else if (newObject[index].value === "8") {
            anotherObject = {...newObject[index], ...{correct: "true"}}
            finalArray.push(anotherObject)
        } else {
            anotherObject = {...newObject[index], ...{correct: "false"}}
            finalArray.push(anotherObject)
        }
    }
    displayHands(finalArray)
    }
    ourRequest.send();
}
 }
}},
function() {
    console.log('print')
},
function(){
    console.log('test')
},
function(){
    console.log('game')
},
function(){
    console.log('hello')
},
function(){
    console.log('boom')
},
]