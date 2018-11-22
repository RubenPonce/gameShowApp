const game = new Game(0,[],0);

let newPhrase = game.startGame().toUpperCase()
const phrase = new Phrase(newPhrase);
const buttonKeys = [...document.querySelectorAll(".key")];
document.querySelector("#overlay").addEventListener('click',function(){
  this.style.display = "none";
});
phrase.addPhraseToDisplay();//will need to make 'array' of phrases
let currentPhraseLetters = [...document.querySelectorAll("#phrase ul li")]
buttonKeys.map(button=>button.onclick = function(e){
 game.handleInteraction(phrase, e.target.textContent.toUpperCase(),currentPhraseLetters,newPhrase.length);

 e.target.className = "disabled";
 disable(e.target);
});

function disable(target){
  target.setAttribute("disabled", "disabled");
}
// console.log(currentPhraseLetters);
// checkForWin()

// phrase.showMatchedLetter();

/*This file creates a new instance of the Game class, adds event listeners for the onscreen keyboard and a function to display the game:
resetDisplay(): this function hides the start screen overlay.
markButton(): this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
Add an event listener to the "Start Game" button which calls the resetDisplay() function, creates a new Game object, and starts the game.
Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.
*/
