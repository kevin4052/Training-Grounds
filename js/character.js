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
        this.moveSpeed = 12;
        this.gravity = 1.5;
        this.friction = 0.75;
        this.jumping = true;
        this.onGround = false;
        this.moveRight = false;
        this.moveLeft = false;
        this.moveUp = false;
        this.playerSprite = new Image();
        // this.playerSprite.src = '../images/p1_walk.png';
        this.playerSprite.src = '../images/megaman_spriteSheet.png';
        this.spriteFrames = {
            'walk': {'value':[[0, 0], [1, 0], [2, 0]], 'x': 65, 'y': 0, 'w': 22, 'h':26},
            'jump': {'value':[[0, 0]], 'x': 129, 'y': 0, 'w': 27, 'h':31},
            'standing': {'value':[[0, 0], [1, 0]], 'x': 0, 'y': 0, 'w': 22, 'h':26},
            'falling': {'value':[[0, 0]], 'x': 129, 'y': 0, 'w': 27, 'h':31}
        };
        this.animation = new Animation(this.spriteFrames.standing, 30);
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
        this.ctx.drawImage(this.playerSprite, this.animation.sprite.x + this.animation.frame[0] * 22, this.animation.sprite.y + this.animation.frame[1] * 26, this.animation.sprite.w, this.animation.sprite.h, this.x, this.y, this.width, this.height);
    }
}