const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

const playerTest = new Character(canvas, ctx, 0, 0, 50, 50);
const controller = new Controller();


function init() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playerTest.update();
    playerTest.draw();

    window.requestAnimationFrame(init);
}

document.addEventListener('keydown', event => {
    event.preventDefault();
    playerTest.keyDown(event);
});

document.addEventListener('keyup', event => {
    event.preventDefault();
    playerTest.keyUp(event);
});

init();