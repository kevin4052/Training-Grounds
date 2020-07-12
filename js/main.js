const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

const world = new World();
const game = new Game(ctx, canvas, world);

 canvas.width = 40 * world.tileSize;
 canvas.height = 22 * world.tileSize;


function gameLoop() {
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

document.addEventListener('keypress', event => {
    event.preventDefault();
    game.controller.keyPress(event);
});

gameLoop();