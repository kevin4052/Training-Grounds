class Character {
    constructor(canvas, ctx, x, y, width, height){
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
        this.friction = 0.70;
        this.jump = {'state': true, 'count': 0};
        this.holdRight = false;
        this.holdLeft = false;
        this.onGround = false;
    }

    getRight(){
        return this.x;
    }

    getLeft(){
        return this.x + this.width;
    }

    getTop(){
        return this.y;
    }

    getBottom(){
        return this.y + this.height;
    }

    draw(){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(){
        this.oldX = this.x;
        this.oldY = this.y;

        if (this.holdLeft){
            this.xVel = this.moveSpeed * -1;
        }
        if (this.holdRight){
            this.xVel = this.moveSpeed;
        }

        this.x += this.xVel;
        this.y += this.yVel;
        
        if (this.y > this.canvas.height - this.height){
            this.xVel *= this.friction;
            this.jump.state = true;
        } else {
            this.yVel += this.gravity;
            this.xVel *= 0.95;
        }

        if (this.y > this.canvas.height - this.height){
            this.jump.state = false;
            this.y = this.canvas.height - this.height;
            this.yVel = 0;
        }

        if (this.x - this.width > this.canvas.width){
            this.x = 0;
        }

        if (this.x < -this.width) {
            this.x = this.canvas.width - this.width;
        }
    }

    keyDown(event){
        switch(event.keyCode){
            case 37:
            this.holdLeft = true;
            break;
            case 38:
                if(this.jump.state === false) {
                   this.yVel = -this.moveSpeed * 2;
                }
                break;
            case 39:
                this.holdRight = true;
                break;
        }
    }

    keyUp(event){
        switch(event.keyCode){
            case 37:
            this.holdLeft = false;
            break;
            case 38:
                if(this.yVel < -3) this.yVel = -3;
                break;
            case 39:
                this.holdRight = false;
                break;
        }
    }
}