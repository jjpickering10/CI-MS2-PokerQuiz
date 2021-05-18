const latestDiamondScore = localStorage.getItem("diamondScores");
const latestClubScore = localStorage.getItem("clubScores");
const latestHeartScore = localStorage.getItem("heartScores");
const latestSpadeScore = localStorage.getItem("spadeScores");

const finalDiamondScore = document.getElementById("diamond-scores");
const finalClubScore = document.getElementById("club-scores");
const finalHeartScore = document.getElementById("heart-scores");
const finalSpadeScore = document.getElementById("spade-scores");

const diamondScores = JSON.parse(latestDiamondScore);
const clubScores = JSON.parse(latestClubScore);
const heartScores = JSON.parse(latestHeartScore);
const spadeScores = JSON.parse(latestSpadeScore);

diamondScores.forEach((e) => {
  const score = document.createElement("p");
  score.innerText = `${e.name}: ${e.score} out of 5`;
  finalDiamondScore.appendChild(score);
});
clubScores.forEach((e) => {
  const score = document.createElement("p");
  score.innerText = `${e.name}: ${e.score} out of 10`;
  finalClubScore.appendChild(score);
});
heartScores.forEach((e) => {
  const score = document.createElement("p");
  score.innerText = `${e.name}: ${e.score} pair/s out of 10`;
  finalHeartScore.appendChild(score);
});
spadeScores.forEach((e) => {
  const score = document.createElement("p");
  score.innerText = `${e.name}: ${e.score} out of 5`;
  finalSpadeScore.appendChild(score);
});