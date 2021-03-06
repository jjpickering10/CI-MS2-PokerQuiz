# [**PokerQuiz**](https://jjpickering10.github.io/CI-MS2-PokerQuiz/)

_Use CTRL+click or CMD+click to open links throughout the README in a new tab_

![-](assets/images/amiresponsive.png)

## Overview

PokerQuiz - Have fun testing your poker knowledge.

---

## Description

This is a site aimed at providing simple quiz games based on the game of poker. It is a fun, interactive site with a light and dark theme that allows users to take multiple quizzes/games and save their scores.

---

## UX

### User Stories

As a first time visitor: 

1. I want to - easily navigate the quiz games and understand the rules of each.
2. I want to - test my knowledge on the game of poker.
3. I want to - find out my score.

As a returning visitor:

1. I want to - test my score against my previous attempts.
2. I want to - have different questions to my previous attempts.
3. I want to - use the same dark/light theme.

As a frequent user:

1. I want to - be able to contact the site.
2. I want to - test myself over and over again.
3. I want to - check all previous scores.

### **Strategy**

#### External User's Goals

- Test their poker knowledge on various topics.
- Have fun.
- Contact the site.
- View scores (new and old).
- Change theme (dark and light).

#### Site Owner's Goals

- Provide entertaining quiz game content that users can enjoy and learn about the game of poker with.

### **Scope**

- Visually appealing, easy to navigate site, with dark and light themes.
- Defines the quiz games easily.
- Interactive games.

### **Structure**

- 4 quiz game site. Seperated into 4 containers. Diamond, Club, Heart and Spade.
- Game 1: Multiple choice quiz for who won the World Series of Poker Main Event. This game has 20 total questions that are randomised into 5 questions per game.
- Game 2: Pick which hand is better, based on hand rankings. There are 10 hand rankings. Each hand ranking is represented by a 5 card hand. Each quiz compares 2 hands at a time, a total of 10 times asking the user to pick the best hand.
- Game 3: A game using [Deck of Cards API](https://deckofcardsapi.com/) where you have 10 attempts to shuffle a pair.
- Game 4: Again using [Deck of Cards API](https://deckofcardsapi.com/), a player is given 3 cards, and a card selection of 12 possible other cards and has to make the hand that is asked of them.
- Able to view scores with score board.
- Contact form.

### **Skeleton**

[Home Page Wireframe](assets/docs/homepage.png)

[Quiz Info Page Wireframe](assets/docs/quizinfopage.png)

[Quiz Page Wireframe](assets/docs/quizpage.png)

[Score Page Wireframe](assets/docs/scorepage.png)

[Contact Page Wireframe](assets/docs/contactpage.png)

[Home Page Mobile Wireframe](assets/docs/homepagemobile.png)

[Quiz Info Page Mobile Wireframe](assets/docs/quizinfopagemobile.png)

[Quiz Page Mobile Wireframe](assets/docs/quizpagemobile.png)

[Score Page Mobile Wireframe](assets/docs/scorepagemobile.png)

[Contact Page Mobile Wireframe](assets/docs/contactpagemobile.png)

- 6 page site with navigation to score board and back to home page.
- End of game modals to show score, input to save score, return to other games and a play again button.
- Short about section in home page modal.
- Contact form in home page modal.


### **Surface**

Colour scheme:

- White, black and red to match the colours of a deck of cards.
- Light and dark theme based on:

![-](assets/images/colourscheme.png)


Images:

- A light theme background image.
- A dark theme background image.
- Poker images of the 4 suits.
- Images of poker chips, cards, tables. Used as overlays in modals.

Typography:

- Crete Round - as this is similar to certain fonts used on playing cards
- Serif as a back up.
---

## Features

- Responsive on all device sizes.
- Dark and light theme with toggle button that is consistent throughout site.
- Animation throughout site.
- Able to save score and view on score board.
- Various about game modals, with rules and direct links to games.
- End of game modals with site navigation and save score feature.
- [Deck of Cards API](https://deckofcardsapi.com/) used to shuffle cards.
- Fully functional contact form.
- - Diamond Quiz
- - - 5 questions out of possible 20 options.
- - - Score updated throughout quiz.
- - Club Quiz
- - - 10 questions shuffled.
- - - Correct answers turn green, incorrect answers turn red.
- - Heart Game
- - - 10 attempts using API shuffle.
- - - Selection of random correct and incorrect pop up phrases
- - Spade Quiz
- - - 5 questions shuffled.
- - - Correct and incorrect pop up statements

## Technologies Used

### Languages

[HTML5](https://en.wikipedia.org/wiki/HTML5)

[CSS3](https://en.wikipedia.org/wiki/CSS)

[JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries and Programs Used

[GitPod](https://www.gitpod.io/) - Online IDE

[Git](https://git-scm.com/) - Version Control

[Github](https://github.com/) - Where Git repositories are stored

[Balsamiq](https://balsamiq.com/) - for wireframes

[FontAwesome](https://fontawesome.com/) - for footer icons

[Google Fonts](https://fonts.google.com/) - for fonts

[Material Design Icons](https://materialdesignicons.com/) - for svg icons


### Resources

[Deck of Cards API](https://deckofcardsapi.com/)

> This API allows you to shuffle a deck of cards. You can also pick a partial deck as well as a full deck. I used this for 2 of the quizzes/games in this project.
>> It is used in the shuffle a pair game that takes a full deck of cards, then two cards are picked from that shuffled deck and if they match, you get a pair.
>>> The second time it is used is in the quiz where the user is asked to make a hand. Here I took a a partial deck of 3 cards (these werent random, I picked the cards), and a partial deck of 12 cards (again I picked these). Here both sets of cards are put onto the screen and the user is asked to make a hand with 2 cards from the 12 card selection and the 3 cards on the board. All cards are displayed differently on screen for each game.

[Email.js](https://www.emailjs.com/)
> for working contact form

[CSS Tricks](https://css-tricks.com/)
> for general help, primarily with flexbox

[Stack Overflow](https://stackoverflow.com/)
> for support

[W3Schools](https://www.w3schools.com/)
> for general help

[YouTube](https://youtube.com)
> this was my main source of help. I used Web Dev Simplified, Brian Design, LearnWebCode and Code with Ania Kubow as my main resources for learning.

[Responsinator](http://www.responsinator.com/)
> helping to test responsiveness

[Shutterstock](https://www.shutterstock.com/home)
> for images

[CompressJPEG](https://compressjpeg.com/)
> for image compression

[Am I Responsive](http://ami.responsivedesign.is/)
> for responsive help and README image

[Autoprefixer](https://autoprefixer.github.io/)
> adds vendor prefixes to CSS

Code Institute Course

Code Institute Slack Community

Chrome Dev Tools
> Alongside using dev tools for HTML and CSS help. I used the console constantly for the JavaScript code. I truly realised how much help console.log is.

---

## Testing

**First Time Visitor Goals**

*I want to - easily navigate the quiz games and understand the rules of each.*
- As you enter the home page, you are shown 4 cards with a CTA to click the cards. Each card has a distinct hover that opens a modal. Each modal explains what each quiz/game is about, with a play button that starts the game. You can click outside the modal to exit and you are again shown each option.
> When testing I decided to remove the end of game buttons taking you to other games. But instead left the button taking you back home.
>> I expected an easy navigation to understand the rules of each, but the next game buttons bypassed the rules that are in the homepage modals.
>>> By referring the user back to the home page for the start of each game, they are able to see the game description every time.
>>>> My mother helped identify this issue as a first time user when she tested the site.

*I want to - test my knowledge on the game of poker.*
- As you go through each quiz, you are given multiple different questions. Some with text, some with visual cards. And questions testing what you know.
> Even though the quizzes are quite basic. You do get tested with various questions as expected.

*I want to - find out my score.*
- As you go through each quiz, you are given constant updates on results of each question. After completion of each quiz, a modal pops up displaying your final score.
> Viewing score expectation is achieved with end of game modals that give a clear visual of your end score as well as in game interaction that lets you know if each answer is correct or incorrect.

**Returning Visitor Goals**

*I want to - test my score against my previous attempts.*
- As you enter each page, you see navigation to the score page. On the score page, previous results are listed along with names that were inputted.
> After completing each quiz and submitting the score, I repeated this process. The previous scores were listed in the score page with my name.

*I want to - have different questions to my previous attempts.*
- As you go through each quiz, all questions are randomised.
> Repeated each quiz multiple times. Got a wide variety in the diamond quiz and the pair game is totally random. Whilst The club and spade quizzes do offer different questions. The variety is limited and could be improved with many more questions.

*I want to - use the same dark/light theme.*
- As you enter each page, there is a toggle button in the footer. Each page has both dark and light theme.
> Navigated through the site using both themes, toggling between them. The site stays on either theme until toggled back to the other. Also stays on that theme when the page is refreshed.

Frequent User Goals

*I want to - be able to contact the site.*
- As you enter the home page, there is a clear contact navigation option in the header. When you click on this, a contact form inside a modal pops up.
> Sent a message in the contact form and got an auto reply letting me know my message had been recieved by the site.

*I want to - test myself over and over again.*
- As you complete the quiz, a modal pops up giving you the option to play again, or go home. As you go home, you are given each quiz game option again.
> Whilst you are able to repeat the quizzes over and over, eventually you see the same questions. This could be improved with more questions.

*I want to - check all previous scores.*
- As you enter the home page there is clear navigation to the score page in the header. In the score page all previous saved scores are listed.
> The score page showed all my previous scores with my name attached to each score.

Responsiveness
- There was an issue with viewing the game pages in landscape mobile view.
> To fix this I used a body height of 100vh and a min-height of 100% for the page containers.
- Other than that issue, the site works on desktop, tablet and mobile. In both portrait and landscape.

HTML Validity
> index.html had issues with the a tag being a decendant of the button tag. Changed button tag to p tag. No errors other than this.
>> the score and game html pages had an issue with the a tag being outside the li tag, so I put the a tag inside the li tag. No errors other than this.
>>> diamond.html had an issue with there being an empty h2 tag. I changed it to a div tag. No errors other than this.

CSS Validity
> No errors in CSS files.

JavaScript

- Cleared localStorage to test if scores would update when localStorage was empty. There was an error due to null values preventing the code from displaying results.
> To fix this I wrote an if statement that would return from the forEach function if the value was null. 

- One of the images in club.js wasn't being shown. Console showed "ERR_BLOCKED_BY_CLIENT"
> After deleting, reuploading and renaming the file. The image now worked as intended.

- When testing, sometimes the XMLHttpRequest showed a 500 error in the console and stopped the game.
> I added in some error handling on each XMLHttpRequest throughout the project to display an alert to the user that an error had occured and to refresh the page.

- When testing the saveScores function I realised you could save your score without inputting your name.
> To improve this I disabled the button and added a keyup event listener in each js file to enable the button when a user types.
>> After second testing I had to change the code from saveScoreButton.disabled = false; to saveScoreButton.disabled = !userName.value;
>>> This was an error in inital code that prevented the submit button returning to disabled if text input was deleted.

- Whilst passing all the js files through JSHINT, there were several warnings about missing semicolons and undeclared variables.
> These were cleaned up.

- In spade. js the following warning occured "Function statements should not be placed in blocks. Use a function expression or move the statement to the top of the outer function."
> After researching on [JSlint Errors](https://github.com/jamesallardice/jslint-error-explanations/blob/master/message-articles/function-in-block.md), the following statement states "This error is raised to highlight code that may not work as you expect it to."
>>> After vigourous testing on multiple browsers, the code works as expected. Although on Safari, occasionally the message pop up stating whether you got the question correct or incorrect didnt show. This is a minor problem as the end modal showing final result works.

Contrast colours
> Used [a11y contrast checker](https://color.a11y.com/). No issues found throughout site.

Code cleaned up
> Used prettier extension to clean up the code in all html, css and js files.

Spelling
> Spell check throughout project.

Image sizes
> images were compressed using [CompressJPEG](https://compressjpeg.com/).

CSS autoprefixer
> Used [autoprefixer](https://autoprefixer.github.io/) on all CSS files. Copied updated code back into each CSS file.

Other Testing

- Testing live site shows that...

- - Dark/light theme is consistent works through out site.
- - Footer links all link correctly to a new tab.
- - Contact form works and sends out auto-reply message.
- - All homepage modals open on click.
- - All end game modals open at the end of each quiz.
- - All buttons throughout are linked correctly to their target destination.
- - Score page correctly displays localStorage values.
- - Save score button is disabled on all end game modals until user has inputted into the text box. Button is disabled again when all text is removed.
- - Save score button and text input are removed after save score button is clicked.
- - **Game pages**
- - - Displays correct amount of questions/attempts, which are different each time you take the quizzes.
- - - Score and/or question result display is updated throughout games and final score is shown in end game modals.

### Project Barriers and Solutions

- There was an issue in club.js where because of where the shuffle rankings function was in the code and how the ranking index incremented, once you got to the end of the array, it would duplicate the same hand as the final question. This was because the rankings array was only shuffled once.
> To fix this I moved the shuffle ranking function out of the start game function, so that every question had a new shuffle.

- In spade.js I initially wrote the code for attributing the correct answers into the global displayhands function. But because of the nature of the API and having to use totally different personalised URLs for each request. This meant that this global function would have to be re-written for each question.
> To get around this I used object destructuring to attribute the correct answers in each question function, so that the global displayhands function would only have to be written once and could be used for each question.

- In spade.js because of how I used the API. This meant having to input my own chosen URLs. This also meant that being able to shuffle the questions for a better user experience was harder as each question came from a function and not my own created array.
> To get around this I had to put each question, which was a function itself, into an array. I got this help from stackoverflow.

- In spade.js I had issues with multiply shuffling.
> To get around this I added a reset function that reset each variable for the new question.

- I started my site layout with CSS grid, but I couldn't quite manage to make the site look how I wanted it to, due to lack of experience using grid.
> I switched entirely to flexbox midway through as I am better using flexbox than grid. I realised I need to work on my grid css skills.

- Didn't like original homepage layout that is in the wireframe.
> Decided to place the four cards next to each other as I felt this looks better on desktop.

- Midway through I had issues with the modals due to using bootstrap as well as my own modals.
> I decided to completely remove all bootstrap from the project as I didnt need it and could write my own modals with js.

- Throughout the site there was issues with DOM manipulation and timing.
> I used the setTimeout function in certain places to help with better user experience.

- I had trouble with API not loading sometimes.
> To get around this I added some error handling with an alert to ask the user to refresh the page.


### Feature To Improve

- I initially wanted to have a timer on the quizzes, but I had a bit of an issue getting it to function properly. I would add this next time.
- I would like to add a feature that shows how many more questions you have left.
- I would like to edit the score page into a high score page rather than just a page showing results.
- I would like more games. And more complex games but because poker is so complex I felt it was too much for my first JavaScript project to have too much complexity.
- Some of the animations are a little jerky. This could definitely be improved.
- I would like to improve the layout of the game pages and the css styling. But because this was my first JavaScript project, I focused mainly on that for this project.

### Code Validity

[**HTML W3C Validator**](https://validator.w3.org/)

[*Home Page validated*](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjjpickering10.github.io%2FCI-MS2-PokerQuiz%2F)

[*Diamond Page validated*](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjjpickering10.github.io%2FCI-MS2-PokerQuiz%2Fdiamond.html)

[*Club Page validated*](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjjpickering10.github.io%2FCI-MS2-PokerQuiz%2Fclub.html)

[*Heart Page validated*](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjjpickering10.github.io%2FCI-MS2-PokerQuiz%2Fheart.html)

[*Spade Page validated*](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjjpickering10.github.io%2FCI-MS2-PokerQuiz%2Fspade.html)

[*Score Page validated*](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjjpickering10.github.io%2FCI-MS2-PokerQuiz%2Fscore.html)



[**CSS W3C Validator**](https://jigsaw.w3.org/css-validator/)

[*Home Page validated*](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjjpickering10.github.io%2FCI-MS2-PokerQuiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

[*Diamond Page validated*](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjjpickering10.github.io%2FCI-MS2-PokerQuiz%2Fdiamond.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

[*Club Page validated*](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjjpickering10.github.io%2FCI-MS2-PokerQuiz%2Fclub.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

[*Heart Page validated*](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjjpickering10.github.io%2FCI-MS2-PokerQuiz%2Fheart.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

[*Spade Page validated*](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjjpickering10.github.io%2FCI-MS2-PokerQuiz%2Fspade.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

[*Score Page validated*](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjjpickering10.github.io%2FCI-MS2-PokerQuiz%2Fscore.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

[**JSHint**](https://jshint.com/) - for errors and warnings in JavaScript code.


---

## Deployment

Deployed on GitHub Pages through the following process:

- Code written on GitPod.
- Code then pushed to GitHub to be stored in the repository.
- Under settings of the repository, scrolled to GitHub Pages section.
- "Master Branch" was selected under the "Source" drop down.
- The site's URL is then displayed.

Cloning

- Locate the GitHub Repository.
- Click the "Code" button.
- Highlight the "HTTPS" button to clone with HTTPS and copy the link.
- Open Git Bash
- Identify location in IDE where you want the cloned directory to be made.
- Type git clone, and then paste the URL, which is the link that's been copied.
- Your local clone will be made.

Forking

- To fork the respository, click the fork button that is situated to the right of the respository title.
- There will now be your own copy in your account.

---

## Credits

### Code Snippets and help

Help for object destructuring - [stackoverflow](https://stackoverflow.com/questions/12162786/adding-new-objects-to-localstorage)

Help for shuffling an array - [stackoverflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

Help for array of functions - [stackoverflow](https://stackoverflow.com/questions/4908378/javascript-array-of-functions#4908388)

Help for adding new objects to localStorage for score page - [stackoverflow](https://stackoverflow.com/questions/12162786/adding-new-objects-to-localstorage)

Help with dark theme saving to localStorage - [codepen](https://codepen.io/kevinpowell/pen/EMdjOV) 

### Images and videos

-  Images came from [Shutterstock images](https://www.shutterstock.com/home) and [Deck of Cards API](https://deckofcardsapi.com/)

### Written Content

- Site written with my own words.
- Poker Main Event winners and poker hand rankings all from general poker knowledge.

### Acknowledgments

- Various YouTube tutorials from channels listed in resources section helped me out immensely.
- Code Institute Software Development Course - for the education.
- Code Institute Slack Community group - for the support.
- My mentor [Antonio Rodriguez](https://github.com/AkaAnto) - for the guidance and support throughout.
