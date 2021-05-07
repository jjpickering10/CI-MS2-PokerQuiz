const latestScore = localStorage.getItem("latest-score");
const finalScore = document.getElementById("score-result");
finalScore.innerHTML = latestScore;
