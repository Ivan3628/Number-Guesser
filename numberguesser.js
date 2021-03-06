
//GAME FUNCTION
//Player must guess a number between min and max
//Player gets a certain amount of guesses
//Notify player of guesses remaining
//Notify the player of the correct answer if we loose
//Let player choose to play again


//Game values 
let min=1,
    max=10,
    winningNum=getRandomNum(min,max);
    guessesLeft=3;

//UI Elements
const game=document.querySelector("#game"),
      minNum=document.querySelector(".min-num"),
      maxNum=document.querySelector(".max-num"),
      guessBtn=document.querySelector("#guess-btn"),
      guessInput=document.querySelector("#guess-input"),
      message=document.querySelector(".message");

//Assign  min and max to UI
minNum.textContent=min;
maxNum.textContent=max;

//Play again event listener
game.addEventListener("mousedown",function(e){
  if(e.target.className === "play-again"){
    window.location.reload();
    
  }
})

//Listen for guess
guessBtn.addEventListener("click",function(){

let guess=parseInt(guessInput.value);


//Validate
if(isNaN(guess) || guess < min || guess > max){
  setMessage(`Please enter a number between ${min} and ${max}`,"red");
}

//Check if won
if(guess===winningNum){

  //Disable input
   guessInput.disabled=true;

  //Change border color
  guessInput.style.borderColor="green";

  //Set message
  setMessage(`${winningNum} is correct, YOU WIN!`,"green");
}else{
  //Wrong number
  guessesLeft -=1


 if(guessesLeft===0){
   //Game over - lost

  //Disable input
  guessInput.disabled=true;

  //Change border color
  guessInput.style.borderColor="red";

  //Set message
  setMessage(`Game Over, you lost.The correct number was ${winningNum}`,"red");
 }else{
   //Game continues - answer wrong 

  //Change border color
  guessInput.style.borderColor="red";

  //Clear input
  guessInput.value="";

   //Tell user it s the wrong number
   setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,"red");
 }
}
});



//Get Winning Number
function getRandomNum(min,max){
return Math.floor(Math.random()*(max-min + 1))+ min;
}



function setMessage(msg,color){
  message.textContent=msg;
  message.style.color=color;
}


      
  