let boxes = document.querySelectorAll(".box");
let winmsg = document.querySelector("#msg");
let new_game_btn = document.querySelector("#new-btn");
let msg_container = document.querySelector(".msg-container");
let reset = document.querySelector(".reset");

let turnO = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "o";
      box.style.color = "green";
      turnO = false;
    } else {
      box.innerText = "x";
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const resetGame = () => {
  enableboxes();
  turnO = true;
  msg_container.classList.add("hide");
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const winnermsg = (winner) => {
  winmsg.innerText = `Congratulation, winner is ${winner}`;
  msg_container.classList.remove("hide");
  disableboxes();
};

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        winnermsg(pos1);
      }
    }
  }
};
new_game_btn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

box.setAttribute("data-value", currentPlayer);

winningBoxes.forEach((box) => {
  box.classList.add("winner-highlight");
});
