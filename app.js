const displayResult = document.querySelector("#result");
const btnGetAPrediction = document.querySelector("#getPredictionButton"); // Selects the button element by its ID

const options = [
  "You will fall in love this afternoon.",
  "You will win a lottery.",
  "You will lose your phone. Check your left pocket.",
  "You will fall asleep on a couch.",
  "You will be taking a ring to Mordor.",
  "You will get your letter from Hogwarts.",
  "Elon Musk will buy TikTok.",
  "Your crush will be mad at you, or give you a kiss. I am just a program, I have no idea what will happen in the future.",
];

btnGetAPrediction.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  const prediction = options[randomIndex];
  displayResult.innerHTML = prediction;
});
