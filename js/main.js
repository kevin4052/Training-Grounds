const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

const world = new World();
const game = new Game(ctx, canvas, world);

canvas.width = world.columns * world.tileSize;
canvas.height = world.rows * world.tileSize;

let requestId = 0;

ctx.save();
function gameLoop() {
    game.init();
    if (game.gameOver){
        window.cancelAnimationFrame(requestId);
        end();
        return;
    }
    requestId = window.requestAnimationFrame(gameLoop);
}

function end(){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '500px Do Hyeon'
    ctx.fillStyle = 'white'
    ctx.fillText('Game Over', (canvas.width / 2) - 1150, (canvas.height / 2) + 150);

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

gameLoop();
