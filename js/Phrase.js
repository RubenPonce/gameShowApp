class Phrase {
  constructor() {
    console.log("phrase works");
  }
  addPhraseToDisplay(phrase) {
    //this value is a String
    let phraseUl = document.querySelector("#phrase ul");
    for (let i = 0; i < phrase.length; i++) {
      let li = document.createElement("li");
      phraseUl.appendChild(li);
      li.textContent = phrase[i];
      if (li.textContent != " ") {
        li.className = "hide letter";
      } else {
        li.className = "hide space";
      }
      //add a string of letters for the phrase imputted into the value;
    }
  }
  checkLetter(){
    //checks if User keyboard input is the same as phrase letter
    console.log("check Letter is working");
    let totalKeys = document.querySelectorAll(".keyrow button");
    let li = document.querySelectorAll("#phrase ul li");
    //first gather all keyboard inputs and put event listeners on them.
  }

}


//adds li tags to div with empty ul
