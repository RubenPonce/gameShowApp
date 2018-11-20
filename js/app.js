const game = new Game();
const phrase = new Phrase(game.startGame().toUpperCase());

console.log("app js test");
document.querySelector("#overlay").addEventListener('click',function(){
  this.style.display = "none";
});
phrase.addPhraseToDisplay();//will need to make 'array' of phrases
const buttonKeys = [...document.querySelectorAll(".key")]
buttonKeys.map(button=>button.addEventListener('click',function(e){
 // if(phrase.checkLetter(e.target.textContent.toUpperCase()) ){//evaluates letters
 //   phrase.showMatchedLetter(e.target.textContent.toUpperCase());//reveals letters that match
 //  }
 game.handleInteraction(phrase, e.target.textContent.toUpperCase());
}));

// phrase.showMatchedLetter();
