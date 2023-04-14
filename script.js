let yellow = document.querySelector(".yellow");
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let playButton = document.querySelector(".play-button");
let currentScore = document.querySelector(".current-score");
let highScore = document.querySelector(".high-score");

let score = 0;
const answerArr = [];
const playerArr = [];
let IsGameRunning = false;
gameLoop();


yellow.addEventListener("click", () => {
    pushToArr(playerArr, 1);
    checkLength();
});
blue.addEventListener("click", () => {
    pushToArr(playerArr, 2);
    checkLength();
});
red.addEventListener("click", () => {
    pushToArr(playerArr, 4);
    checkLength();
});
green.addEventListener("click", () => {
    pushToArr(playerArr, 3);
    checkLength();
});
playButton.addEventListener("click", () => {
    playButton.innerHTML = "Started";
    IsGameRunning = true;
    gameLoop();
})

function gameLoop() {
    if (IsGameRunning == true) {
        AddRandomToAnswer();
        playAnswer();
    }
}

function checkLength() {
    if (answerArr.length == playerArr.length) {
        checkAnswer();
    }
    }

function checkAnswer() {
    if (JSON.stringify(playerArr) == JSON.stringify(answerArr)) {
        score++;
        currentScore.textContent = score
        clearAnswer();
    }
    else {
        gameOver();
    }
}


function gameOver() {
    score = 0;
    currentScore.textContent = score;
    playerArr.length = 0;
    answerArr.length = 0;
    IsGameRunning = false;
    playButton.innerHTML = "Play";
}

function clearAnswer() {
    playerArr.length = 0;
}
function pushToArr(arr, num) {
    arr.push(num);
    console.log(arr);
    console.log(answerArr);
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

function AddRandomToAnswer() {
    let num = randomNums();
    answerArr.push(num);
}
