class Bullet {
    constructor(x, y, direction, xVel){
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.xVel = xVel;
    }

    update(){
        if(this.direction === 'right') this.x += this.xVel;
        else this.x -= this.xVel;
    }
}