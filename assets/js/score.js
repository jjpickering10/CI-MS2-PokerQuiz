const latestDiamondScore = localStorage.getItem("latest-diamond-score");
const latestClubScore = localStorage.getItem("latest-club-score");
const latestHeartScore = localStorage.getItem("latest-heart-score");
const latestSpadeScore = localStorage.getItem("latest-spade-score");

const finalDiamondScore = document.getElementById("latest-diamond-score");
const finalClubScore = document.getElementById("latest-club-score");
const finalHeartScore = document.getElementById("latest-heart-score");
const finalSpadeScore = document.getElementById("latest-spade-score");




finalDiamondScore.innerHTML = `<p>${latestDiamondScore} out of 5</p>`
finalClubScore.innerHTML = `<p>${latestClubScore} out of 10</p>`
finalHeartScore.innerHTML = `<p>${latestHeartScore} pair/s in 10 attempts</p>`
finalSpadeScore.innerHTML = `<p>${latestSpadeScore} out of 5</p>`
