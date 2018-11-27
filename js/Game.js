class Game {
  constructor(missed, phrases, winCounter) {
    this.missed = missed;
    this.phrases = phrases;
    this.winCounter = winCounter;
    this.startGame();
  }
  //gets a Random Phrase
  getRandomPhrase() {
    this.phrases.push(
      ...[
        "Technical Word Salad",
      "Object Oriented",
      "JavaScript",
      "Version Control",
      "KeyPress",
      "Boolean Logical Operators",
      "Array Literals",
      "Ternary Operator"
    ]
    );
    var random = Math.floor(Math.random() * this.phrases.length);
    new Phrase(this.phrases[random]).addPhraseToDisplay();
  } //end method getRandomPhrase()

//checks if letter is matched, then shows the matched letter
  handleInteraction(letter, currentPhrase) {
    if (Phrase.checkLetter(letter)) {
      Phrase.showMatchedLetter(letter); //reveals letters that match
      this.checkForWin(currentPhrase, this.winCounter);
    } else {
      this.removeLife(this.missed);
      this.missed += 1;
      this.gameOver();

    }
  } //end method handleInteraction()

  //removes a heart
  removeLife(heartCounter) {
    let liveHeart = document.querySelectorAll(".tries img");
    if (this.missed <= 4) {
      liveHeart[heartCounter].src = "images/lostHeart.png";
    }
  } //end method removeLife()

//displays You WIN overlay
  checkForWin(currentPhrase, winCounter) {
  const noSpaces = currentPhrase.filter(letter=> letter.textContent != " ");
  noSpaces.forEach(function(letter){
    if(letter.className ==="show letter"){
           winCounter+=1;
    }
  });
  if(winCounter ===noSpaces.length){
    document.querySelector("#overlay p").innerHTML = "You WIN!";
    document.querySelector("#btn__reset").textContent = "Play again?";


    document.querySelector("h2[class = 'title']").textContent = "Congratulations!";
    document.querySelector("#overlay").style.display = "flex";
    document.querySelector("#overlay").className = "win";
  }

  } //end method checkForWin()

//displays You LOST overlay
  gameOver() {
    //calls the Game Over display
    if (this.missed === 5) {
      //Message
      document.querySelector("#overlay p").innerHTML = "You LOST!";
      document.querySelector("#btn__reset").textContent = "Try again?";

      document.querySelector("h2[class = 'title']").textContent = "Game Over";
      document.querySelector("#overlay").style.display = "flex";
      document.querySelector("#overlay").className = "lose";
    }
  } //end method gameOver()

  startGame() {
     this.getRandomPhrase();
  } //end method startGame()

} //end class Game
