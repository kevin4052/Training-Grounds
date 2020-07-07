class Game {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.player = new Character(this.canvas, this.ctx, 0, 0, 16, 16);
        this.obstacles = [];
    }

    generateWorld() {
        for(let i = 0; i < 50; i++){
            let w = 50 + Math.floor(Math.random() * 150);
            let h = 10 + Math.floor(Math.random() * 30);
            let x = 50 + Math.floor(Math.random() * (this.canvas.width - 50));
            let y = 50 + Math.floor(Math.random() * (this.canvas.height - 50));
            this.obstacles.push(new Obstacle(this.ctx, x, y, w, h));
        }
    }

    init(){
        this.obstacles.forEach(obstacle =>{
            let color = 'black';//'#' + Math.floor(Math.random()*16777215).toString(16);
            obstacle.draw(color);
        })
        this.player.update();
        this.player.draw();
        this.checkCollision();
    }

    checkCollision(){
        //Axis-Aligned Bounding Box collision detection
        this.obstacles.forEach(obstacle => {
          if (this.player.getLeft() > obstacle.getRight() && this.player.getRight() < obstacle.getLeft()
            && this.player.getBottom() > obstacle.getTop() && this.player.getTop() < obstacle.getBottom()) {
                console.log('collision');
                return true;            
            } else {
                return false;
            }
        })
        
    }
}