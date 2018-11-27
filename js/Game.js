class Game {
  constructor(missed, phrases, winCounter) {
    this.missed = missed;
    this.phrases = phrases;
    this.winCounter = winCounter;
    this.startGame();
  }
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
    console.log(this.phrases[random]);
    new Phrase(this.phrases[random]).addPhraseToDisplay();
  } //end method getRandomPhrase()

  handleInteraction(letter, currentPhrase) {
    if (Phrase.checkLetter(letter)) {
      //evaluates letters
      Phrase.showMatchedLetter(letter); //reveals letters that match
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
  checkForWin(currentPhrase, winCounter) {
  // while the win counter is not equal to the phrase length
  console.log(currentPhrase);
  const noSpaces = currentPhrase.filter(letter=> letter.textContent != " ");
  noSpaces.forEach(function(letter){
    console.log( winCounter)
    if(letter.className ==="show letter"){
           winCounter+=1;
    } else {
      console.log("this wont do anything");
    }
  });
  if(winCounter ===noSpaces.length){
    console.log("you WIN!!!");
    document.querySelector("#overlay p").innerHTML = "You WIN!";
    document.querySelector("#btn__reset").textContent = "Play again?";


    document.querySelector("h2[class = 'title']").textContent = "Congratulations!";
    document.querySelector("#overlay").style.display = "flex";
    document.querySelector("#overlay").className = "win";
  }

  } //end method checkForWin()
  gameOver() {
    //call when all hearts are lost
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
    //calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
     this.getRandomPhrase();
  } //end method startGame()
} //end class Game
