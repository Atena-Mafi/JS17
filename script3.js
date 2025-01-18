let randomNumber = Math.floor(Math.random() * 100 + 1);
const finalOutput=document.querySelector(".final-output");
const triesOutput=document.querySelector(".Tries-output");
const input=document.querySelector(".inputs-Values");
const btnNewGame=document.querySelector(".btnNewGame");
let i =7;
let count=0;
 triesOutput.textContent=`Number of Tries : ${i}`;
 finalOutput.textContent="Guess a number between 1 and 100";
 input.value="";
function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector('.inputs-Values').value;
  guess=Number(guess);
if(isNaN(guess) || guess>100 || guess < 1 || !Number.isInteger(guess) ){
  finalOutput.textContent="Please enter a number between 1 and 100";
  return
}
i--
 triesOutput.textContent=`Number of Tries : ${i}`
count++
if(guess>randomNumber){
  finalOutput.textContent= "Number is too high, try again";

}else if(guess<randomNumber){
 finalOutput.textContent= "Number is too low, try again";
}else{
  finalOutput.textContent="Guess is correct. You win!";
  triesOutput.textContent=`It took you ${count} tries`;

  input.disabled=true;
  return; 

}

if(i<=0){
  triesOutput.textContent=`You Lost, the number was: ${randomNumber}`
  input.disabled=true;
  return

}

}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
 i =7;
 count=0;
 triesOutput.textContent=`Number of Tries : ${i}`
 finalOutput.textContent="Guess a number between 1 and 100";
 document.querySelector('.inputs-Values').value="";
 input.disabled=false;
}

document.querySelector('.btnGuess').addEventListener('click', guessNumber)
document.querySelector(".btnNewGame").addEventListener("click",newGame)
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"



  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button