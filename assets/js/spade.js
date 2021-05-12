    // ---- Using API from https://deckofcardsapi.com/ -----
const cardBoard = document.getElementById('card-board')
const cardChoice = document.getElementById('card-choice')
const results = document.getElementById('results')
const startButton = document.getElementById('start')
const gameStart = document.getElementById('game-start')

let correctChoices = 0
const attempts = 2
let attemptCounter = 0

startButton.addEventListener('click', getCardChoices)


function getCardChoices() {
    var getBoard;
    var partialBoard;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=4S,6H,7H");
    ourRequest.onload = function () {
    partialBoard = JSON.parse(ourRequest.responseText)
    // console.log(partialDeck)
    getBoard = partialBoard.deck_id; // --- Returns deck ID, but not cards
    // console.log(getDeck) 
    drawBoard();
    }
    ourRequest.send();

    function drawBoard() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    `https://deckofcardsapi.com/api/deck/${getBoard}/draw/?count=3`)
    ourRequest.onload = function () {
    gameBoard = JSON.parse(ourRequest.responseText) // --- Returns cards from deck ID above
    console.log(gameBoard)
    gameBoard.cards.forEach(e => {
        const board = document.createElement('img')
        board.setAttribute('src', e.image)
        cardChoice.appendChild(board);
        })
        
        // console.log(card)
        
    getOptions()
    }
    ourRequest.send();
}
    //------------------
    function getOptions() {
        
    var getDeck;
    var partialDeck;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,QD,5C,8C,7S,JH,0D,9C");
    ourRequest.onload = function () {
    partialDeck = JSON.parse(ourRequest.responseText)
    // console.log(partialDeck)
    getDeck = partialDeck.deck_id; // --- Returns deck ID, but not cards
    // console.log(getDeck) 
    drawDeck();
    }
    ourRequest.send();

    function drawDeck() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    `https://deckofcardsapi.com/api/deck/${getDeck}/draw/?count=12`)
    ourRequest.onload = function () {
    gameDeck = JSON.parse(ourRequest.responseText) // --- Returns cards from deck ID above
    // console.log(gameDeck)
    displayHands(gameDeck)
    }
    ourRequest.send();

    //--------------------------

    

    //--------------------------
    
}
 }
}


function displayHands(data) {
    startButton.classList.add('hide')
    data.cards.forEach(e => {
        const card = document.createElement('img')
        if (e.value === "5") {
            card.setAttribute('data-correct', "correct")
        } else if (e.value === "8"){
            card.setAttribute('data-correct', "correct")
        } else {
            card.setAttribute('data-correct', "incorrect")
        }
        card.setAttribute('src', e.image)
        // console.log(card)
        cardBoard.appendChild(card);
        card.addEventListener('click', selectCard)
    })
}

function selectCard(e) {
    attemptCounter++
    const selectedCard = e.target
    // console.log(selectedCard.dataset)
    correctAnswer = selectedCard.dataset.correct
    // console.log(correctAnswer)
    if (correctAnswer === "correct") {
        correctChoices++
    }
    cardChoice.appendChild(selectedCard)
    // console.log(attemptCounter, 'attempts')
    
    // console.log(correctChoices, 'correctchoices')

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

//------------------------------------------------------------------------
