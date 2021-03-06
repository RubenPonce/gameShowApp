class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
  addPhraseToDisplay() {
    //this value is a String
    let phraseUl = document.querySelector("#phrase ul");
    for (let i = 0; i < this.phrase.length; i++) {
      //begin for-loop
      let li = document.createElement("li");
      phraseUl.appendChild(li);
      li.textContent = this.phrase[i].toUpperCase();
      if (li.textContent != " ") {
        li.className = "hide letter";
      } else {
        li.className = "hide space";
      }
    } //end for-loop
  } //end method addPhraseToDisplay()

//checks if a letter matches any of the list items in the phrase.
  static checkLetter(letter) {
    let buttonKeys = [...document.querySelectorAll(".key")];
    const keyText = buttonKeys.map(key=> key.textContent.toUpperCase());
    const li =[...document.querySelectorAll("#phrase ul li")];
    const liText = li.map(list => list.textContent);
    for (let i = 0; i < liText.length; i++) {
      if(liText[i]===letter){
        return true;
      }
    }



  } //end method checkLetter()

  //reveals the letter that was verified by checkLetter() in handleInteraction().
static  showMatchedLetter(letter){
    const li =[...document.querySelectorAll("#phrase ul li")];
    const liText = li.map(list => list.textContent);
    for (let i = 0; i < liText.length; i++) {
      if(liText[i]===letter){
        li[i].className = "show letter";
      }
    }

  }//end method showMatchedLetter()

} //end Phrase()
