class Game {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.player = new Character(this.canvas, this.ctx, 0, 0, 25, 25);
        this.obstacles = [];
        this.floor = new Obstacle(this.ctx, 0, this.canvas.height, this.canvas.width, 50);
    }

    generateWorld() {
        for(let i = 0; i < 50; i++){
            let x = Math.floor(Math.random() * (this.canvas.width - 50));
            let y = 50 + Math.floor(Math.random() * (this.canvas.height - 50));
            let w = 50 + Math.floor(Math.random() * 150);
            let h = 10 + Math.floor(Math.random() * 30);
            this.obstacles.push(new Obstacle(this.ctx, x, y, w, h));
        }
        this.obstacles.push(this.floor);
    }

    init(){
        this.obstacles.forEach(obstacle =>{
            let color = 'black';//'#' + Math.floor(Math.random()*16777215).toString(16);
            obstacle.draw(color);
        })
        this.player.update();
        this.player.draw();
        this.checkCollision();
        // console.log(game.player.jump.state);
    }

    checkCollision(){
        //Axis-Aligned Bounding Box collision detection
        this.obstacles.forEach(obstacle => {
          if (this.player.getLeft() > obstacle.getRight() && this.player.getRight() < obstacle.getLeft()
            && this.player.getBottom() > obstacle.getTop() && this.player.getTop() < obstacle.getBottom()) {
                game.player.y = obstacle.getTop() - game.player.height;

                console.log('collision');
                // return true;
                game.player.onGround = true;       
            } else {

                // return false;
                game.player.onGround = false; 
            }
        })
        
    }
}