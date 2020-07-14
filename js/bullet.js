class Bullet {
    constructor(x, y, direction, xVel){
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.xVel = xVel;
        this.strength = 25;
        this.width = 41;
        this.height = 30;
    }

    update(){
        if(this.direction === 'right') this.x += this.xVel;
        else this.x -= this.xVel;
    }
}