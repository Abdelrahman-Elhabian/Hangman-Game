const letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let letterArea = document.querySelector(".letters");
lettersArray.forEach((element) => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(element);
  span.appendChild(theLetter);
  span.className = "letter-box";
  letterArea.appendChild(span);
});

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

let allKeys = Object.keys(words);

let type = document.querySelector(".category span");
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
type.innerHTML = randomPropName;
let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let theWord = randomPropValue[randomValueNumber];

let lettersAndSpace = Array.from(theWord);

lettersAndSpace.forEach((element) => {
  let span = document.createElement("span");
  if (element === " ") {
    // Add Class To The Span
    span.className = "with-space";
  }
  document.querySelector(".letters-guess").appendChild(span);
});
let guessSpans = document.querySelectorAll(".letters-guess span");
let tries = 0;
let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let clickedLetter = e.target.innerHTML.toLowerCase();
    let chosenWord = Array.from(theWord.toLowerCase());
    chosenWord.forEach((wordLetter, WordIndex) => {
      if (clickedLetter === wordLetter) {
        theStatus = true;
        guessSpans.forEach((span, index) => {
          if (WordIndex === index) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });
    if (theStatus !== true) {
      tries++;
      theDraw.classList.add(`wrong-${tries}`);
      if (tries === 8) {
        end();
        document.querySelector("#fail").play();
      }
    } else {
      document.querySelector("#success").play();
    }
  }
  let x = 0;
  guessSpans.forEach((element) => {
    if (element.innerHTML !== "") {
      x++;
    }
  });
  if (x === theWord.length) {
    passed();
  }
});

function end() {
  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(`Game Over, The Word Is ${theWord}`);

  // Append Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = "popup";

  // Append To The Body
  document.body.appendChild(div);
}
let div2 = document.createElement("div");
function passed() {
  let div = document.createElement("div");
  let divText = document.createTextNode(`Good Play!`);
  div.appendChild(divText);
  div.className = "passed";

  let divText2 = document.createTextNode(`Press "Enter" to play Again`);
  div2.appendChild(divText2);
  div2.className = "again";

  // Append To The Body
  document.body.appendChild(div);
  div.appendChild(document.createElement("br"));
  div.appendChild(div2);

}
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      location.reload(); // Reload the page directly
    }
  });
div2.onclick = function () {
  location.reload();
};
