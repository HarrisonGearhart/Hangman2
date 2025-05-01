// Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

// Options values for buttons
let options = {
  landmarks: [
    "Roman Colosseum",
    "Grand Canyon",
    "Hollywood Sign",
    "Eiffel Tower",
    "Great Wall of China",
    "Machu Picchu",
    "Statue of Liberty",
    "Taj Mahal",
    "Niagara Falls",
    "Washington Monument",
    "Golden Gate Bridge",
    "Leaning Tower of Pisa",
    "Stonehenge",
    "Pyramid of Giza",
    "Christ the Redeemer",
    "Mount Rushmore",
    "Acropolis of Athens",
    "Mount Fuji",
    "Empire State Building",
    "Big Ben",
    "Sydney Opera House",
    "Times Square",
    "Louvre Museum",
  ],

  activities: [
    "Hiking",
    "Fishing",
    "Ziplining",
    "Swimming",
    "Backpacking",
    "Cycling",
    "Dancing",
    "Skiing",
    "Surfing",
    "Camping",
    "Sightseeing",
    "White Water Rafting",
    "Mountain Biking",
    "Bungee Jumping",
    "Rock Climbing",
    "Scuba Diving",
    "Safari Guide",
  ],
  
  countries: [
    "United States",
    "Egypt",
    "Spain",
    "Switzerland",
    "Japan",
    "Russia",
    "Botswana",
    "Kenya",
    "Brazil",
    "Argentina",
    "Afghanistan",
    "Indonesia",
    "Mexico",
    "Pakistan",
    "Ukraine",
    "Vietnam",
    "United Arab Emirates",
    "Greece",
    "Serbia",
    "Puerto Rico",
    "Uruguay",
    "Indonesia",
    "United Kingdom",
    "France",
    "Germany",
    "Thailand",
    "China",
    "Italy",
  ],
};

// Count
let winCount = 0;
let count = 0;

let chosenWord = "";

// Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select a Category</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

// Block all the Buttons
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });
  letterButtons.forEach((button) => {
    button.disabled = true;
  });
  newGameContainer.classList.remove("hide");
};

// Word Generator
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue.toLowerCase()) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  let displayItem = chosenWord.split('').map(char => {
    if (char === ' ') {
      return '<span class="dashes space"> </span>';
    }
    return '<span class="dashes">_</span>';
  }).join('');

  userInputSection.innerHTML = displayItem;
};

// Initial Function
const initializer = () => {
  winCount = 0;
  count = 0;

  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    button.innerText = String.fromCharCode(i);
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "lightblue";
      button.style.transform = "scale(1.5)";
    });

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "";
      button.style.transform = "scale(1)";
    });

    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");

      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          if (char === button.innerText) {
            dashes[index].innerText = char;
            winCount += 1;
            if (winCount == chosenWord.replace(/ /g, "").length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;

              // Just hide the options and letter buttons (no background change)
              optionsContainer.style.display = "none";
              letterContainer.style.display = "none";
              canvas.style.display = "none";
              userInputSection.innerHTML = "";
              blocker();
            }
          }
        });
      } else {
        count += 1;
        drawMan(count);
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;

          // Hide the options and letter buttons (no background change)
          optionsContainer.style.display = "none";
          letterContainer.style.display = "none";
          canvas.style.display = "none";
          userInputSection.innerHTML = "";
          blocker();
        }
      }
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  let { initialDrawing } = canvasCreator();
  initialDrawing();
};

// Canvas
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  const initialDrawing = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    drawLine(10, 130, 80, 130);
    drawLine(40, 10, 40, 131);
    drawLine(39, 10, 70, 10);
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

// Draw the man
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

// Event Listeners to highlight buttons
optionsContainer.addEventListener("mouseover", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.style.backgroundColor = "lightblue";
    event.target.style.transform = "scale(1.5)";
  }
});

optionsContainer.addEventListener("mouseout", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.style.backgroundColor = "";
    event.target.style.transform = "scale(1)";
  }
});

// New Game
newGameButton.addEventListener("click", () => {
  // Remove win and lose styles when starting a new game
  document.querySelector(".container").classList.remove("win", "lose");
  document.querySelector("body").classList.remove("win", "lose");

  optionsContainer.style.display = "block";
  letterContainer.style.display = "flex";
  canvas.style.display = "block";

  initializer();
});

// Start the game
initializer();
