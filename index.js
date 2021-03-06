const FIELD = document.querySelector(".field");
const STATUS = document.querySelector(".field__status");
const CELLS = document.querySelectorAll(".field__cell");
const modal = document.querySelector(".modal__form");
const bg = document.querySelector(".modal__bg");
const winnerStatus = document.querySelector(".winner__status");
const restartBtn = document.querySelector(".restart");
const steps = document.querySelector(".steps");

let stepCounter = 0;
let player = "O";
let stepX = 0;
let stepO = 0;

function makeGame(event) {
  if (
    event.target.style.backgroundImage !== 'url("./assets/png/cross.png")' &&
    event.target.style.backgroundImage !== 'url("./assets/png/circle.png")'
  ) {
    if (player === "O") {
      player = "X";
      event.target.style.backgroundImage = 'url("./assets/png/cross.png")';
      stepX++;
      steps.innerHTML = `Steps: ${stepX}`;
      stepCounter++;
      STATUS.innerHTML = "O' turn";
      showWinner(player);
    } else if (player === "X") {
      player = "O";
      event.target.style.backgroundImage = 'url("./assets/png/circle.png")';
      stepO++;
      steps.innerHTML = `Steps: ${stepO}`;
      stepCounter++;
      STATUS.innerHTML = "X' turn";
      showWinner(player);
    }
    checkStatus();
    if (stepCounter === 9) {
      steps.innerHTML = "";
      STATUS.innerHTML = "";
      winnerStatus.innerHTML = "Draw";
      stepCounter = 0;
      setTimeout(showbg, 500);
      setTimeout(showModal, 2000);
    }
  }
}

const checkStatus = () => {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < win.length; i++) {
    if (
      CELLS[win[i][0]].style.backgroundImage ===
        'url("./assets/png/cross.png")' &&
      CELLS[win[i][1]].style.backgroundImage ===
        'url("./assets/png/cross.png")' &&
      CELLS[win[i][2]].style.backgroundImage === 'url("./assets/png/cross.png")'
    ) {
      STATUS.innerHTML = "";
      setTimeout(showbg, 500);
      setTimeout(showModal, 2000);
    } else if (
      CELLS[win[i][0]].style.backgroundImage ===
        'url("./assets/png/circle.png")' &&
      CELLS[win[i][1]].style.backgroundImage ===
        'url("./assets/png/circle.png")' &&
      CELLS[win[i][2]].style.backgroundImage ===
        'url("./assets/png/circle.png")'
    ) {
      STATUS.innerHTML = "";
      setTimeout(showbg, 500);
      setTimeout(showModal, 2000);
    }
  }
};

function showbg() {
  makeSound();
  FIELD.style.display = "none";
  bg.style.width = "800px";
  bg.style.height = "500px";
  bg.style.display = "block";
}
function showModal() {
  modal.style.display = "flex";
}

function showWinner(winner) {
  winnerStatus.innerHTML = `Winner: ${winner}`;
}
function closeModal() {
  // FIELD.style.display = "flex";
  // bg.style.width = "0";
  // bg.style.height = "0";
  // bg.style.display = "none";
  // modal.style.display = "none";
  // CELLS.forEach((cell) => (cell.style.backgroundImage = ""));
  // player = "O";
  location.reload();
}
function makeSound() {
  var audio = new Audio(); // ?????????????? ?????????? ?????????????? Audio
  audio.src = "./assets/sound/Naruto Sasuke Scream.mp3"; // ?????????????????? ???????? ?? ?????????? "??????????"
  audio.autoplay = true; // ?????????????????????????? ??????????????????
  audio.volume = 0.2;
}

CELLS.forEach((cell) => cell.addEventListener("click", makeGame));
restartBtn.addEventListener("click", closeModal);
