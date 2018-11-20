class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
    this.game = new Game(0, phrase);
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

  checkLetter(letter) {
    //Checks if a letter matches the button pressed?
    //
    let buttonKeys = [...document.querySelectorAll(".key")];
    const keyText = buttonKeys.map(key=> key.textContent.toUpperCase());
    const li =[...document.querySelectorAll("#phrase ul li")];
    const liText = li.map(list => list.textContent);
    for (let i = 0; i < this.phrase.length; i++) {
      if(this.phrase[i]===letter){
        console.log("this is a correct choice");
        return true
      } else {
        console.log("this is a false choice");
      }
    }



  } //end method checkLetter()
  showMatchedLetter(letter){
    const li =[...document.querySelectorAll("#phrase ul li")];
    const liText = li.map(list => list.textContent);
    for (let i = 0; i < this.phrase.length; i++) {
      if(this.phrase[i]===letter){
        li[i].className = "show letter";
      }
    }

  }//end method showMatchedLetter()
} //end Phrase()
