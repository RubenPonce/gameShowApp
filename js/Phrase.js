class Phrase{
  constructor() {
console.log("phrase works")
  }
  addPhraseToDisplay(phrase){//this value is a String
    let phraseUl = document.querySelector("#phrase ul");
    for (let i = 0; i < phrase.length; i++) {
      let li = document.createElement('li');
      phraseUl.appendChild(li);
      li.textContent = phrase[i];
      //add a string of letters for the phrase imputted into the value;
    }
  }
}
/*addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one list item for each letter. See the example_phrase_html.txt file for an example of what the render HTML for a phrase should look like when the game starts. When the player correctly guesses a letter, the empty box is replaced with a the matched letter (see the showMatchedLetter() method below. Make sure the phrase displayed on the screen doesn't include spaces.*/

//adds li tags to div with empty ul
