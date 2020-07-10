class Game {
    constructor(ctx, canvas, world) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.world = world;
        this.controller = new Controller();
        this.player = new Character(this.canvas, this.ctx, 5, 0, 66, 92);
        this.obstacles = [];
        this.tileX;
        this.tileY;
        this.tileType;
    }

    generateWorld() {
        let mapIndex = 0;
        for (let y = 0; y < this.world.mapHeight; y += this.world.tileSize) {
            for (let x = 0; x < this.world.mapWidth; x += this.world.tileSize) {
                if (this.world.map1[mapIndex] === 'g') {
                    this.obstacles.push(new Obstacle(this.ctx, x, y, this.world.tileSize, this.world.tileSize))
                }
                mapIndex++;
            }
        }
    }

    init() {
        this.obstacles.forEach(obstacle => {
            let color = 'black';
            obstacle.draw(color);
        })
        this.update();
        this.player.draw();
        this.checkCollision();
        // console.log(this.player.y);
    }

    update() {
        //Left and Right movement
        if (this.controller.left) {
            this.player.xVel = this.player.moveSpeed * -1;
        }
        if (this.controller.right) {
            this.player.xVel = this.player.moveSpeed;
        }

        //Up and Down movement;               
        if (this.controller.up && !this.player.jumping) {
            this.player.yVel -= this.player.moveSpeed * 1.8;            
            this.player.jumping = true;
        }

        this.player.yVel += this.player.gravity;
        this.player.xVel *= this.player.friction;

        this.player.oldX = this.player.x;
        this.player.oldY = this.player.y;

        this.player.x += this.player.xVel;
        this.player.y += this.player.yVel;

        //canvas boundaries
        if (this.player.getRight() > this.canvas.width) {
            this.player.setRight(this.canvas.width);
        }
        if (this.player.x < 0) {
            this.player.x = 0;
        }
    }

    checkCollision(){
        //moving in the x direction
        if(this.player.xVel < 0){ //moving left
            if(this.world.getTile(this.player.x, this.player.y) !== '.' || this.world.getTile(this.player.x, this.player.y + this.player.height - 5) !== '.'){
                this.player.x = this.player.oldX;
                this.player.xVel = 0;
            }
        } else { //moving right
            if(this.world.getTile(this.player.x + this.player.width, this.player.y) !== '.' || this.world.getTile(this.player.x + this.player.width, this.player.y + this.player.height - 5) !== '.'){
                this.player.x = this.player.oldX;
                this.player.xVel = 0;
            }
        }

        this.player.jumping = true;

        //moving up and down
        if(this.player.yVel <= 0){
            if(this.world.getTile(this.player.x, this.player.y) !== '.' || this.world.getTile(this.player.x + this.player.width - 5, this.player.y) !== '.'){
                this.player.y = this.player.oldY;
                this.player.yVel = 0;
            }
        } else {
            if(this.world.getTile(this.player.x, this.player.y + this.player.height) !== '.' || this.world.getTile(this.player.x + this.player.width - 5, this.player.y + this.player.height) !== '.'){
                this.player.y = this.player.oldY;
                this.player.yVel = 0;
                this.player.jumping = false;
            }
        }
    }
}