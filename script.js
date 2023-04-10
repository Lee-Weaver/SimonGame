let yellow = document.querySelector(".yellow");
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let playButton = document.querySelector(".play-button");
let currentScore = document.querySelector(".current-score");
let highScore = document.querySelector(".high-score");


let level = 0;
const answerArr = [1,2,3,4];
const playerArr = [];
playAnswer();


yellow.addEventListener("click", () => pushToArr(playerArr, 1));
blue.addEventListener("click", () => pushToArr(playerArr, 2));
red.addEventListener("click", () => pushToArr(playerArr, 4));
green.addEventListener("click", () => pushToArr(playerArr, 3));
playButton.addEventListener("click", () => {
    playButton.innerHTML = "Started";
    gameLoop();
})

function gameLoop() {

}

function pushToArr(arr, num) {
    arr.push(num);
    console.log(arr);
}
function playersGuess() {
    let arr = [];
    yellow.addEventListener("click", () => arr.push(1));
    blue.addEventListener("click", () => arr.push(2));
    red.addEventListener("click", () => arr.push(3));
    green.addEventListener("click", () => arr.push(4));

    if (arr.length > 5) {
        console.log(playerArr);
        return playerArr = arr;
    }
}
function lightTile(button) {
    button.classList.add("light");
    setTimeout(()=> {
        button.classList.remove("light");
    }, 300);
}
function playAnswer() {
    answerArr.forEach((num, index) => { setTimeout(()=>{
        switch(num) {
            case 1:
                lightTile(yellow);
                break;
            case 2:
                lightTile(blue);
                break;
            case 3:
                lightTile(green);
                break;
            case 4:
                lightTile(red);
                break;
        }
    },(index + 1) * 600)
    } )
}
function randomNums() {
    return Math.floor(Math.random()*4) + 1;
}
