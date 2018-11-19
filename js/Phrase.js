class Phrase {
  constructor(phrase) {
    this.phrase = phrase
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

  checkLetter() {
    //Checks if a letter matches the button pressed?
    //
    let buttonKeys = [...document.querySelectorAll(".key")];
    const keyText = buttonKeys.map(key=> key.textContent.toUpperCase());
    const li =[...document.querySelectorAll("#phrase ul li")];
    const liText = li.map(list => list.textContent);
    const newArray = buttonKeys.filter(button => liText.includes(button.textContent.toUpperCase()));
    const falseArray = buttonKeys.filter(button => !liText.includes(button.textContent.toUpperCase()));
    console.log(newArray);
    newArray.forEach(button=> button.addEventListener('click', function (){
      console.log("true");
      return true;
    }));
    falseArray.forEach(button=> button.addEventListener('click', function (){
      console.log("false");
      return false;
    }));


  } //end method checkLetter()
  showMatchedLetter() {
  console.log(this.checkLetter());
  } //end method showMatchedLetter()
} //end Phrase()
