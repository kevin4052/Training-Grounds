const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

const world = new World();
const game = new Game(ctx, canvas, world);

//Game over sprite animation
const gameOverImg = new Image()
gameOverImg.src = "./images/mmx1-GameOver.png";
const gameOverSpriteFrames = {
    'value': [[0, 0], [1, 0]],
    'x': 0, 'y': 0, 
    'w': 354, 'h':182,
}
gameOverSprite = new Animation(gameOverSpriteFrames, 30);

//End game sprite animation
const gameEndImg1 = new Image()
const gameEndImg2 = new Image()
gameEndImg1.src = "./images/mmx1-GameEnd_1.png";
gameEndImg2.src = "./images/mmx1-GameEnd_2.png";
const gameEndSpriteFrames = {"value":[[gameEndImg1], [gameEndImg2]]};

canvas.width = world.columns * world.tileSize;
canvas.height = world.rows * world.tileSize;

// const gameAudio = new Audio('./sounds/01 Stage Select.mp3');
// gameAudio.volume = 0.2;
// gameAudio.loop = true;

let requestId = 0;

ctx.save();
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
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(gameOverImg, 0 + gameOverSprite.frame[0] * gameOverSprite.sprite.w, 0 + gameOverSprite.frame[1] * gameOverSprite.sprite.h, 353, 160, (canvas.width - 1400) / 2, (canvas.height - 700) / 2, 1400, 700);

    document.addEventListener('click', () => {
        window.location.reload(true);
    })
}

function end(){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(gameEndImg1, 0, 0, 353, 160, (canvas.width - 1400) / 2, (canvas.height - 700) / 2, 1400, 700);

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

// gameAudio.play();
gameLoop();
