let gameStarted = false;
let level = 0;
const text = document.querySelector("h3");
const allBoxes = document.querySelectorAll(".box");

let gameNum = ['one', 'two', 'three', 'four'];

let gameSq = [];
let userSq = [];



document.addEventListener("keypress", () => {
  if(gameStarted === false) {
    console.log("game started");
    gameStarted = true;

    randomBox();
  }
});

let boxFlush = (box) => {
  box.classList.add("flash");
  setTimeout(() => {
    box.classList.remove("flash");
  }, 500);
}

let checkAns = (idx) => {
  if(gameSq[idx] == userSq[idx]) {
    if(userSq.length == gameSq.length) {
      setTimeout(randomBox, 1000);
    }
  } else {
    text.innerHTML = `<span style="color: red;"><b>Game Over!</b></span> <span style="color: blue;">Your Score is <b>${level}</b></span> <br> Press any key to start the game`

    let body = document.querySelector("body");
    body.classList.add("red");
    setTimeout(() => {
      body.classList.remove("red");
    }, 200);

    reset();
  }
}

for(let box of allBoxes) {
  box.addEventListener("click", () => {
    let userPressed = box.getAttribute('id');
    userSq.push(userPressed);
    console.log("user sq = ", userSq);
    boxFlush(box);
    checkAns(userSq.length - 1);
  });
}


let randomBox = () => {
  userSq = [];
  level++;
  text.innerText = `Level ${level}`;
  let random = Math.floor(Math.random() * 4);
  let ranIdx = gameNum[random];
  let ranBox = document.querySelector(`#${ranIdx}`);
  gameSq.push(ranIdx);
  console.log("game sq = ", gameSq);

  boxFlush(ranBox);
}

let reset = () => {
  level = 0;
  userSq = [];
  gameSq = [];
  gameStarted = false;
}
