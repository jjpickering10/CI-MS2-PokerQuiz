const startButton = document.getElementById("diamond-play-btn");
const currentQuestion = document.getElementById("question-option");
const answerDiv = document.getElementById("diamond-answer-buttons");
const modal = document.getElementById("modal");
const overlay = document.getElementById("modal-overlay");
const score = document.getElementById("score");
// const clubButton = document.getElementById("club");
// const heartButton = document.getElementById("heart");
// const spadeButton = document.getElementById("spade");
const homeButton = document.getElementById("home-button");
const playAgainButton = document.getElementById("play-again-button");
const scoresButton = document.getElementById("scores-button");

const pageContainer = document.getElementById("whole-page");

let shuffledQuestions;
let questionIndex = 0;
let rightAnswers = 0;
let questionCounter = 0;

startButton.addEventListener("click", startGame);
// clubButton.addEventListener("click", () => {
//   window.location.assign("club.html");
// });
// heartButton.addEventListener("click", () => {
//   window.location.assign("heart.html");
// });
// spadeButton.addEventListener("click", () => {
//   window.location.assign("spade.html");
// });
homeButton.addEventListener("click", () => {
  window.location.assign("index.html");
});
playAgainButton.addEventListener("click", () => {
  window.location.assign("diamond.html");
});
scoresButton.addEventListener("click", () => {
  window.location.assign("score.html");
});

function startGame() {
  shuffledQuestions = shuffleQuestions(questions);
  setQuestion();
}

function setQuestion() {
  startButton.classList.add("hide");
  while (answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.firstChild);
  }
  displayQuestion(shuffledQuestions[questionIndex]);
}

function shuffleQuestions(array) {
  // Used code from --- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

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

function displayQuestion(question) {
  currentQuestion.classList.add("current-question");
  currentQuestion.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    answerDiv.classList.add("flex-container");
    button.classList.add("diamond-buttons");
    if (answer.correctAnswer) {
      button.dataset.correctAnswer = answer.correctAnswer;
    }
    button.addEventListener("click", answerInfo);
    answerDiv.appendChild(button);
  });
}

function answerInfo(answer) {
    questionCounter++;
  const buttonSelect = answer.target;
  const correct = buttonSelect.dataset.correctAnswer;
  if ((buttonSelect.dataset = correct)) {
    rightAnswers++;
  }
  localStorage.setItem("latest-diamond-score", rightAnswers);
  document.getElementById("diamond-right-answers").innerText = `${rightAnswers} out of ${questionCounter}`;
  if (shuffledQuestions.length > questionIndex + 16) {
    questionIndex++;
    setTimeout(() => {
      setQuestion();
    }, 1000);
  } else {
    openModal();
  }
}

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
  pageContainer.classList.add("not-active");
  score.innerText = `${rightAnswers} out of 5`;
}

const saveScoreButton = document.getElementById("save-score");
const userName = document.getElementById("username");
userName.addEventListener('keyup', () => {
    saveScoreButton.disabled = !userName.value;
});


//  https://stackoverflow.com/questions/12162786/adding-new-objects-to-localstorage

function saveScores() {
  const userScore = localStorage.getItem("latest-diamond-score");
  const diamondScores = JSON.parse(localStorage.getItem("diamondScores")) || [];
  const latestDiamondScores = {
    name: userName.value,
    score: userScore,
  };
  diamondScores.push(latestDiamondScores);
  localStorage.setItem("diamondScores", JSON.stringify(diamondScores));

  userName.classList.add("hide");
  saveScoreButton.classList.add("hide");
}

const questions = [
  {
    question: "2000?",
    answers: [
      { text: "Chris Ferguson", correctAnswer: true },
      { text: "T.J. Cloutier", correctAnswer: false },
      { text: "Steve Kaufman", correctAnswer: false },
      { text: "Hasan Habib", correctAnswer: false },
    ],
  },
  {
    question: "2001?",
    answers: [
      { text: "Carlos Mortensen", correctAnswer: true },
      { text: "Dewey Tomko", correctAnswer: false },
      { text: "Phil Gordon", correctAnswer: false },
      { text: "Phil Hellmuth", correctAnswer: false },
    ],
  },
  {
    question: "2002?",
    answers: [
      { text: "Robert Varkonyi", correctAnswer: true },
      { text: "Julian Gardner", correctAnswer: false },
      { text: "Ralph Perry", correctAnswer: false },
      { text: "Scott Gray", correctAnswer: false },
    ],
  },
  {
    question: "2003?",
    answers: [
      { text: "Sammy Farha", correctAnswer: false },
      { text: "Chris Moneymaker", correctAnswer: true },
      { text: "Phil Ivey", correctAnswer: false },
      { text: "Dan Harrington", correctAnswer: false },
    ],
  },
  {
    question: "2004?",
    answers: [
      { text: "David Williams", correctAnswer: false },
      { text: "Josh Arieh", correctAnswer: false },
      { text: "Greg Raymer", correctAnswer: true },
      { text: "Dan Harrington", correctAnswer: false },
    ],
  },
  {
    question: "2005?",
    answers: [
      { text: "Steve Dannenmann", correctAnswer: false },
      { text: "Andy Black", correctAnswer: false },
      { text: "Mike Matusow", correctAnswer: false },
      { text: "Joe Hachem", correctAnswer: true },
    ],
  },
  {
    question: "2006?",
    answers: [
      { text: "Jamie Gold", correctAnswer: true },
      { text: "Allen Cunningham", correctAnswer: false },
      { text: "Paul Wasicka", correctAnswer: false },
      { text: "Doug Kim", correctAnswer: false },
    ],
  },
  {
    question: "2007?",
    answers: [
      { text: "Tuan Lam", correctAnswer: false },
      { text: "Raymond Rahme", correctAnswer: false },
      { text: "Jerry Yang", correctAnswer: true },
      { text: "Hevad Khan", correctAnswer: false },
    ],
  },
  {
    question: "2008?",
    answers: [
      { text: "Ivan Demidov", correctAnswer: false },
      { text: "Dennis Phillips", correctAnswer: false },
      { text: "Kelly Kim", correctAnswer: false },
      { text: "Peter Eastgate", correctAnswer: true },
    ],
  },
  {
    question: "2009?",
    answers: [
      { text: "Darvin Moon", correctAnswer: false },
      { text: "Joe Cada", correctAnswer: true },
      { text: "Jeff Shulman", correctAnswer: false },
      { text: "Phil Ivey", correctAnswer: false },
    ],
  },
  {
    question: "2010?",
    answers: [
      { text: "Jonathan Duhamel", correctAnswer: true },
      { text: "John Racener", correctAnswer: false },
      { text: "Joseph Cheong", correctAnswer: false },
      { text: "Michael Mizrachi", correctAnswer: false },
    ],
  },
  {
    question: "2011?",
    answers: [
      { text: "Martin Staszko", correctAnswer: false },
      { text: "Pius Heinz", correctAnswer: true },
      { text: "Ben Lamb", correctAnswer: false },
      { text: "Sam Holden", correctAnswer: false },
    ],
  },
  {
    question: "2012?",
    answers: [
      { text: "Jesse Sylvia", correctAnswer: false },
      { text: "Jacob Balsiger", correctAnswer: false },
      { text: "Steven Gee", correctAnswer: false },
      { text: "Greg Merson", correctAnswer: true },
    ],
  },
  {
    question: "2013?",
    answers: [
      { text: "Jay Farber", correctAnswer: false },
      { text: "Mark Newhouse", correctAnswer: false },
      { text: "Ryan Riess", correctAnswer: true },
      { text: "JC Tran", correctAnswer: false },
    ],
  },
  {
    question: "2014?",
    answers: [
      { text: "Martin Jacobson", correctAnswer: true },
      { text: "Felix Stephensen", correctAnswer: false },
      { text: "William Tonking", correctAnswer: false },
      { text: "Andoni Larrabe", correctAnswer: false },
    ],
  },
  {
    question: "2015?",
    answers: [
      { text: "Joshua Beckley", correctAnswer: false },
      { text: "Max Steinberg", correctAnswer: false },
      { text: "Thomas Cannuli", correctAnswer: false },
      { text: "Joe McKeehen", correctAnswer: true },
    ],
  },
  {
    question: "2016?",
    answers: [
      { text: "Qui Nguyen", correctAnswer: true },
      { text: "Gordon Vayo", correctAnswer: false },
      { text: "Cliff Josephy", correctAnswer: false },
      { text: "Jerry Wong", correctAnswer: false },
    ],
  },
  {
    question: "2017?",
    answers: [
      { text: "Dan Ott", correctAnswer: false },
      { text: "Scott Blumstein", correctAnswer: true },
      { text: "Jack Sinclair", correctAnswer: false },
      { text: "Ben Lamb", correctAnswer: false },
    ],
  },
  {
    question: "2018?",
    answers: [
      { text: "John Cynn", correctAnswer: true },
      { text: "Tony Miles", correctAnswer: false },
      { text: "Joe Cada", correctAnswer: false },
      { text: "Michael Dyer", correctAnswer: false },
    ],
  },
  {
    question: "2019?",
    answers: [
      { text: "Garry Gates", correctAnswer: false },
      { text: "Alex Livingston", correctAnswer: false },
      { text: "Hossein Ensan", correctAnswer: true },
      { text: "Dario Sammartino", correctAnswer: false },
    ],
  },
];
