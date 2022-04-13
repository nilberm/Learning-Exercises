const form = document.querySelector("form");
const hints = document.querySelector("#hints");

const roundNumber = rand();
form.addEventListener("submit", (e) => {
  const guess = document.querySelector("#number").value;
  e.preventDefault();
  giveHint(roundNumber, guess);
});

function giveHint(realNumber, userGuess) {
  if (userGuess == realNumber) {
    changeText("You Won! Congratulation");
    hints.style.background = "green";
  } else if (userGuess > realNumber) {
    changeText("Try a smaller number");
  } else if (userGuess < realNumber) {
    changeText("Try a bigger number");
  }
}

function rand(max, min) {
  max = 11;
  min = 1;
  return Math.floor(Math.random() * (max - min) + min);
}

function changeText(value) {
  hints.innerHTML = value;
}
