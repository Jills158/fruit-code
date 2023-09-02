//set the initial variables
let guess = 0;
let myGuess = "";
let firstChoice = "";
let secondChoice = "";
let thirdChoice = "";
let fourthChoice = "";
let score = "";
const options = ["🍋", "🍌", "🍉", "🍐", "🍓", "🍒"];
let chooseOptions = ["🍋", "🍌", "🍉", "🍐", "🍓", "🍒"];
let codeGuess = [];

//Computer choosing the code
function codeChoose() {
  console.log(options + "options at start of codechoose");
  for (let i = 1; i < 5; i++) {
    let choice = Math.floor(Math.random() * chooseOptions.length);
    let newElement = chooseOptions.slice(choice, choice + 1);
    chooseOptions.splice(choice, 1);
    codeGuess = codeGuess.concat(newElement);
  }

  console.log(codeGuess + "The code"); //checking out the code - cheating!!
  console.log(chooseOptions + "chooseoptions");
  console.log(options + "options");
}

//populating the first dropdown
function population() {
  let options1 = "";
  options.map((op, i) => {
    options1 += `<option value="${op}" id="${i}" >${op}</option>`; //I found this by Googling!
  });
  document.getElementById("first").innerHTML = options1;

  //populating the second dropdown
  let options2 = "";
  options.map((op, i) => {
    options2 += `<option value="${op}" id="${i}" >${op}</option>`;
  });
  document.getElementById("second").innerHTML = options2;

  //populating the third dropdown
  let options3 = "";
  options.map((op, i) => {
    options3 += `<option value="${op}" id="${i}" >${op}</option>`;
  });
  document.getElementById("third").innerHTML = options3;

  //populating the fourth dropdown
  let options4 = "";
  options.map((op, i) => {
    options4 += `<option value="${op}" id="${i}">${op}</option>`;
  });
  document.getElementById("fourth").innerHTML = options4;
  console.log(options + "options at the end of population");
}
window.onload = () => {
    // Code that runs when the document is loaded
    population();
    codeChoose();
  
//Button to access the rules
const goHelp = document.getElementById("helpButton");
goHelp.addEventListener("click", function () {
  console.log("function goHelp");
  const help = document.getElementById("help");
  help.style.display = "block"; //switch on the hidden help page
});
//return to game button
const backHelp = document.getElementById("return");
backHelp.addEventListener("click", function () {
  console.log("function return");
  help.style.display = "none"; //hide the help screen again
});
    
  };

//asigning the guess to the variables
function sendCodeGuess() {
  firstChoice = document.getElementById("first").value;
  secondChoice = document.getElementById("second").value;
  thirdChoice = document.getElementById("third").value;
  fourthChoice = document.getElementById("fourth").value;

  //looking at the guess to check the variable picking up the right thing
  myGuess = firstChoice + secondChoice + thirdChoice + fourthChoice;
  console.log(myGuess + "myguess in sendcodeguess");
  //check for duplicates in the code- only progress to checkguess when there are none.
  if (
    firstChoice === secondChoice ||
    firstChoice === thirdChoice ||
    firstChoice === fourthChoice ||
    secondChoice === thirdChoice ||
    secondChoice === fourthChoice ||
    thirdChoice === fourthChoice
  ) {
    let message = "You cannot choose the same fruit twice.Try again";
    document.getElementById("message").innerHTML = message;
  } else {
    document.getElementById("message").innerHTML = "";
    checkGuess();
  }
}

// checking the guess against the code
function checkGuess() {
  console.log("Arrived at CheckGuess");
  guess = guess + 1;
  //we need to output the code to the page
  const addGuess = myGuess;
  const outputGuess = document.getElementById("outputGuess");
  outputGuess.appendChild(document.createTextNode(addGuess));
  outputGuess.appendChild(document.createElement("br"));
  outputGuess.appendChild(document.createElement("hr"));
  console.log(addGuess + "addGuess - checkGuess function"); //works!!

  if (
    firstChoice === codeGuess[0] &&
    secondChoice === codeGuess[1] &&
    thirdChoice === codeGuess[2] &&
    fourthChoice === codeGuess[3]
  ) {
    // code is correct - say well done and go to play again
    console.log("yes");
    const winningMessage = "!!You Win!!";
    const winner = document.getElementById("outputScore");
    winner.appendChild(document.createTextNode(winningMessage));
    //add winners cup
   let cup = document.createElement("img");
   cup.setAttribute(
   "src",
   "https://drive.google.com/uc?export=view&id=1dA5VrRTHxWD5PVGl024IFXWjole6q6JP"
   );
    cup.setAttribute("height", "110");
    cup.setAttribute("width", "100");
    document.getElementById("outputScore").appendChild(cup);
    const submitButton = document.getElementById("submitGuess");
    submitButton.style.display = "none";
    playAgain();
  } else {
    //guess is not correct.  Need to score the guess and take another go
    console.log("no");

    //work out the score
    //assign variables to right and wrong places
    let rightPlace = 0;
    let wrongPlace = 0;
    //check for the right places first
    if (firstChoice === codeGuess[0]) {
      rightPlace = rightPlace + 1;
    }
    if (secondChoice === codeGuess[1]) {
      rightPlace = rightPlace + 1;
    }
    if (thirdChoice === codeGuess[2]) {
      rightPlace = rightPlace + 1;
    }
    if (fourthChoice === codeGuess[3]) {
      rightPlace = rightPlace + 1;
    }
    console.log(rightPlace + "right");
    //check for wrong places
    if (
      firstChoice === codeGuess[1] ||
      firstChoice === codeGuess[2] ||
      firstChoice === codeGuess[3]
    ) {
      wrongPlace = wrongPlace + 1;
    }
    if (
      secondChoice === codeGuess[0] ||
      secondChoice === codeGuess[2] ||
      secondChoice === codeGuess[3]
    ) {
      wrongPlace = wrongPlace + 1;
    }
    if (
      thirdChoice === codeGuess[0] ||
      thirdChoice === codeGuess[1] ||
      thirdChoice === codeGuess[3]
    ) {
      wrongPlace = wrongPlace + 1;
    }
    if (
      fourthChoice === codeGuess[0] ||
      fourthChoice === codeGuess[1] ||
      fourthChoice === codeGuess[2]
    ) {
      wrongPlace = wrongPlace + 1;
    }
    console.log(wrongPlace + "wrong");
    //output the score
    for (let i = 0; i < rightPlace; i++) {
      score = score + "⚫";
    }
    for (let i = 0; i < wrongPlace; i++) {
      score = score + "⚪";
    }
    console.log(score);
    const outputScore = document.getElementById("outputScore");
    outputScore.appendChild(document.createTextNode(score)); //yep!!
    outputScore.appendChild(document.createElement("br"));
    outputScore.appendChild(document.createElement("hr"));
    score = "";
    console.log(guess);
    if (guess >= 10) {
      loser();
    }
  }
}
//Add  a Play Again button
function playAgain() {
  console.log("PlayAgain");
  const againButton = document.createElement("button");
  const againText = document.createTextNode("Play Again?");
  againButton.appendChild(againText);
  outputScore.appendChild(againButton);
  //then create eventlistener to listen for the click and reset for another go
  againButton.addEventListener("click", function () {
    console.log("event listener working");
    document.getElementById("outputGuess").innerHTML = "";
    document.getElementById("outputScore").innerHTML = "";
    guess = 0;
    codeGuess = [];
    chooseOptions = options.slice();
    population();
    codeChoose();
    //put the submission button back
    const submitButton = document.getElementById("submitGuess");
    submitButton.style.display = "block";
  });
}

//if had enough guess and still hasnt got it...
function loser() {
  console.log(guess + "had enough");
  const losingMessage1 = "!!You Lose!!";
  const losingMessage2 = "The code was";
  const loser = document.getElementById("outputScore");
  loser.appendChild(document.createTextNode(losingMessage1));
  loser.appendChild(document.createElement("br"));
  loser.appendChild(document.createTextNode(losingMessage2));
  loser.appendChild(document.createElement("br"));
  loser.appendChild(
    document.createTextNode(
      `${codeGuess[0]} ${codeGuess[1]} ${codeGuess[2]} ${codeGuess[3]} `
    )
  );
  const submitButton = document.getElementById("submitGuess");
  submitButton.style.display = "none";
  playAgain();
}

