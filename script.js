let attempts = 0;
let randomNum = Math.floor(Math.random() * 100 + 1);

const hint = document.querySelector("#hint");
const attemptText = document.querySelector("#attempts");
const guess = document.querySelector("#guess");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  const userValue = Number(guess.value);
  attempts++;
  if (userValue === randomNum) {
    hint.innerHTML = "Congo!! You guessed it correct!";
  } else if (userValue < randomNum) {
    hint.innerHTML = "Too low choose a higher number";
  } else {
    hint.innerHTML = "Too high choose a lower number";
  }
  attemptText.innerHTML = `Attempts: ${attempts}`;
});
