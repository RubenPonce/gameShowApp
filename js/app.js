const phrase = new Phrase("test phrase".toUpperCase());
console.log("app js test");
document.querySelector("#overlay").addEventListener('click',function(){
  this.style.display = "none";
})
phrase.addPhraseToDisplay();//will need to make 'array' of phrases
const buttonKeys = [...document.querySelectorAll(".key")]
buttonKeys.map(button=>button.addEventListener('click',function(e){
 if(phrase.checkLetter(e.target.textContent.toUpperCase()) ){
   phrase.showMatchedLetter(e.target.textContent.toUpperCase());
  }
}));

const newGame = new Game(0, 2);
newGame.getRandomPhrase();

// phrase.showMatchedLetter();
