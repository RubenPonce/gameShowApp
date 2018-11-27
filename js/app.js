let newGame;
let currentPhraseLetters;
const buttonKeys = [...document.querySelectorAll(".key")];
let startGameButton = document.querySelector("#btn__reset");
startGameButton.addEventListener("click", function(e) {
  resetDisplay(e.target);
  newGame = new Game(0, [], 0);
});


//targets the keyboard keys and adds event listeners to them when clicked.
buttonKeys.map(
  button =>
    (button.onclick = function(e) {
      currentPhraseLetters = [...document.querySelectorAll("#phrase ul li")];
      markButton(e.target, currentPhraseLetters);
    })
);
//adds keypress functionality to keys optional to being clicked
window.addEventListener("keypress", x => {
  let key = x.key;
  for (let i = 0; i < buttonKeys.length; i++) {
    currentPhraseLetters = [...document.querySelectorAll("#phrase ul li")];
    if (key.toLowerCase() === buttonKeys[i].textContent&&buttonKeys[i].className!="disabled") {
      markButton(buttonKeys[i], currentPhraseLetters);
    }
  }
});

//prevents phrase from being seen on mouse down
document.querySelector("#phrase").addEventListener('mousedown', (e)=> e.preventDefault());


//Disable Buttons
function disable(target) {
  target.setAttribute("disabled", "disabled");
}

// resets the display by resetting heart images, re-enabling buttons, and turns off overlay
function resetDisplay(event) {
  event.parentElement.style.display = "none";
  let li = [...document.querySelectorAll("#phrase ul li")];
  buttonKeys.forEach(function(button) {
    if (button.className === "disabled") {
      button.className = "key";
      button.classList.remove("disabled");
      button.disabled = false;
    }
    document
      .querySelectorAll(".tries img")
      .forEach(life => (life.src = "images/liveHeart.png"));
  });
  if (li.length > 0) {
    li.map(listItem => listItem.parentElement.removeChild(listItem));
  }
}//end function resetDisplay()

//marks the button to be disabled, then adds disabled class name to it
function markButton(button, currentPhrase) {
  newGame.handleInteraction(
    button.textContent.toUpperCase(),
    currentPhraseLetters
  );
  button.className = "disabled";
  disable(button);
}
