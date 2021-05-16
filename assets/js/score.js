const latestDiamondScore = localStorage.getItem("latest-diamond-score");
const latestClubScore = localStorage.getItem("latest-club-score");
const latestHeartScore = localStorage.getItem("latest-heart-score");
const latestSpadeScore = localStorage.getItem("latest-spade-score");

const finalDiamondScore = document.getElementById("latest-diamond-score");
const finalClubScore = document.getElementById("latest-club-score");
const finalHeartScore = document.getElementById("latest-heart-score");
const finalSpadeScore = document.getElementById("latest-spade-score");




finalDiamondScore.innerText = latestDiamondScore;
finalClubScore.innerText = latestClubScore;
finalHeartScore.innerText = latestHeartScore;
finalSpadeScore.innerText = latestSpadeScore;
