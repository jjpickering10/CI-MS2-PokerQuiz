    // ---- Using API from https://deckofcardsapi.com/ -----

function getCardChoices() {
    let getDeck;
    let partialDeck;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,QD,5C,8C,7S,JH,0D,9C");
    ourRequest.onload = function () {
    partialDeck = JSON.parse(ourRequest.responseText)
    console.log(partialDeck)
    getDeck = partialDeck.deck_id;
    console.log(getDeck) // --- Returns deck ID, but not cards
    drawDeck();
    }
    ourRequest.send();

    function drawDeck() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    `https://deckofcardsapi.com/api/deck/${getDeck}/draw/?count=12`)
    ourRequest.onload = function () {
    gameDeck = JSON.parse(ourRequest.responseText)
    console.log(gameDeck) // --- Returns cards from deck ID above
    }
    ourRequest.send();
}
}

getCardChoices();