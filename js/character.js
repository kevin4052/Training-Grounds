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
        this.moveSpeed = 5;
        this.gravity = 0.5;
        this.friction = 0.70;
        this.jump = {'state': true, 'count': 0};
        this.moveRight = false;
        this.moveLeft = false;
        this.moveUp = false;
    }

    //get character edges
    getRight(){
        return this.x + this.width;
    }
    getLeft(){
        return this.x;
    }
    getTop(){
        return this.y;
    }
    getBottom(){
        return this.y + this.height;
    }

    //set character position
    setRight(position){
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


    draw(){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(collide){
        this.oldX = this.x;
        this.oldY = this.y;

        //Left and Right movement
        if (this.moveLeft){
            this.xVel = this.moveSpeed * -1;
        }
        if (this.moveRight){
            this.xVel = this.moveSpeed;
        }

        this.x += this.xVel;
        this.y += this.yVel;

        //Up and Down movement;               
        if (collide) {
            // this.y = this.canvas.height - this.height;
            this.xVel *= this.friction;
            this.yVel = 0;
            // this.jump.state = false;
            // console.log('on ground');
        } else {
            this.yVel += this.gravity;
            this.xVel *= 0.95;
            // this.jump.state = true;
            // console.log('not on ground');
        }

        //canvas boundaries
        if (this.getRight() > this.canvas.width){
            this.setRight(this.canvas.width);
        }
        if (this.x < 0) {
            this.x = 0;
        }
    }

    keyDown(event){
        switch(event.keyCode){
            case 37:
                this.moveLeft = true;
                break;
            case 38:
                this.moveUp = true;
                if(this.jump.state === false) {
                   this.yVel = -this.moveSpeed * 2;
                }
                break;
            case 39:
                this.moveRight = true;
                break;
        }
    }

    keyUp(event){
        switch(event.keyCode){
            case 37:
            this.moveLeft = false;
            break;
            case 38:
                this.moveUp = false;
                if(this.yVel < -3) this.yVel = -3;
                break;
            case 39:
                this.moveRight = false;
                break;
        }
    }
}