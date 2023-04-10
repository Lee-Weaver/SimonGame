let yellow = document.querySelector(".yellow");
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let playButton = document.querySelector(".play-button");
let currentScore = document.querySelector(".current-score");
let highScore = document.querySelector(".high-score");

let level = 0;
const answer = [1,2,3,4];
playAnswer();

function lightTile(button) {
    button.classList.add("light");
    setTimeout(()=> {
        button.classList.remove("light");
    }, 300);
}
function playAnswer() {
    answer.forEach((num, index) => { setTimeout(()=>{
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
