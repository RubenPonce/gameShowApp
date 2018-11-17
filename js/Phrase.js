class Phrase {
  constructor(phrase) {
    // this.phrase = phrase
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
  const totalKeys = [...document.querySelectorAll(".keyrow button")];
  const li = [...document.querySelectorAll("#phrase ul li")];
  totalKeys.forEach(function(key) {
    key.addEventListener("click", function() {
      for (let i = 0; i < li.length; i++) {
        if (key.textContent === li[i].textContent) {
          li[i].className = "show letter";
        }
      }
    });
  });

  }
}//end Phrase
