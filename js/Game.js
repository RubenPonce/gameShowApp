class Game{
  constructor(missed, phrase){
this.missed = 0;
this.phrase = phrase;
  }
  getRandomPhrase(){
    const phrases = ["Test Phrase",
    "Object Oriented",
     "JavaScript",
    "Version Control"];
     var random = Math.floor(Math.random() * phrases.length);
     console.log(phrases[random]);
     return phrases[random];


  }//end method getRandomPhrase()

  handleInteraction(location,letter){

    if(location.checkLetter(letter) ){//evaluates letters
      location.showMatchedLetter(letter);//reveals letters that match
    } else{
      this.removeLife(this.missed);
      this.missed+=1;
      console.log("your life has been removed!");
    }


  }//end method handleInteraction()
  removeLife(heartCounter){//call when checkLetter returns false
  let liveHeart =document.querySelectorAll(".tries img");

  liveHeart[heartCounter].src = "images/lostHeart.png";



  }//end method removeLife()
  checkForWin(){//call when all letters have been revealed

  }//end method checkForWin()
  gameOver(){//call when all hearts are lost

  }//end method gameOver()
  startGame(){//calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
  return this.getRandomPhrase()
  }//end method startGame()

}//end class Game
