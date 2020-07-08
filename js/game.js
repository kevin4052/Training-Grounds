class Game{
    constructor(ctx, canvas, world) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.world = world;
        this.player = new Character(this.canvas, this.ctx, 0, 0, 25, 25);
        this.obstacles = [];
        this.floor = new Obstacle(this.ctx, 0, this.canvas.height, this.canvas.width, 100);
        this.didCollide = false;
    }

    generateWorld() {
        let mapIndex = 0;
        for (let y = 0; y < this.world.mapHeight; y += this.world.tileSize){
            for(let x = 0; x < this.world.mapWidth; x += this.world.tileSize){
                if(this.world.map[mapIndex] === 1){
                    this.obstacles.push(new Obstacle(this.ctx, x, y, this.world.tileSize, this.world.tileSize))
                }
                mapIndex++;
            }
        }

        // for (let i = 0; i < 50; i++) {
        //     let x = Math.floor(Math.random() * (this.canvas.width - 50));
        //     let y = 50 + Math.floor(Math.random() * (this.canvas.height - 50));
        //     let w = 50 + Math.floor(Math.random() * 150);
        //     let h = 10 + Math.floor(Math.random() * 30);
        //     this.obstacles.push(new Obstacle(this.ctx, x, y, w, h));
        // }
        // this.obstacles.push(this.floor);
    }

    init() {
        this.obstacles.forEach(obstacle => {
            let color = 'black'; //'#' + Math.floor(Math.random()*16777215).toString(16);
            obstacle.draw(color);
        })
        this.player.update(this.didCollide);
        this.player.draw();
        this.checkCollision();
        // console.log(this.player.y);
    }


    checkCollision() {
        //Axis-Aligned Bounding Box collision detection
        this.obstacles.forEach(obstacle => {
            if (this.player.getLeft() < obstacle.getRight() && this.player.getRight() > obstacle.getLeft() &&
                this.player.getBottom() > obstacle.getTop() && this.player.getTop() < obstacle.getBottom()) {
                // console.log('touch')

                //collide with top of object
                if (this.player.oldY < this.player.y) {

                    this.player.oldY = this.player.setBottom(obstacle.getTop());
                    this.player.yVel = 0
                    this.player.jump.state = false;

                } else if (this.player.oldY > this.player.y) {

                    this.player.setTop(obstacle.getBottom());
                    this.player.jump.state = true;

                } else if (this.player.oldX < this.player.x) {

                    this.player.setRight(obstacle.getLeft());

                } else if (this.player.oldX > this.player.x) {

                    this.player.setLeft(obstacle.getRight());
                }

                // return true;
                // this.didCollide = true;
            } else {

                // return false;
                // this.didCollide = false;
            }


        })

    }
}