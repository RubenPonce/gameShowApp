addPhraseToDisplay(phrase) {
  //this value is a String
  let phraseUl = document.querySelector("#phrase ul");

    this.phrase.forEach(letter=> (){
      let li = document.createElement("li");
      phraseUl.appendChild(li);
      li.textContent = letter;
      if (li.textContent != " ") {
        li.className = "hide letter";
      } else {
        li.className = "hide space";
      }
      //add a string of letters for the phrase imputted into the value;
    });


}
