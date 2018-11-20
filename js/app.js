const game = new Game();
const phrase = new Phrase(game.startGame().toUpperCase());
const buttonKeys = [...document.querySelectorAll(".key")];
document.querySelector("#overlay").addEventListener('click',function(){
  this.style.display = "none";
});
phrase.addPhraseToDisplay();//will need to make 'array' of phrases
buttonKeys.map(button=>button.addEventListener('click',function(e){
 game.handleInteraction(phrase, e.target.textContent.toUpperCase());
}));
let currentPhraseLetters = [...document.querySelectorAll("#phrase ul li")].map(letter => letter.textContent);
console.log(currentPhraseLetters);

// phrase.showMatchedLetter();
