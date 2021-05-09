const handOne = document.getElementById('hand-one')
const cardOne = document.getElementById('hand-two')
const startButton = document.getElementById('start')

// ---- Using API from https://deckofcardsapi.com/ -----

const handRequest = new XMLHttpRequest();
handRequest.open('GET', 'https://deckofcardsapi.com/api/deck/new/draw/?count=2')
handRequest.onload = function() {
    const handData = JSON.parse(handRequest.responseText)
    console.log(handData)
}
handRequest.send();