class Game{
  constructor(missed, phrases){
this.missed = missed;
this.phrases = [];
  }
  getRandomPhrase(){
    const phrases = ["test phrase",
    "win condition",
     "stuff"];
     var random = Math.random() * phrases.length;
     console.log(phrases[random]);
     return phrases[random];


  }//end method getRandomPhrase()
  handleInteraction(){



  }//end method handleInteraction()
  removeLife(){//call when checkLetter returns false

  }//end method removeLife()
  checkForWin(){//call when all letters have been revealed

  }//end method checkForWin()
  gameOver(){//call when all hearts are lost

  }//end method gameOver()
  startGame(){//calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
  }//end method startGame()

}//end class Game
