let canvas = document.querySelector(".canvas");
let isMouseDown, isRainbow = false;
document.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);

document.querySelector(".inner-slider")
.addEventListener("input", (e) => {
  numberOfGrids = (e.target.value);
  displayCanvas();
});

function getRandomColor() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`;
}



let numberOfGrids = 16;
let colorPicker = document.querySelector("#color-picker");


let userColor = document.getElementById("user-color");
userColor.addEventListener("click", () => {
  if (userColor.checked === true) {
    isRainbow = false;
    color = colorPicker.value;
    colorPicker.addEventListener("input", (event) => {
      color = event.target.value;
    }, false);
    colorPicker.addEventListener("change", (event) => {
      color = event.target.value;
    }, false);
  }
});

let random = document.getElementById("random");
random.addEventListener("click", () => {
  if (random.checked === true) {
    isRainbow = false;
    color = getRandomColor();
  }
});


let rainbow = document.getElementById("rainbow");
rainbow.addEventListener("click", () => {
  if (rainbow.checked === true) {
    console.log();
    isRainbow = true;
  }
})


eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
  if (eraser.checked === true) {
    isRainbow = false
    color = "#FEFEFE";
  }
});



let clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", displayCanvas)

function displayCanvas() {
  canvas.textContent = "";
  for (let i = 0; i < numberOfGrids; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    canvas.appendChild(row);
    for (let j = 0; j < numberOfGrids; j++) {
      let box = document.createElement("div");
      box.classList.add("box");
      row.appendChild(box);
      box.addEventListener("mouseover", () => {
        if (isRainbow) {
          color = getRandomColor();
        }
        if (isMouseDown) {
          box.style.backgroundColor = color;
        }
      });
      box.addEventListener("mousedown", () => {
        if (isRainbow) {
          console.log(getRandomColor(), isRainbow);
          box.style.backgroundColor = getRandomColor();
        }
        else
          box.style.backgroundColor = color;
      });
    }
  }
}

displayCanvas();