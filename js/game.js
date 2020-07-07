class Game {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.player = new Character(this.canvas, this.ctx, 0, 0, 25, 25);
        this.obstacle = new Obstacle(this.ctx);
    }

    init(){
        this.obstacle.draw('red');
        this.player.update();
        this.player.draw();
        this.checkCollision();
    }

    checkCollision(){
        if (this.player.getLeft() > this.obstacle.getRight() && this.player.getRight() < this.obstacle.getLeft()
        && this.player.getBottom() > this.obstacle.getTop() && this.player.getTop() < this.obstacle.getBottom()) {
            if(this.player.oldY < this.player.y){
                this.player.y = this.obstacle.y - this.player.height - 75;
                this.player.yVel = 0
                this.player.jump.state = false;
            }
            this.player.x = this.player.oldX;
            this.player.y = this.player.oldY;
            this.player.jump.state = false;

            console.log('collision')
        }
    }
}