const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const game = new Game(ctx, canvas);

game.generateWorld();

let loop = setInterval(function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.init();
    // window.requestAnimationFrame(gameLoop);
}, 1000/30)

document.addEventListener('keydown', event => {
    event.preventDefault();
    game.player.keyDown(event);
});

document.addEventListener('keyup', event => {
    event.preventDefault();
    game.player.keyUp(event);
});

gameLoop();