# [**Poker Quiz**]()

_Use CTRL+click or CMD+click to open links throughout the README in a new tab_

![-](-) - image

## Overview

PokerQuiz - Have fun testing your poker knowledge.

---

## Description

-This is a site aimed at providing simple quiz games based on the game of poker.

---

## UX

### User Stories

As a first time visitor: 

1. I want to - easily navigate the quiz games.
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
- Game 1: Multiple choice quiz for who won the World Series of Poker Main Event.
- Game 2: Pick which hand is better, based on hand rankings.
- Game 3: A game using an API where you try to shuffle a pair.
- Game 4: Again using an API, a player is given 3 cards, and a card selection of 12 possible other cards and has to make the hand that is asked of them.
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
- End of game modals to show score, input to save score and various next game buttons and a play again button.
- Short about section in home page modal.
- Contact form in home page modal.


### **Surface**

Colour scheme:

- White, black and red to match the colours of a deck of cards.
> rgba(157, 35, 29, 1);

- Light and dark theme based on:
> rgba(41, 35, 38, 1);
> rgba(232, 230, 227, 1);

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
- Dark and light theme with toggle button.
- Score board.
- Various about game modals.
- End of game modals.
- API used to shuffle cards.
- Fully functional contact form.

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

[CSS Tricks](https://css-tricks.com/) - for general help

[Stack Overflow](https://stackoverflow.com/) - for support

[W3Schools](https://www.w3schools.com/) - for general help

[YouTube](https://youtube.com) - for general help

[Responsinator](http://www.responsinator.com/) - helping to test responsiveness

[TinyPNG](https://tinypng.com/) - for image compression

[CompressJPEG](https://compressjpeg.com/) - for image compression

[Am I Responsive](http://ami.responsivedesign.is/) - for responsive help and README image

[Autoprefixer](https://autoprefixer.github.io/) - adds vendor prefixes to CSS

Code Institute Course

Code Institute Slack Community

Chrome Dev Tools

---

## Testing

First Time Visitor Goals

Returning Visitor Goals

Frequent User Goals

Other Testing

- Responsiveness

- HTML Validity
> index.html had issues with the a tag being a decendant of the button tag. Changed button tag to p tag. No errors other than this.
> the score and game html pages had an issue with the a tag being outside the li tag, so I put the a tag inside the li tag. No errors other than this.
> diamond.html had an issue with there being an empty h2 tag. I changed it to a div tag. No errors other than this.

- CSS Validity
> No errors in CSS files.

JavaScript

- Cleared localStorage to test if scores would update when localStorage was empty. There was an error due to null values preventing the code from displaying results.
> To fix this I wrote an if statement that would return from the forEach function if the value was null. 

- One of the images in club.js wasn't being shown. Console showed "ERR_BLOCKED_BY_CLIENT"
> After deleting, reuploading and renaming the file. The image now worked as intended.

- When testing, sometimes the XMLHttpRequest showed a 500 error in the console and stopped the game.
> I added in some error handling on each XMLHttpRequest throughout the project to display an alert to the user that an error had occured and to refresh the page.

- Contrast colours
> Used a11y contrast checker. No issues found throughout site.

- Code cleaned up
> Used prettier extension to clean up the code in all html, css and js files.

- Spelling

- Image sizes

- CSS autoprefixer
> Used autoprefixer on all CSS files. Copied updated code back into each CSS file.

### Project Barriers and Solutions

- There was an issue in club.js where because of where the shuffle rankings function was in the code and how the ranking index incremented, once you got to the end of the array, it would duplicate the same hand as the final question. This was because the rankings array was only shuffled once.
> To fix this I moved the shuffle ranking function out of the start game function, so that every question had a new shuffle.

- In spade.js I initially wrote the code for attributing the correct answers into the global displayhands function. But because of the nature of the API and having to use totally different personalised URLs for each request. This meant that this global function would have to be re-written for each question.
> To get around this I used object destructuring to attribute the correct answers in each question function, so that the global displayhands function would only have to be written once and could be used for each question.

- In spade.js because of how I used the API. This meant having to input my own chosen URLs. This also meant that being able to shuffle the questions for a better user experience was harder as each question came from a function and not my own created array.
> To get around this I had to put each question, which was a function itself, into an array. I got this help from stackoverflow.

- In spade.js I had issues with multiply shuffling.
> To get around this I added a reset function that reset each variable for the new question.

- I started my site layout with CSS grid, but I could quite manage to make the site look how I wanted it to, due to lack of experience using grid.
> I switched entirely to flexbox midway through as I am better using flexbox than grid. I realised I need to work on my grid css skills.

- Didn't like original homepage layout that is in the wireframe.
> Decided to place the four cards next to each other as I felt this looks better on desktop.

- Midway through I had issues with the modals due to using bootstrap as well as my own modals.
> I decided to completely remove all bootstrap from the project as I didnt need it and could write my own modals with js.

- Throughout the site there was issues with DOM manipulation and timing.
> I used the setTimeout function in certain places to help with better user experience.



- Trouble with API not loading sometimes.


### Feature To Improve

### Code Validity

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

### Code Snippets

### Images and videos

### Written Content

### Acknowledgments

- Code Institute Software Development Course - for the education.
- Code Institute Slack Community group - for the support.
- My mentor [Antonio Rodriguez](https://github.com/AkaAnto) - for the guidance and support throughout.
