let newGame;
let currentPhraseLetters
let startGameButton = document.querySelector("#btn__reset");
startGameButton.addEventListener("click",function(e){
  resetDisplay(e.target);
  newGame = new Game(0, [], 0);
})

// let newPhrase = game.startGame().toUpperCase()//newPhrase is the "Phrase..."
// const phrase = new Phrase(newPhrase);//phrase is the instance that calls Phrase.js
//-----------------------------------
const buttonKeys = [...document.querySelectorAll(".key")];

//**********************************

buttonKeys.map(button=>button.onclick = function(e){
currentPhraseLetters  = [...document.querySelectorAll("#phrase ul li")]
markButton(e.target, currentPhraseLetters);
}
);

window.addEventListener('keypress', x => {
  let key = x.key;
  console.log(key);
for (let i = 0; i < buttonKeys.length; i++) {
      currentPhraseLetters  = [...document.querySelectorAll("#phrase ul li")];
    if(key.toLowerCase() === buttonKeys[i].textContent){
  markButton(buttonKeys[i], currentPhraseLetters);
}
}
}
);




//-----------------------------------
function disable(target){
  target.setAttribute("disabled", "disabled");
}
function enable(target){
  target.setAttribute("disabled", " ");
}
//**********************************

function resetDisplay(event){
    event.parentElement.style.display = "none";
    let li = [...document.querySelectorAll("#phrase ul li")];
    buttonKeys.forEach(function(button){
      if(button.className === "disabled"){
        button.className = "key"
      button.classList.remove("disabled");
      button.disabled = false;
    };
    document.querySelectorAll(".tries img").forEach(life => life.src = "images/liveHeart.png");
  })
    if(li.length >0){
    li.map(listItem => listItem.parentElement.removeChild(listItem));
  }

}
function markButton(button, currentPhrase){
  newGame.handleInteraction(button.textContent.toUpperCase(),currentPhraseLetters);// phrase
  button.className = "disabled";
  disable(button);
}
function markKey(button, currentPhrase){
  newGame.handleInteraction(button.toUpperCase(),currentPhraseLetters);// phrase
  button.className = "disabled";
  disable(button);
}
/*This file creates a new instance of the Game class, adds event listeners for the onscreen keyboard and a function to display the game:
resetDisplay(){}: this function hides the start screen overlay.
markButton(): this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
Add an event listener to the "Start Game" button which calls the resetDisplay() function, creates a new Game object, and starts the game.
Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.
*/
