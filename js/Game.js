class Game {
  constructor(missed, phrases, winCounter) {
    this.missed = missed;
    this.phrases = phrases;
    this.winCounter = winCounter;
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

  handleInteraction(location, letter, currentPhrase) {
    if (location.checkLetter(letter)) {
      //evaluates letters
      location.showMatchedLetter(letter); //reveals letters that match
      this.checkForWin(currentPhrase, this.winCounter);
    } else {
      this.removeLife(this.missed);
      this.missed += 1;
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
  checkForWin(listLetter, winCounter) {
  // while the win counter is not equal to the phrase length
  console.log(listLetter);
  const noSpaces = listLetter.filter(letter=> letter.textContent != " ");
  noSpaces.forEach(function(letter){
    if(letter.className ==="show letter"){
          winCounter+=1;
    } else {
      console.log("this wont do anything");
    }
  });
  if(winCounter ===noSpaces.length){
    console.log("you WIN!!!");
    document.querySelector("h2[class = 'title']").textContent = "Congratulations!";
    document.querySelector("#overlay").style.display = "flex";
    document.querySelector("#overlay").className = "win";
  }

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
