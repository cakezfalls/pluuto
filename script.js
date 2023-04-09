const pluto = document.getElementById("pluto");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");

let playerScore = 0;
let gameIsActive = true;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
};

let counter = 0;
const setCounter = setInterval(() => {
    if(gameIsActive) {
        counter++;
        score.innerHTML = `${counter}`;
    }
}, 100)

document.addEventListener("keydown", function(event) {
    if( gameIsActive) jump()
});


function jump() {
    if (pluto.classList != "jump") {
        pluto.classList.add("jump") 
    }
    setTimeout(function() {
        pluto.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(function() {
    let plutoTop = parseInt(window.getComputedStyle(pluto).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && plutoTop >= 140){
        cactus.classList.remove('cactusAnumation');
        gameIsActive = false;
        document.getElementById('lose').style.display = 'block';
    }
     
}, 10)