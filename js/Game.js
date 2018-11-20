class Game {
  constructor(missed, phrases) {
    this.missed = 0;
    this.phrases = [];
  }
  getRandomPhrase() {
    this.phrases.push(
      ...[
        "Test Phrase",
      "Object Oriented",
      "JavaScript",
      "Version Control",
    ]
    );
    var random = Math.floor(Math.random() * this.phrases.length);
    console.log(this.phrases[random]);
    return this.phrases[random];
  } //end method getRandomPhrase()

  handleInteraction(location, letter) {
    if (location.checkLetter(letter)) {
      //evaluates letters
      location.showMatchedLetter(letter); //reveals letters that match
      //checkForWin();
    } else {
      this.removeLife(this.missed);
      this.missed += 1;
      console.log("your life has been removed!");
      this.gameOver();
    }
  } //end method handleInteraction()

  removeLife(heartCounter) {
    //call when checkLetter returns false
    let liveHeart = document.querySelectorAll(".tries img");
    if (this.missed <= 4) {
      liveHeart[heartCounter].src = "images/lostHeart.png";
    }
  } //end method removeLife()
  checkForWin(phrase,winCounter) {
    
  } //end method checkForWin()
  gameOver() {
    //call when all hearts are lost
    if (this.missed === 5) {
      document.querySelector("h2[class = 'title']").textContent = "Game Over";
      document.querySelector("#overlay").style.display = "flex";
      document.querySelector("#overlay").className = "lose";
    }
  } //end method gameOver()
  startGame() {
    //calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
    return this.getRandomPhrase();
  } //end method startGame()
} //end class Game
