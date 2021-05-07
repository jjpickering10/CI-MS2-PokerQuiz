const startButton = document.getElementById("diamond-play-btn");
const currentQuestion = document.getElementById('diamond-question');
const answerDiv = document.getElementById('diamond-answer-buttons')

let shuffledQuestions;
let questionIndex = 0;
let rightAnswers = 0;

startButton.addEventListener('click', startGame);

function startGame() {
    shuffledQuestions = shuffleQuestions(questions);
    setQuestion();
}

function setQuestion() {
    startButton.classList.add('hide')
     while (answerDiv.firstChild) {
         answerDiv.removeChild(answerDiv.firstChild)
     }
    displayQuestion(shuffledQuestions[questionIndex]);
}

function shuffleQuestions(array) { // Used code from --- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = array.length, temporaryValue, randomIndex;

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
    currentQuestion.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'diamond-btn')
        if (answer.correctAnswer) {
            button.dataset.correctAnswer = answer.correctAnswer;
        }
        button.addEventListener('click', answerInfo)
        answerDiv.appendChild(button)

    })
}

 function answerInfo(answer) {
     const buttonSelect = answer.target
     const correct = buttonSelect.dataset.correctAnswer;
     if (buttonSelect.dataset = correct) {
         rightAnswers++;
     }
     document.getElementById('diamond-right-answers').innerHTML = rightAnswers;
     if (shuffledQuestions.length > questionIndex + 16) {
         questionIndex++
         setTimeout(() => {
             setQuestion();
         }, 1000);
     } else {
         return window.location.assign('score.html')
     }
 }

const questions = [
  {
    question: "Who won the WSOP Main Event in 2000?",
    answers: [
      { text: "Chris Ferguson", correctAnswer: true },
      { text: "T.J. Cloutier", correctAnswer: false },
      { text: "Steve Kaufman", correctAnswer: false },
      { text: "Hasan Habib", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2001?",
    answers: [
      { text: "Carlos Mortensen", correctAnswer: true },
      { text: "Dewey Tomko", correctAnswer: false },
      { text: "Phil Gordon", correctAnswer: false },
      { text: "Phil Hellmuth", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2002?",
    answers: [
      { text: "Robert Varkonyi", correctAnswer: true },
      { text: "Julian Gardner", correctAnswer: false },
      { text: "Ralph Perry", correctAnswer: false },
      { text: "Scott Gray", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2003?",
    answers: [
      { text: "Sammy Farha", correctAnswer: false },
      { text: "Chris Moneymaker", correctAnswer: true },
      { text: "Phil Ivey", correctAnswer: false },
      { text: "Dan Harrington", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2004?",
    answers: [
      { text: "David Williams", correctAnswer: false },
      { text: "Josh Arieh", correctAnswer: false },
      { text: "Greg Raymer", correctAnswer: true },
      { text: "Dan Harrington", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2005?",
    answers: [
      { text: "Steve Dannenmann", correctAnswer: false },
      { text: "Andy Black", correctAnswer: false },
      { text: "Mike Matusow", correctAnswer: false },
      { text: "Joe Hachem", correctAnswer: true },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2006?",
    answers: [
      { text: "Jamie Gold", correctAnswer: true },
      { text: "Allen Cunningham", correctAnswer: false },
      { text: "Paul Wasicka", correctAnswer: false },
      { text: "Doug Kim", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2007?",
    answers: [
      { text: "Tuan Lam", correctAnswer: false },
      { text: "Raymond Rahme", correctAnswer: false },
      { text: "Jerry Yang", correctAnswer: true },
      { text: "Hevad Khan", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2008?",
    answers: [
      { text: "Ivan Demidov", correctAnswer: false },
      { text: "Dennis Phillips", correctAnswer: false },
      { text: "Kelly Kim", correctAnswer: false },
      { text: "Peter Eastgate", correctAnswer: true },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2009?",
    answers: [
      { text: "Darvin Moon", correctAnswer: false },
      { text: "Joe Cada", correctAnswer: true },
      { text: "Jeff Shulman", correctAnswer: false },
      { text: "Phil Ivey", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2010?",
    answers: [
      { text: "Jonathan Duhamel", correctAnswer: true },
      { text: "John Racener", correctAnswer: false },
      { text: "Joseph Cheong", correctAnswer: false },
      { text: "Michael Mizrachi", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2011?",
    answers: [
      { text: "Martin Staszko", correctAnswer: false },
      { text: "Pius Heinz", correctAnswer: true },
      { text: "Ben Lamb", correctAnswer: false },
      { text: "Sam Holden", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2012?",
    answers: [
      { text: "Jesse Sylvia", correctAnswer: false },
      { text: "Jacob Balsiger", correctAnswer: false },
      { text: "Steven Gee", correctAnswer: false },
      { text: "Greg Merson", correctAnswer: true },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2013?",
    answers: [
      { text: "Jay Farber", correctAnswer: false },
      { text: "Mark Newhouse", correctAnswer: false },
      { text: "Ryan Riess", correctAnswer: true },
      { text: "JC Tran", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2014?",
    answers: [
      { text: "Martin Jacobson", correctAnswer: true },
      { text: "Felix Stephensen", correctAnswer: false },
      { text: "William Tonking", correctAnswer: false },
      { text: "Andoni Larrabe", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2015?",
    answers: [
      { text: "Joshua Beckley", correctAnswer: false },
      { text: "Max Steinberg", correctAnswer: false },
      { text: "Thomas Cannuli", correctAnswer: false },
      { text: "Joe McKeehen", correctAnswer: true },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2016?",
    answers: [
      { text: "Qui Nguyen", correctAnswer: true },
      { text: "Gordon Vayo", correctAnswer: false },
      { text: "Cliff Josephy", correctAnswer: false },
      { text: "Jerry Wong", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2017?",
    answers: [
      { text: "Dan Ott", correctAnswer: false },
      { text: "Scott Blumstein", correctAnswer: true },
      { text: "Jack Sinclair", correctAnswer: false },
      { text: "Ben Lamb", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2018?",
    answers: [
      { text: "John Cynn", correctAnswer: true },
      { text: "Tony Miles", correctAnswer: false },
      { text: "Joe Cada", correctAnswer: false },
      { text: "Michael Dyer", correctAnswer: false },
    ],
  },
  {
    question: "Who won the WSOP Main Event in 2019?",
    answers: [
      { text: "Garry Gates", correctAnswer: false },
      { text: "Alex Livingston", correctAnswer: false },
      { text: "Hossein Ensan", correctAnswer: true },
      { text: "Dario Sammartino", correctAnswer: false },
    ],
  },
];