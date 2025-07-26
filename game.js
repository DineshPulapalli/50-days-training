let gameResult=document.getElementById("gameResult")
let userInput=document.getElementById("userInput")
let randomNumber=Math.ceil(Math.random()*100)
function checkGuess() {
    let guessNumber=parseInt(userInput.value);
    if(guessNumber>randomNumber){
        gameResult.textContent="Too high,try again."
        gameResult.style.backgroundColor="#3452ab"
    }
    else if(guessNumber<randomNumber){
         gameResult.textContent="Too low,try again."
         gameResult.style.backgroundColor="#3452ab"
    } 
    else if(guessNumber===randomNumber){
         gameResult.textContent="Congratulations! You did it!"
         gameResult.style.backgroundColor="#12EA34"
    }
    else{
         gameResult.textContent="Invalid input, please try again."
         gameResult.style.backgroundColor="red"
    }
}