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
        this.viewPortWidth = 512;
        this.viewPortHeight = 288; 
        this.cameraPosX = 0;
        this.cameraPosY = 0;
        this.cameraOffsetX = 0;
        this.cameraOffsetY = 0;
        this.coinScore = 0;
    }

    generateWorld() {
        let mapIndex = 0;
        for (let y = 0; y < this.world.mapHeight; y += this.world.tileSize) {
            for (let x = 0; x < this.world.mapWidth; x += this.world.tileSize) {
                if (this.world.map1[mapIndex] === 'g') {
                    this.obstacles.push(new Obstacle(this.ctx, x, y, this.world.tileSize, this.world.tileSize))
                } else if (this.world.map1[mapIndex] === 'c'){
                    this.obstacles.push(new Obstacle(this.ctx, x, y, this.world.tileSize, this.world.tileSize))
                }
                mapIndex++;
            }
        }
    }

    drawGameScreen(){
        //number of tiles to display to the game canvas      
        let screenTilesX = this.viewPortWidth / this.world.tileSize;
        let screenTilesY = this.viewPortHeight / this.world.tileSize;

        //offset camera to center the player
        this.cameraOffsetX = Math.floor(this.cameraPosX) / this.world.tileSize - screenTilesX / 2;
        this.cameraOffsetY = Math.floor(this.cameraPosY) / this.world.tileSize - screenTilesY / 2;

        if(this.cameraOffsetX < 0) this.cameraOffsetX = 0;
        if(this.cameraOffsetY < 0) this.cameraOffsetY = 0;
        if(this.cameraOffsetX > this.canvas.width - screenTilesX) this.cameraOffsetX = this.canvas.width - screenTilesX;
        if(this.cameraOffsetY > this.canvas.height - screenTilesY) this.cameraOffsetY = this.canvas.height - screenTilesY;

        //draws the visible map
        for (let y = -1; y < screenTilesY + 1; y++){
            for (let x = -1; x < screenTilesX + 1; x++){
                this.tileType = this.world.getTile(x + this.cameraOffsetX, y + this.cameraOffsetY);
                switch (this.tileType){
                    case '.':
                        this.ctx.fillStyle = "black";
                        this.ctx.fillRect((x + this.cameraOffsetX) * this.world.tileSize, (y + this.cameraOffsetY) * this.world.tileSize, this.world.tileSize, this.world.tileSize);
                        break;
                    case 'g':
                        this.ctx.fillStyle = "brown";
                        this.ctx.fillRect((x + this.cameraOffsetX) * this.world.tileSize, (y + this.cameraOffsetY) * this.world.tileSize, this.world.tileSize, this.world.tileSize);
                        break;
                    case 'c':
                        this.ctx.fillStyle = "yellow";
                        this.ctx.fillRect((x + this.cameraOffsetX) * this.world.tileSize, (y + this.cameraOffsetY) * this.world.tileSize, this.world.tileSize, this.world.tileSize);
                        break;
                }
            }
        }


    }

    init() {
        // this.generateWorld();
        this.drawGameScreen();
        this.ctx.fillStyle = "white";
        this.ctx.font = '30px Verdana';
        this.ctx.fillText(`Coins: ${this.coinScore}`, 10, 50);
        // this.obstacles.forEach(obstacle => {
        //     let color = 'black';
        //     obstacle.draw(color);
        // })
        this.update();
        this.player.draw();
        this.coinPickup();
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
            this.player.yVel -= this.player.moveSpeed * 2.2;            
            this.player.jumping = true;
        }

        this.player.yVel += this.player.gravity;
        this.player.xVel *= this.player.friction;

        this.player.oldX = this.player.x;
        this.player.oldY = this.player.y;

        this.player.x += this.player.xVel;
        this.player.y += this.player.yVel;

        this.cameraPosX = this.player.x;
        this.cameraPosY = this.player.y;

        //canvas boundaries
        if (this.player.getRight() > this.canvas.width) {
            this.player.setRight(this.canvas.width);
        }
        if (this.player.x < 0) {
            this.player.x = 0;
        }
    }

    coinPickup(){
        if(this.world.getTile(this.player.getLeft(), this.player.getTop()) === 'c') {
            this.world.setTile(this.player.getLeft(), this.player.getTop(), ".");
            this.coinScore++;
        }
        if(this.world.getTile(this.player.getLeft(), this.player.getBottom()) === 'c') {
            this.world.setTile(this.player.getLeft(), this.player.getBottom(), ".");
            this.coinScore++;
        }
        if(this.world.getTile(this.player.getRight(), this.player.getTop()) === 'c') {
            this.world.setTile(this.player.getRight(), this.player.getTop(), ".");
            this.coinScore++;
        }
        if(this.world.getTile(this.player.getRight(), this.player.getBottom()) === 'c') {
            this.world.setTile(this.player.getRight(), this.player.getBottom(), ".");
            this.coinScore++;
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