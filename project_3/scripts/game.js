// Retrieve HTML elements by their IDs to interact with them in the game.
const character = document.getElementById("character");
const cartoonSpud = document.getElementById("cartoon-spud");
const packet = document.getElementById("packet");
const packetGrid = document.getElementById("packet-grid");
const gameStarter = document.getElementById("game-starter");
const scoreSpan = document.getElementById("scoreSpan");

// Initialise the score
let score = 0;

// Function to move the character up or down based on keyboard up or down arrows
function move(direction) {
  // Get current style of the character to determine its current position.
  const characterStyle = window.getComputedStyle(character);
  // Parse the 'top' style property to get the current vertical position as a number.
  // Radix 10 extracts the numeric part of string and ignores 'px'
  const oldPosition = parseInt(characterStyle.top, 10);

  // Move the character up or down by 10 pixels, depending on the direction
  // within game boundaries. ie between 0 and 150 pixels
  if (direction === "up" && oldPosition > 0) {
    character.style.top = oldPosition - 10 + "px";
  } else if (direction === "down" && oldPosition < 150) {
    character.style.top = oldPosition + 10 + "px";
  }
}

// Set an interval to continuously check for collisions between the character and the cartoonSpud.
let checkDidTaytoCatchTheSpud = setInterval(function () {
  // Determine the top and bottom position of the character and cartoonSpud.
  const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  const characterBottom = characterTop + 50;
  const cartoonSpudLeft = parseInt(window.getComputedStyle(cartoonSpud).getPropertyValue("left"));
  const cartoonSpudTop = parseInt(window.getComputedStyle(cartoonSpud).getPropertyValue("top")) + 50;
  const cartoonSpudBottom = cartoonSpudTop + 20;

  // Check for collision based on proximity and update score and cartoonSpud position if a collision occurs.
  if (cartoonSpudLeft < 20 && cartoonSpudLeft > -20) {
    if (
      (cartoonSpudTop >= characterTop && cartoonSpudBottom <= characterBottom) ||
      (cartoonSpudBottom >= characterTop && cartoonSpudBottom <= characterTop)
    ) {
      score += 1;

      // create a new div containing an image of a tayto
      const newDiv = document.createElement("div");
      newDiv.innerHTML = '<img id="packet" src="./images/packet.png" />';
      // for every score a new packet is added
      packetGrid.appendChild(newDiv);

      // choose a random spot to start the cartoonSpud animation
      const randomSpot = Math.random() * 180 - 50;
      cartoonSpud.style.top = `${randomSpot}px`;
      cartoonSpud.style.left = "500px";

      // add the animate class which shakes the packet when we score
      // set timer to remove animate afeter .5seconds
      packet.classList.add("animate");
      setTimeout(function () {
        packet.classList.remove("animate");
      }, 500);
    }

    // update the DOM with the new score
    scoreSpan.innerText = score;
  }
}, 10);

// Handle arrow key presses for character movement.
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    move("up");
  }
  if (event.key === "ArrowDown") {
    event.preventDefault();
    move("down");
  }
});

// Adjust the game speed based on player selection from a dropdown.
function changeGameSpeed() {
  let selectedSpeed = document.getElementById("game-speed");
  selectedSpeed = +selectedSpeed.value * 0.6;
  cartoonSpud.style.animationDuration = `${selectedSpeed}s`;
}

// Begin the game by hiding the start message and setting the game's speed.
function startGame() {
  gameStarter.style.display = "none";
  let selectedSpeed = document.getElementById("game-speed");
  selectedSpeed = +selectedSpeed.value * 0.6;
  cartoonSpud.style.animationDuration = `${selectedSpeed}s`;
}
