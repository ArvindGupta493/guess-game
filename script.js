
let secretNumber = Math.floor(Math.random() * 100) + 1;         // Generate a random number between 1 and 100     


let attempts = 10;
let previousGuesses = [];

function submit() {
  const guessInput = document.getElementById('inp');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }
  attempts--;                         // Decrease the number of remaining attempts
  previousGuesses.push(guess);        // Add the guess to the list of previous guesses

  // Update the previous guesses and remaining attempts
  document.getElementById('prev').textContent = previousGuesses.join(", ");
  document.getElementById('remain').textContent = attempts;

  if (guess === secretNumber) {                       // Check if the guess is correct
    document.getElementById('result').textContent = "Congratulations! You guessed the right number!";
    document.getElementById('result').style.display = 'block';
    document.getElementById('hint').style.display = 'none';
    disableInput();
  } else {                
    let hintMessage = "";
    if (guess < secretNumber) {
      hintMessage = "The secret number is higher!";
    } else {
      hintMessage = "The secret number is lower!";
    }

    document.getElementById('hint').textContent = hintMessage;
    document.getElementById('hint').style.display = 'block';

    if (attempts === 0) {                            // If no attempts remain, end the game
      document.getElementById('result').textContent = `Game Over! The correct number was ${secretNumber}.`;
      document.getElementById('result').style.display = 'block';
      document.getElementById('hint').style.display = 'none';
      disableInput();
    }
  }
  guessInput.value = '';                // Clear the input field after submission
}

function disableInput() {             // Function to disable the input and button after the game ends
  document.getElementById('inp').disabled = true;
  document.querySelector('button').disabled = true;
}



















// let inp = document.getElementById("inp");
// let remainSpan = document.querySelector("#remain");
// let prevSpan = document.querySelector("#prev");
// let hint = document.getElementById("hint");
// let result = document.querySelector("#result");

// let random;
// let attemptRemain;
// let prevArray = [];

// function start() {
//   random = Math.random();
//   random = Math.floor(random * 100 + 1);
//   console.log(random);
//   attemptRemain = 10;
//   prevArray = [];
// }

// function reset() {
//   remainSpan.innerHTML = "10";
//   inp.value = "";
//   attemptRemain = 10;
//   prevSpan.innerHTML = "No guesses yet";
//   prevArray = [];
//   hint.style.display = "none";
// }

// start();

// function submit() {
//   if (inp.value <= 0 || inp.value > 100) {
//     alert("Kindly enter number in specified range i.e between 1 and 100");

//     inp.value = "";
//     return;
//   }

//   inp.addEventListener("click", () => (result.style.display = "none"));

//   if (inp.value < random)
//     hint.innerHTML =
//       "Hint : your guessed number is smaller than original number";
//   else if (inp.value > random) {
//     hint.innerHTML =
//       "Hint : your guessed number is greater than original number";
//   }

//   if (inp.value == random) {
//     result.style.display = "block";
//     result.innerHTML = "Hurrey ! you guessed it right";
//     result.style.backgroundColor = "green";
//     inp.value = "";
//     attemptRemain = 10;
//     reset();
//     setTimeout(() => alert("Game restarted "), 2000);
//     start();
//   } else {
//     result.style.display = "block";
//     hint.style.display = "block";
//     result.innerHTML = "Not a correct guess";
//     result.style.backgroundColor = "red";

//     if (attemptRemain < 1) {
//       alert("reached max guess limit");
//       result.style.display = "none";
//       reset();
//       return;
//     } else {
//       console.log(attemptRemain);
//       attemptRemain--;
//       remainSpan.innerHTML = attemptRemain;
//       prevArray.push(inp.value);
//       console.log(prevArray);

//       prevSpan.innerHTML = prevArray;
//       return;
//     }
//   }
//   return;
// }

// //will make it cleaner in next session
// //once user won/ game is finished disable the input field give a restart button
// //if all attempts are exhausted tell the number to the user and disable the input field and give the restart button to
// //try making separate functions for each functionality

















