const game = new Game(0,[],0);

let newPhrase = game.startGame().toUpperCase()
const phrase = new Phrase(newPhrase);
const buttonKeys = [...document.querySelectorAll(".key")];
document.querySelector("#overlay").addEventListener('click',function(){
  this.style.display = "none";
});
phrase.addPhraseToDisplay();//will need to make 'array' of phrases
let currentPhraseLetters = [...document.querySelectorAll("#phrase ul li")]
buttonKeys.map(button=>button.addEventListener('click',function(e){
 game.handleInteraction(phrase, e.target.textContent.toUpperCase(),currentPhraseLetters,newPhrase.length);
}));

// console.log(currentPhraseLetters);
// checkForWin()

// phrase.showMatchedLetter();
