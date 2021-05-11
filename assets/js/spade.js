    // ---- Using API from https://deckofcardsapi.com/ -----

function getCardChoices() {
    let getDeck;
    let partialDeck;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",
    "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,QD,5C,8S,7S,JH,TD,9C");
    ourRequest.onload = function () {
    partialDeck = JSON.parse(ourRequest.responseText)
    console.log(partialDeck)
    }
    ourRequest.send();
};

getCardChoices();