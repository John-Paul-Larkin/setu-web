let character = document.getElementById("character");
let cartoonSpud = document.getElementById("cartoon-spud");
let packet = document.getElementById("packet");
let packetGrid = document.getElementById("packet-grid");



let score = 0;
let scoreSpan = document.getElementById("scoreSpan");

function move(direction) {
  let style = window.getComputedStyle(character);

  let oldPosition = parseInt(style.top, 10); // Extracts the numeric part and ignores 'px'

  if (direction === "up" && oldPosition > 0) {
    character.style.top = oldPosition - 10 + "px";
  } else if (direction === "down" && oldPosition < 150) {
    character.style.top = oldPosition + 10 + "px";
  }
}

let checkDead = setInterval(function () {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let characterBottom = characterTop + 50;

  let cartoonSpudLeft = parseInt(window.getComputedStyle(cartoonSpud).getPropertyValue("left"));

  let cartoonSpudTop = parseInt(window.getComputedStyle(cartoonSpud).getPropertyValue("top")) + 50;
  let cartoonSpudBottom = cartoonSpudTop + 20;

  if (cartoonSpudLeft < 20 && cartoonSpudLeft > -20) {
    if (
      (cartoonSpudTop >= characterTop && cartoonSpudBottom <= characterBottom) ||
      (cartoonSpudBottom >= characterTop && cartoonSpudBottom <= characterTop)
    ) {
      score += 1;

      let newDiv = document.createElement('div');  // Create a new div element
      newDiv.innerHTML = '<img id="packet" src="./images/packet.png" />'
      packetGrid.appendChild(newDiv);  // Append the new div to the container

      let randomSpot = Math.random() * 180 - 50;
      cartoonSpud.style.top = `${randomSpot}px`;
      cartoonSpud.style.left = "500px";

      packet.classList.add("animate");

      setTimeout(function () {
        packet.classList.remove("animate");
      }, 500);
    }

    scoreSpan.innerText = score;
  }
}, 10);

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
