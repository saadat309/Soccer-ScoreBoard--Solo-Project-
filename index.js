let team1 = 0;
let team2 = 0;
let screen1 = document.getElementById("screen-1");
let screen2 = document.getElementById("screen-2");

function updateScreen1() {
  team1 += 1;
  screen1.textContent = team1;
}

function updateScreen2() {
  team2 += 1;
  screen2.textContent = team2;
}

let message = "The WINNER is ";
let barcelonaWins = "Barcelona 🥳✨🎉🎊";
let liverpoolWins = "Liverpool 🥳✨🎉🎊";
let draw = "It's a draw! 🤝";

let messageId = document.getElementById("message");
let winnerId = document.getElementById("winner");
let drawId = document.getElementById("draw");

function showResult() {
  if (team1 > team2) {
    drawId.textContent = "";
    messageId.textContent = message;
    winnerId.textContent = barcelonaWins;
  } else if (team2 > team1) {
    drawId.textContent = "";
    messageId.textContent = message;
    winnerId.textContent = liverpoolWins;
  } else {
    messageId.textContent = "";
    winnerId.textContent = "";
    drawId.textContent = draw;
  }
}

function reset() {
  team1 = 0;
  team2 = 0;
  screen1.textContent = team1;
  screen2.textContent = team2;
  drawId.textContent = "";
  messageId.textContent = "";
  winnerId.textContent = "";
}
