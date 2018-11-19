const phrase = new Phrase("test phrase".toUpperCase());
console.log("app js test");
document.querySelector("#overlay").style.display = "none";
phrase.addPhraseToDisplay();//will need to make 'array' of phrases
if( phrase.checkLetter() ){
  console.log("this is working");
}
phrase.showMatchedLetter();
