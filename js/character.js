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
        this.gravity = 1.5;
        this.friction = 0.75;
        this.jumping = true;
        this.onGround = false;
        this.moveRight = false;
        this.moveLeft = false;
        this.moveUp = false;
        this.playerSprite = new Image();
        this.playerSpriteReverse = new Image();
        this.playerSprite.src = './images/megaman_spriteSheet.png';
        this.playerSpriteReverse.src = './images/megaman_sprite_Sheet_reverse.png';
        this.spriteFrames = {
            'walk': {
                'value':[[0, 0], [1, 0], [2, 0], [1, 0]], 
                'x': 66, 'y': 0, 
                'w': 22, 'h':26
            },
            'jump': {
                'value':[[0, 0]], 
                'x': 129, 'y': 0, 
                'w': 27, 'h':31
            },
            'standing': {
                'value':[[0, 0], [1, 0]], 
                'x': 0, 'y': 0, 
                'w': 22, 'h':26
            },
            'falling': {
                'value':[[0, 0]], 
                'x': 129, 'y': 0, 
                'w': 27, 'h':31
            }
        };
        this.spriteFramesReverse = {
            'walk': {
                'value':[[0, 0], [-1, 0], [-2, 0], [-1, 0]], 
                'x': 182, 'y': 0, 
                'w': 22, 'h':26
            },
            'jump': {
                'value':[[0, 0]], 
                'x': 113, 'y': 0, 
                'w': 27, 'h':31
            },
            'standing': {
                'value':[[0, 0], [-1, 0]], 
                'x': 247, 'y': 0, 
                'w': 22, 'h':26
            },
            'falling': {
                'value':[[0, 0]], 
                'x': 113, 'y': 0, 
                'w': 27, 'h':31
            }
        };
        this.animation = new Animation(this.spriteFrames.standing, 30);
    }

    //get character edges
    getRight() {return this.x + this.width;}
    getLeft() {return this.x;}
    getTop() {return this.y;}
    getBottom() {return this.y + this.height;}

    //set character position
    setRight(position) {this.x = position - this.width;}
    setLeft(position) {this.x = position;}
    setTop(position) {this.y = position;}
    setBottom(position) {this.y = position - this.height;}

    draw(direction) {
        let spriteDirection;

        if(direction === 'right') spriteDirection = 'playerSprite';
        else spriteDirection = 'playerSpriteReverse';

        this.ctx.drawImage(this[spriteDirection], this.animation.sprite.x + this.animation.frame[0] * this.animation.sprite.w, this.animation.sprite.y + this.animation.frame[1] * this.animation.sprite.h, this.animation.sprite.w, this.animation.sprite.h, this.x, this.y, this.width, this.height);
    }

    enemyCollision(enemy){
        if (enemy.x < this.x + this.width && 
            enemy.x + enemy.width > this.x &&
            enemy.y < this.y + this.height &&
            enemy.y + enemy.height > this.y){
                this.hp -= enemy.strength;
                this.x -= 70;
                this.y -= 80
            }
    }
}