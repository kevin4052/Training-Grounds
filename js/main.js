const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

const world = new World();
const game = new Game(ctx, canvas, world);
canvas.width = world.columns * world.tileSize;
canvas.height = world.rows * world.tileSize;

// game.generateWorld();

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.init();
    window.requestAnimationFrame(gameLoop);
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