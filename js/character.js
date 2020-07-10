class Character {
    constructor(canvas, ctx, x, y, width, height) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.hp = 100;
        this.attack = 10;
        this.x = x;
        this.y = y;
        this.oldX;
        this.oldY;
        this.xVel = 0;
        this.yVel = 0;
        this.moveSpeed = 15;
        this.gravity = 2;
        this.friction = 0.75;
        this.jumping = true;
        this.onGround = false;
        this.moveRight = false;
        this.moveLeft = false;
        this.moveUp = false;
        this.playerSprite = new Image();
        this.playerSprite.src = './images/p1_spritesheet.png';
    }

    //get character edges
    getRight() {
        return this.x + this.width;
    }
    getLeft() {
        return this.x;
    }
    getTop() {
        return this.y;
    }
    getBottom() {
        return this.y + this.height;
    }

    //set character position
    setRight(position) {
        this.x = position - this.width;
    }
    setLeft(position) {
        this.x = position;
    }
    setTop(position) {
        this.y = position;
    }
    setBottom(position) {
        this.y = position - this.height;
    }


    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.drawImage(this.playerSprite, 67, 196, 66, 92, this.x, this.y, this.width, this.height);
    }
}