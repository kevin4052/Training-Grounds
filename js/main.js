const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');


const game = new Game(ctx, canvas);
canvas.width = 800;
canvas.height = 600;



game.generateWorld(world.map);

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