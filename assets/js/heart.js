const handOne = document.getElementById('hand-one')
const handTwo = document.getElementById('hand-two')
const startButton = document.getElementById('start')

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
    handOne.innerText = data.cards[0].code //`${data.cards[0].value} ${data.cards[0].suit}`
    handTwo.innerText = data.cards[1].code //`${data.cards[1].value} ${data.cards[1].suit}`
}