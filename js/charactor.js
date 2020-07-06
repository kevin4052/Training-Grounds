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
        this.xVel = 0;
        this.yVel = 0;
        this.moveSpeed = 5;
        this.gravity = 0.5;
        this.friction = 0.85;
        this.jump = true;
    }

    draw(){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        // console.log('draw');
    }

    update(event){
        if (event === 39 && this.x < this.canvas.width - this.width) {
            this.xVel += this.moveSpeed;
        }
        if (event === 37 && this.x > 0) {
            this.xVel -= this.moveSpeed;
        }
        if (event === 38 && this.jump === false) {
            this.yVel -= 100;
            this.jump = true;
        }

        this.yVel += this.gravity;
        this.x += this.xVel;
        this.y += this.yVel;
        this.xVel *= this.friction;
        this.yVel *= this.friction;

        if (this.y > this.canvas.height - this.height){
            this.jump = false;
            this.y = this.canvas.height - this.height;
            this.yVel = 0;
        }

        if (this.jump) this.yVel += this.gravity + 4;

        if (this.x - this.width > this.canvas.width){
            this.x = 0;
        }

        if (this.x < -this.width) {
            this.x = this.canvas.width - this.width;
        }
        // console.log('update');
        
    }
}