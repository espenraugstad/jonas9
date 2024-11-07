const comb = 5433;
const siffer1 = document.getElementById("siffer1");
const siffer2 = document.getElementById("siffer2");
const siffer3 = document.getElementById("siffer3");
const siffer4 = document.getElementById("siffer4");

const arrowUp = document.getElementById("arrow_up");
const arrowDown = document.getElementById("arrow_down");

const guessButton = document.getElementById("guessButton");

guessButton.addEventListener("click", () => {
  let s1 = parseInt(siffer1.value);
  let s2 = parseInt(siffer2.value);
  let s3 = parseInt(siffer3.value);
  let s4 = parseInt(siffer4.value);

  // Missing a digit
  if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4)) {
    missingDigit.showModal();
    return;
  }

  // Combine the digits to one number
  let guessedNumber = 1000 * s1 + 100 * s2 + 10 * s3 + s4;
  console.log(guessedNumber);
  console.log("Guessed");

  if (guessedNumber > comb) {
    console.log("Du gjettet nok litt for høyt, gå lavere");
    arrowDown.classList.remove("hidden");
    arrowUp.classList.add("hidden");
  } else if (guessedNumber < comb) {
    console.log("Dette var litt lavt.");
    arrowDown.classList.add("hidden");
    arrowUp.classList.remove("hidden");
  } else {
    console.log("Great success!");
    arrowUp.classList.add("hidden");
    arrowDown.classList.add("hidden");
    correctCode.showModal();
    correctCodeText.innerText = comb;
  }
});

// Missing digit dialog
const missingDigit = document.getElementById("missingDigit");
const missingDigitOKButton = document.getElementById("missingDigitOKButton");

missingDigitOKButton.addEventListener("click", () => {
  missingDigit.close();
});

// Correct answer dialog
const correctCode = document.getElementById("correctCode");
const correctCodeText = document.getElementById("correctCodeText");
const correctCodeButton = document.getElementById("correctCodeButton");
correctCodeButton.addEventListener("click", () => {
  siffer1.value = "";
  siffer2.value = "";
  siffer3.value = "";
  siffer4.value = "";
  window.location.reload();
});
