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
