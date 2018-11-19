const phrase = new Phrase("test phrase".toUpperCase());
console.log("app js test");
document.querySelector("#overlay").style.display = "none";
phrase.addPhraseToDisplay();//will need to make 'array' of phrases
const buttonKeys = [...document.querySelectorAll(".key")]
buttonKeys.map(button=>button.addEventListener('click',function(e){
 if(phrase.checkLetter(e.target.textContent.toUpperCase())){
   phrase.showMatchedLetter(e.target.textContent.toUpperCase());
  }
}));

// phrase.showMatchedLetter();
