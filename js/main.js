const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

const playerTest = new Character(canvas, ctx, 0, 0, 50, 50);
const controller = new Controller();

let playerMove;
let keys = [];

function init() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playerTest.update(playerMove);
    playerTest.draw();

    window.requestAnimationFrame(init);
}

document.addEventListener('keydown', event => {
    event.preventDefault();
    keys[event.keyCode] = true;
    playerMove = event.keyCode;
});

document.addEventListener('keyup', event => {
    event.preventDefault();
    delete keys[event.keyCode];
    playerMove = 0;
});

init();