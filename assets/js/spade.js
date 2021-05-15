    // ---- Using API from https://deckofcardsapi.com/ -----
const cardBoard = document.getElementById('card-board')
const cardChoice = document.getElementById('card-choice')
const results = document.getElementById('results')
const startButton = document.getElementById('start')
const gameStart = document.getElementById('game-start')
const img = document.getElementsByTagName('img')
const question = document.getElementById('question')
const score = document.getElementById('score')

const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')

const clubButton = document.getElementById('club')
const heartButton = document.getElementById('heart')
const diamondButton = document.getElementById('diamond')
const homeButton = document.getElementById('home-button')
const playAgainButton = document.getElementById('play-again-button')

clubButton.addEventListener('click', () => {
    window.location.assign('club.html')
});
heartButton.addEventListener('click', () => {
    window.location.assign('heart.html')
});
diamondButton.addEventListener('click', () => {
    window.location.assign('diamond.html')
} );
homeButton.addEventListener('click', () => {
    window.location.assign('index.html')
} );
playAgainButton.addEventListener('click', () => {
    window.location.assign('spade.html')
} );

const attempts = 2
let rightAnswers = 0
let correctChoices = 0
let attemptCounter = 0
let newObject = {}
let anotherObject = {}
let finalArray = []
let shuffledQuestions;
let questionIndex = 0


startButton.addEventListener('click', startGame)

function startGame(){ //----https://stackoverflow.com/questions/4908378/javascript-array-of-functions#4908388
    startButton.classList.add('hide')
    shuffledQuestions = shuffleQuestions(questions)
    console.log(shuffledQuestions)
    
    setQuestion()
}

function setQuestion(){
    resetDocument()
    
    
    shuffledQuestions[questionIndex]()
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

function resetDocument() {
    correctChoices = 0
    attemptCounter = 0
    newObject = {}
    anotherObject = {}
    finalArray = []
    question.innerText = ""

    while (cardBoard.firstChild) {
         cardBoard.removeChild(cardBoard.firstChild)
     }
      while (cardChoice.firstChild) {
         cardChoice.removeChild(cardChoice.firstChild)
     }
    //  while (gameStart.firstChild) {
    //      gameStart.removeChild(gameStart.firstChild)
    //  }
     
    cardBoard.classList.remove('hide')
    cardChoice.classList.remove('hide')
    gameStart.classList.remove('hide')
    

}




//----------------------------------------------


function displayHands(data) {
    startButton.classList.add('hide')
    data.forEach(e => {
        const card = document.createElement('img')
        card.setAttribute('src', e.image)
        card.setAttribute('data-correct', e.correct)
        // card.classList.add('card-options')
        cardBoard.appendChild(card);
        card.addEventListener('click', selectCard)
    })
}

function selectCard(e) {
    attemptCounter++
    const selectedCard = e.target
    // selectedCard.classList.remove('card-options')
    // selectedCard.removeEventListener('click', selectCard)
    correctAnswer = selectedCard.dataset.correct
    if (correctAnswer === "true") {
        correctChoices++
    }
    cardChoice.appendChild(selectedCard)
    // selectedCard.classList.remove('card-answer')
    if (attempts < attemptCounter + 1) {
        cardBoard.classList.add('hide')
        gameStart.classList.add('hide')
        reviewAnswers()
    }
}

function reviewAnswers() {
    
    if (correctChoices === 2) {
        rightAnswers++
        results.innerText = "You got it right!"
    } else {
        results.innerText = "You got it wrong!"
    }
    if (shuffledQuestions.length > questionIndex + 1 ) {
         questionIndex++
         setTimeout(() => {
             setQuestion();
         }, 5000);
     } else {
         openModal()
     }
}

function openModal(){
     modal.classList.add('active')
     overlay.classList.add('overlay')
     score.innerText = `${rightAnswers} out of 5`
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
        if (newObject[index].code === "5C") {
            anotherObject = {...newObject[index], ...{correct: "true"}}
            finalArray.push(anotherObject)
            
        } else if (newObject[index].code === "8C") {
            anotherObject = {...newObject[index], ...{correct: "true"}}
            finalArray.push(anotherObject)
        } else {
            anotherObject = {...newObject[index], ...{correct: "false"}}
            finalArray.push(anotherObject)
        }
    }
    setTimeout(() => {
        question.innerText = "Make a straight"
    }, 500);

    displayHands(finalArray)
    }
    ourRequest.send();
}
 }
}},
    function() { {
    var getBoard;
    var partialBoard;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=3H,2H,8H");
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
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=7H,KH,7C,AC,9S,4D,9D,QS,JS,7D,2C,JC");
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
        if (newObject[index].code === "7H") {
            anotherObject = {...newObject[index], ...{correct: "true"}}
            finalArray.push(anotherObject)
            
        } else if (newObject[index].code === "KH") {
            anotherObject = {...newObject[index], ...{correct: "true"}}
            finalArray.push(anotherObject)
        } else {
            anotherObject = {...newObject[index], ...{correct: "false"}}
            finalArray.push(anotherObject)
        }
    }
    setTimeout(() => {
        question.innerText = "Make a flush"
    }, 500);
    displayHands(finalArray)
    }
    ourRequest.send();
}
 }
}},
    function() { {
    var getBoard;
    var partialBoard;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=JH,JC,QC");
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
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AD,AS,4S,5H,5D,3D,9D,8C,7C,7D,JS,QS");
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
        if (newObject[index].code === "JS") {
            anotherObject = {...newObject[index], ...{correct: "true"}}
            finalArray.push(anotherObject)
            
        } else if (newObject[index].code === "QS") {
            anotherObject = {...newObject[index], ...{correct: "true"}}
            finalArray.push(anotherObject)
        } else {
            anotherObject = {...newObject[index], ...{correct: "false"}}
            finalArray.push(anotherObject)
        }
    }
    setTimeout(() => {
        question.innerText = "Make a full house"
    }, 500);
    displayHands(finalArray)
    }
    ourRequest.send();
}
 }
}},
    function() { {
    var getBoard;
    var partialBoard;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=4S,6S,8S");
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
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=5S,7S,9D,JC,2S,9C,KD,KS,AS,QS,JS,3D");
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
        if (newObject[index].code === "5S") {
            anotherObject = {...newObject[index], ...{correct: "true"}}
            finalArray.push(anotherObject)
            
        } else if (newObject[index].code === "7S") {
            anotherObject = {...newObject[index], ...{correct: "true"}}
            finalArray.push(anotherObject)
        } else {
            anotherObject = {...newObject[index], ...{correct: "false"}}
            finalArray.push(anotherObject)
        }
    }
    setTimeout(() => {
        question.innerText = "Make a straight flush"
    }, 500);
    displayHands(finalArray)
    }
    ourRequest.send();
}
 }
}},
    function() { {
    var getBoard;
    var partialBoard;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AH,JH,0H");
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
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=KH,QH,9H,8H,KS,QS,QD,QC,KC,KD,AD,AS");
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
        if (newObject[index].code === "KH") {
            anotherObject = {...newObject[index], ...{correct: "true"}}
            finalArray.push(anotherObject)
            
        } else if (newObject[index].code === "QH") {
            anotherObject = {...newObject[index], ...{correct: "true"}}
            finalArray.push(anotherObject)
        } else {
            anotherObject = {...newObject[index], ...{correct: "false"}}
            finalArray.push(anotherObject)
        }
    }
    setTimeout(() => {
        question.innerText = "Make a royal flush"
    }, 500);
    displayHands(finalArray)
    }
    ourRequest.send();
}
 }
}},

]