//Initial References

const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

//Options values for buttons
let options = {
  Landmarks: [
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

  Activities: [
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

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select a Category</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
  

};

//Block all the Buttons
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
    
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled = true;
  });
  newGameContainer.classList.remove("hide");
};

//Word Generator
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
  //If optionValur matches the button innerText then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  //initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  //choose random word
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  //replace every letter with span containing dash
  let displayItem = chosenWord.split('').map(char => {
    if (char === ' ') {
      return '<span class="dashes space"> </span>'; // If it's a space, return a space without the dash
    }
    return '<span class="dashes">_</span>'; // Otherwise, return an underscore
  }).join('');

  //Display each element as span
  userInputSection.innerHTML = displayItem;
};

//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
  winCount = 0;
  count = 0;

  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "lightblue";
      button.style.transform = "scale(1.5)";
    });

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = ""
      button.style.transform = "scale(1)";
    });
    //character button click
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clicked value replace the matched dash with letter else draw on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          if (char === button.innerText) {
            //replace dash with letter
            dashes[index].innerText = char;
            //increment counter
            winCount += 1;
            //if winCount equals the total number of letters (including spaces)
            if (winCount == chosenWord.replace(/ /g, "").length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              document.querySelector(".new-game-popup").style.backgroundImage = "url(images/WinScreen1.0.webp)";
              document.querySelector("body").style.backgroundImage = "url(images/WinBackgroundScreen2.jpeg)";
              //block all buttons
              blocker();
              
            }
          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          document.querySelector(".new-game-popup").style.backgroundImage = "url(images/LoseScreen4.jpeg)";
          document.querySelector("body").style.backgroundImage = "url(images/LoseBackgroundScreen3.jpeg)";
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
};

//Canvas
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  //For drawing lines
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

  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 80, 130);
    //left line
    drawLine(40, 10, 40, 131);
    //top line
    drawLine(39, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
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

//Event Listeners to highlight buttons
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



//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;
newGameButton.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('images/map.webp')";
  initializer();
});
