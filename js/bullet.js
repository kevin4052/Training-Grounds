class Bullet {
    constructor(ctx, x, y, direction, xVel){
        this.ctx = ctx
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.xVel = xVel;
        this.strength = 25;
        this.width = 41;
        this.height = 30;
        this.bulletImg = new Image();
        this.bulletImg.src = './images/MegaManSheet5.gif';
    }

    update(){
        if(this.direction === 'right') this.x += this.xVel;
        else this.x -= this.xVel;
    }

    draw(){
        this.ctx.drawImage(this.bulletImg, 250, 577, 9, 7, this.x, this.y, this.width, this.height); 
    }
}