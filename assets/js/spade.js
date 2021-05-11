    // ---- Using API from https://deckofcardsapi.com/ -----
const cardBoard = document.getElementById('card-board')
const cardChoice = document.getElementById('card-choice')

function getCardChoices() {
    let getDeck;
    let partialDeck;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,QD,5C,8C,7S,JH,0D,9C");
    ourRequest.onload = function () {
    partialDeck = JSON.parse(ourRequest.responseText)
    console.log(partialDeck)
    getDeck = partialDeck.deck_id; // --- Returns deck ID, but not cards
    console.log(getDeck) 
    drawDeck();
    }
    ourRequest.send();

    function drawDeck() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    `https://deckofcardsapi.com/api/deck/${getDeck}/draw/?count=12`)
    ourRequest.onload = function () {
    gameDeck = JSON.parse(ourRequest.responseText) // --- Returns cards from deck ID above
    console.log(gameDeck)
    displayHands(gameDeck)
    }
    ourRequest.send();
}
}

function displayHands(data) {
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
        console.log(card)
        cardBoard.appendChild(card);
        card.addEventListener('click', selectCard)
    })
}

function selectCard(e) {
    const selectedCard = e.target
    // console.log(selectedCard.dataset.correct)
    correctAnswer = selectedCard.dataset.correct
    console.log(correctAnswer)
    cardChoice.appendChild(selectedCard)
}

getCardChoices();

