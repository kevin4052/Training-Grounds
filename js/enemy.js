class Enemy {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.startX = x;
        this.startY = y;
        this.x = x;
        this.y = y;
        this.enemySheet = new Image();
        this.enemySheet.src = './images/MegaManSheet3.gif';
        this.spriteFrames = {
            'right' : {
                'value': [[0, 0], [1, 0]],
                'x': 158, 'y': 2, 
                'w': 18, 'h':21
            },
            'left' : {
                'value': [[0, 0], [1, 0]],
                'x': 114, 'y': 2, 
                'w': 18, 'h':21
            }
        }
        this.animation = new Animation(this.spriteFrames.left, 3)
    }

    draw() {
        // this.ctx.fillStyle = color;
        if(Math.abs(this.x - this.startX) < 400){
            this.x += 1;
        } else {
            this.x -= 1;
        }
        this.animation.update();
        this.ctx.drawImage(this.enemySheet, this.animation.sprite.x + this.animation.frame[0] * this.animation.sprite.w, this.animation.sprite.y + this.animation.frame[1] * this.animation.sprite.h, this.animation.sprite.w, this.animation.sprite.h, this.x, this.y, this.width, this.height);

    }

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
}