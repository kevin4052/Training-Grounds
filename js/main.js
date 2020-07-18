const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');
ctx.font = "100px Do Hyeon";

const world = new World();
const game = new Game(ctx, canvas, world);
let gameStart = false;

//Game over sprite animation
const gameOverImg = new Image();
gameOverImg.src = "./images/mmx1-GameOver.png";
const gameOverSpriteFrames = {
    'value': [[0, 0], [1, 0]],
    'x': 0, 'y': 0, 
    'w': 354, 'h':182,
}
gameOverSprite = new Animation(gameOverSpriteFrames, 30);
//End game sprite animation
const gameEndImg1 = new Image();
const gameEndImg2 = new Image();
gameEndImg1.src = "./images/mmx1-GameEnd_1.png";
gameEndImg2.src = "./images/mmx1-GameEnd_2.png";
const gameEndSpriteFrames = {"value":[[gameEndImg1], [gameEndImg2]]};

canvas.width = world.columns * world.tileSize;
canvas.height = world.rows * world.tileSize;

const gameAudio = new Audio("./sounds/11 Dr. Wily's Castle.mp3");
gameAudio.volume = 0.1;
gameAudio.loop = true;

let requestId;

function introScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "100px Do Hyeon";
    ctx.fillText("Welcome to the Training Grounds", canvas.width * 0.25, canvas.height * 0.15);
    ctx.fillText("Here you will help Mega Man get ready for his next mission", canvas.width * 0.07, canvas.height * 0.25);
    ctx.fillText("Use the arrow keys to move around", canvas.width * 0.235, canvas.height * 0.45);
    ctx.fillText("and the space bar to shoot", canvas.width * 0.3, canvas.height * 0.55);
    ctx.fillText("CLICK TO START", canvas.width * 0.375, canvas.height * 0.8);

    document.addEventListener('click', () => {
        if (!gameStart){
            gameStart = true;
            gameAudio.play();
            gameLoop();
        }
    })
}

function gameLoop() {
    game.init();
    if (game.gameOver){
        window.cancelAnimationFrame(requestId);
        gameOver();
        return;
    }
    if (game.end){
        window.cancelAnimationFrame(requestId);
        end();
        return;
    }
    requestId = window.requestAnimationFrame(gameLoop);    
}

function gameOver(){
    gameStart = false;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(gameOverImg, 0 + gameOverSprite.frame[0] * gameOverSprite.sprite.w, 0 + gameOverSprite.frame[1] * gameOverSprite.sprite.h, 353, 160, (canvas.width - 1400) / 2, (canvas.height - 700) / 2, 1400, 700);
    //restart game
    document.addEventListener('click', () => {
        window.location.reload(true);
    })
}

function end(){
    gameStart = false;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(gameEndImg1, 0, 0, 353, 160, (canvas.width - 1400) / 2, (canvas.height - 700) / 2, 1400, 700);
    //restart game
    document.addEventListener('click', () => {
        window.location.reload(true);
    })
}

document.addEventListener('keydown', event => {
    event.preventDefault();
    game.controller.keyDown(event);
});

document.addEventListener('keyup', event => {
    event.preventDefault();
    game.controller.keyUp(event);
});

introScreen();
