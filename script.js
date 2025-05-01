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
  characters: [
   "Spider Man",
   "Iron Man",
   "Captain America",
   "Thor",
   "Hulk",
   "Black Panther",
   "Doctor Strange",
   "Wolverine",
   "Deadpool",
   "Wolverine",
   "Ant Man",
   "Daredevil",
   "Superman",
   "Wonder Woman",
   "The Flash",
   "Green Lantern",
   "Aquaman",
   "Homelander",
   "Nightwing",
   "Robin",
   "Invincible",
   "Joker",
   "Scarecrow",
   "Green Goblin",
   "Darkseid",
   "Lex Luthor",
   "Harley Quinn",
   "Bane",
   "Riddler",
   "Two Face",
   "Deathstroke",
   "Thanos",
   "Loki",
   "Doctor Doom",
   "Magneto",
   "Venom",
   "Kingpin",
   "Red Skull",
   "Ultron",
   "Kang",
   "Ozymandias",
   "Omni Man",
  ],

  movies: [
   "Avengers",
   "The Dark Knight",
   "Mad Max",
   "Inception",
   "Gladiator",
   "John Wick",
   "The Matrix",
   "Top Gun",
   "Star Wars",
   "Lord of the Rings",
   "Avatar",
   "Interstellar",
   "Dune",
   "Jurassic Park",
   "Forrest Gump",
   "Shawkshank Redemption",
   "Fight Club",
   "The Godfather",
   "The Social Network",
   "Superbad",
   "Step Brothers",
   "The Hangover",
   "Anchorman",
   "School of Rock",
   "Toy Story",
   "Lion King",
   "Finding Nemo",
   "Shrek",
   "Get Out",
   "The Shining",
   "A Quiet Place",
   "Hereditary",
   "Scream",
   "Shutter Island",
   "Donnie Darko",
   "The Prestige",
   "Gone Girl",
   "Seven",
   "Knives Out",
   "Sicario",
   "Titanic",
   "The Notebook",
   "La La Land",
   "Zootopia",
   "Inside Out",
   "The Incredibles",
   "Pulp Ficiton",
   "Kill Bill",
   "Goodfellas",
   "Reservoir Dogs",
   "Jackie Brown",
   "Inglorious Basterds",
   "Django Unchained",
   "Memento",
   "The Prestige",
   "Tenet",
   "Blade Runner",
   "The Terminator",
   "Alien",
   "Predator",
   "Arrival",
   "Prisoners",
   "Ex Machina",
   "Minority Report",
   "The Sixth Sense",
   "Cape Fear",
   "Enemy",
   "Nightcrawler",
  ],
  
  television: [
    "Breaking Bad",
    "The Sopranos",
    "The Wire",
    "Game of Thrones",
    "Mad Men",
    "Better Call Saul",
    "Succession",
    "The Boys",
    "The Handmaids Tail",
    "The Crown",
    "Last of Us",
    "Modern Family",
    "The Office",
    "Parks and Rec",
    "New Girl",
    "Impractical Jokers",
    "Survivors",
    "The Bachelor",
    "Love on the Spectrum",
    "Love is Blind",
    "Severance",
    "Criminal Minds",
    "Vanderpump Rules",
    "American Idol",
    "The Voice",
    "White Lotus",
    "Black Mirror",
    "Westworld",
    "Stranger Things",
    "Lost",
    "Sherlock",
    "True Detective",
    "Mindhunter",
    "Dexter",
    "Narcos",
    "Ozark",
    "South Park",
    "The Simpsons",
    "Rick and Morty",
    "Family Guy",
    "Futurama",
    "Gravity Falls",
    "Top Chef",
    "Hells Kitchen",
    "Deal or No Deal",
    "Price is Right",
    "Wheel of Fortune",
    "Suits",
    "Real Housewives",
    "Below Deck",
    "Tiger King",
    "Love Island",
  ],

  celebrities: [
    "Joe Rogan",
    "Zendaya",
    "Timothee Chalamet",
    "Florence Pugh",
    "Channing Tatum",
    "Leonardo Dicaprio",
    "Pedro Pascal",
    "Ryan Gosling",
    "Jenna Ortega",
    "Austin Butler",
    "Tom Holland",
    "Justin Bieber",
    "Kendrick Lamar",
    "Drake Pedophile",
    "Olivia Rodrigo",
    "Billie Eilish",
    "Bad Bunny",
    "Doja Cat",
    "Harry Styles",
    "The Weeknd",
    "Mr Beast",
    "Kai Cenat",
    "Kim Kardashian",
    "Kendall Jenner",
    "Selena Gomez",
    "Rihanna",
    "Taylor Swift",
    "Justin Timberlake",
    "Prince",
    "Lebron James",
    "Lionel Messi",
    "Patrick Mahomes",
    "Steph Curry",
    "Conor McGregor",
    "Caitlin Clark",
    "Travis Hunter",
    "Sydney Sweeney",
    "Brad Pitt",
    "Jeff Epstein",
    "Diddy",
    "Robert Pattinson",
    "The Rock",
    "Dua Lipa",
    "Ariana Grande",
    "Post Malone",
    "Lil Nas X",
    "Tupac",
    "Lana Del Rey",
    "Kanye West",
    "Adele",
    "Will Ferrell",
    "Matthew McConaughey",
    "Blake Lively",
    "Candace Owens",
    "Dave Chappelle",
    "Bill Burr",
    "Chris Evans",
    "Chris Hemsworth",
    "Zac Efron",
    "Tom Cruise",
    "Morgan Freeman",
    "Al Pacino",
    "Robert De Niro",
  ],

  slang: [
    "Bet",
    "No Cap",
    "On God",
    "Flex",
    "Simp",
    "Alpha",
    "Beta",
    "Drip",
    "Sus",
    "GOAT",
    "Yeet",
    "Woke",
    "Nice Try Diddy",
    "Ligma",
    "Gyatt",
    "Skibidi",
    "Aura",
    "Rizz",
    "Your Mom",
    "PDF File",
    "Brainrot",
    "Ragebait",
    "Slay",
    "Rizzler",
    "Facts",
    "Vibe Check",
    "Karen",
    "Lowkey",
    "Highkey",
    "Clout",
    "Shook",
    "Finesse",
    "Deadass",
    "Catch Hands",
    "Squabble",
    "Big Mood",
    "Big Dick Energy",
    "Savage",
    "Serving Cunt",
    "Hypebeast",
    "Slaps",
    "Its giving",
    "Thot",
    "Delulu",
    "Based",
    "NPC",
    "Skrrrt",
    "Touch Grass",
    "Youre not that guy pal",
    "Goblin Mode",
    "Chronically Online",
    "Fan Behavior",
    "Real One",
    "Situationship",
    "Lore",
    "Villain Arc",
    "Mid",
    "Pipedown",
    "Slimthick",
    "Thicc",
    "Butterface",
    "Bussin",
    "Youre done pal",
    "Hot Boy Summer",
    "Hot Girl Summer",
    "Soft Launch",
    "Ick",
    "Baddie",
    "Ghosting",
    "Side Piece",
    "Bae",
    "Cuffing Season",
    "Gaslighting",
    "Sigma",
    "Looks Like a Snack",
    "Thirsty",
    "Daddy",
    "MILF",
    "DILF",
    "Daddy",
    "Mewing",
    "Cringe",
    "Glow Up",
    "City Boy",
    "Fuckboi",
    "Dub",
    "Douche",
    "Mansplain",
    "Pushing P",
    "Secure The Bag",
    "Trill",
    "Stand on Business",
    "Slime",
    "Turn Up",
    "Shawty",
    "Netflix and Chill",
    "Spill the Tea",
    "Boujee",
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
