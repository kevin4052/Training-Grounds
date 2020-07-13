class Game {
    constructor(ctx, canvas, world) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.world = world;
        this.controller = new Controller();
        this.player = new Character(this.canvas, this.ctx, 72, 0, 66, 78);
        this.tileX;
        this.tileY;
        this.tileType;
        this.viewPortWidth = 40 * 70;
        this.viewPortHeight = 22 * 70; 
        this.cameraPosX = 0;
        this.cameraPosY = 0;
        this.cameraOffsetX = 0;
        this.cameraOffsetY = 0;
        this.coinScore = 0;
        this.background = new Image();
        this.ground = new Image();
        this.coin = new Image();
        this.door = new Image();
        this.background.src = './images/Big Room.bmp'
        this.ground.src = './images/boxEmpty.png';
        this.coin.src = './images/coinGold.png'
        this.door.src = './images/door_closedMid.png'
        this.currentMap = 'map1';
    }

    drawGameScreen(){
        //number of tiles to display to the game canvas      
        let screenTilesX = this.viewPortWidth / this.world.tileSize;
        let screenTilesY = this.viewPortHeight / this.world.tileSize;

        //offset camera to center the player
        this.cameraOffsetX = Math.floor(this.cameraPosX / this.world.tileSize) - (screenTilesX - 2) / 2;
        this.cameraOffsetY = Math.floor(this.cameraPosY / this.world.tileSize) - screenTilesY / 2;
        

        if(this.cameraOffsetX < 0) this.cameraOffsetX = 0;
        if(this.cameraOffsetY < 0) this.cameraOffsetY = 0;
        if(this.cameraOffsetX > this.world.columns - screenTilesX) this.cameraOffsetX = this.world.columns - screenTilesX;
        if(this.cameraOffsetY > this.world.rows - screenTilesY) this.cameraOffsetY = this.world.rows - screenTilesY;

        //draws the visible map
        for (let y = -1; y < screenTilesY + 1; y++){
            for (let x = -1; x < screenTilesX + 1; x++){
                this.tileType = this.world.getTile(this.currentMap,(x + this.cameraOffsetX) * this.world.tileSize, (y + this.cameraOffsetY) * this.world.tileSize);
                switch (this.tileType){
                    case 'B':
                        this.ctx.fillStyle = "black";
                        this.ctx.fillRect((x + this.cameraOffsetX) * this.world.tileSize, (y + this.cameraOffsetY) * this.world.tileSize, this.world.tileSize, this.world.tileSize);
                        break;
                    case '.':
                        // this.ctx.drawImage(this.background, 0, 0, 70, 70, (x + this.cameraOffsetX) * this.world.tileSize, (y + this.cameraOffsetY) * this.world.tileSize, this.world.tileSize, this.world.tileSize);
                       break;
                    case 'g':
                        this.ctx.drawImage(this.ground, (x + this.cameraOffsetX) * this.world.tileSize, (y + this.cameraOffsetY) * this.world.tileSize, this.world.tileSize, this.world.tileSize);
                        break;
                    case 'c':
                        this.ctx.drawImage(this.coin, (x + this.cameraOffsetX) * this.world.tileSize, (y + this.cameraOffsetY) * this.world.tileSize, this.world.tileSize, this.world.tileSize);
                        break;
                    case '2':
                    case "1":
                        this.ctx.drawImage(this.door, (x + this.cameraOffsetX) * this.world.tileSize, (y + this.cameraOffsetY) * this.world.tileSize, this.world.tileSize, this.world.tileSize);
                        break;
                }
            }
        }




    }

    init() {

        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.drawGameScreen();

        this.ctx.fillStyle = "white";
        this.ctx.font = '50px Verdana';
        this.ctx.fillText(`Coins: ${this.coinScore}`, 70 * 3, 50);
        
        this.player.animation.update();
        this.update();
        this.player.draw();

        this.doors();
        this.coinPickup();
        this.checkCollision();
        // console.log(this.player.y);
    }

    moveCamera(){
        //canvas offset to player
        let canvasOffestX = 0;
        let canvasOffestY = 0;

        if(this.player.xVel > 0){
            this.ctx.translate(canvasOffestX, 0);
        } else if (this.player.xVel < 0){
            this.ctx.translate(-canvasOffestX, 0);
        }

        if(this.player.yVel > 0){
            this.ctx.translate(0, canvasOffestY);
        } else if (this.player.yVel < 0){
            this.ctx.translate(0, -canvasOffestY);
        }
        this.ctx.translate(0, 0);
    }

    update() {
        //Left and Right movement
        if (this.controller.left) {
            this.player.animation.changeFrameSet(this.player.spriteFrames.walk, 5);
            this.player.xVel = this.player.moveSpeed * -1;
        }
        if (this.controller.right) {
            this.player.animation.changeFrameSet(this.player.spriteFrames.walk, 5);
            this.player.xVel = this.player.moveSpeed;
        }

        //Jump movement;               
        if (this.controller.up && !this.player.jumping) {
            this.player.animation.changeFrameSet(this.player.spriteFrames.jump, 10);
            this.player.yVel -= this.player.moveSpeed * 2.2;            
            this.player.jumping = true;
        }

        if (this.player.xVel < 1 && this.player.xVel > -1) {
            this.player.xVel = 0;
            if(this.player.xVel === 0 && this.player.yVel === 0) this.player.animation.changeFrameSet(this.player.spriteFrames.standing, 30);
        }

        if (this.player.yVel > 5) this.player.animation.changeFrameSet(this.player.spriteFrames.falling, 30);

        // if (this.player.xVel < 0){
        //     this.ctx.scale(-1, 1);
        // }

        this.player.yVel += this.player.gravity;
        this.player.xVel *= this.player.friction;

        this.player.oldX = this.player.x;
        this.player.oldY = this.player.y;

        this.player.x += this.player.xVel;
        this.player.y += this.player.yVel;

        this.cameraPosX = this.player.x;
        this.cameraPosY = this.player.y;
    }

    doors(){
        //door #1
        if(this.world.getTile(this.currentMap, this.player.getLeft(), this.player.getTop()) === '1' && this.controller.down ||
        this.world.getTile(this.currentMap, this.player.getLeft(), this.player.getBottom()) === '1' && this.controller.down ||
        this.world.getTile(this.currentMap, this.player.getRight(), this.player.getTop()) === '1' && this.controller.down ||
        this.world.getTile(this.currentMap, this.player.getRight(), this.player.getBottom()) === '1' && this.controller.down) {
            this.currentMap = 'map1';
            this.player.x = 72;
            this.player.y = 397 - 70;
        }

        //door #2
        if(this.world.getTile(this.currentMap, this.player.getLeft(), this.player.getTop()) === '2' && this.controller.down ||
        this.world.getTile(this.currentMap, this.player.getLeft(), this.player.getBottom()) === '2' && this.controller.down ||
        this.world.getTile(this.currentMap, this.player.getRight(), this.player.getTop()) === '2' && this.controller.down ||
        this.world.getTile(this.currentMap, this.player.getRight(), this.player.getBottom()) === '2' && this.controller.down) {
            this.currentMap === 'map1' ? this.currentMap = 'map2' : this.currentMap = 'map1';
        }

    }

    coinPickup(){
        if(this.world.getTile(this.currentMap, this.player.getLeft(), this.player.getTop()) === 'c') {
            this.world.setTile(this.currentMap, this.player.getLeft(), this.player.getTop(), ".");
            this.coinScore++;
        }
        if(this.world.getTile(this.currentMap, this.player.getLeft(), this.player.getBottom()) === 'c') {
            this.world.setTile(this.currentMap, this.player.getLeft(), this.player.getBottom(), ".");
            this.coinScore++;
        }
        if(this.world.getTile(this.currentMap, this.player.getRight(), this.player.getTop()) === 'c') {
            this.world.setTile(this.currentMap, this.player.getRight(), this.player.getTop(), ".");
            this.coinScore++;
        }
        if(this.world.getTile(this.currentMap, this.player.getRight(), this.player.getBottom()) === 'c') {
            this.world.setTile(this.currentMap, this.player.getRight(), this.player.getBottom(), ".");
            this.coinScore++;
        }
    }

    checkCollision(){
        //moving in the x direction
        if(this.player.xVel < 0){ //moving left
            if(this.world.getTile(this.currentMap, this.player.x, this.player.y) === 'g' || this.world.getTile(this.currentMap, this.player.x, this.player.y + this.player.height - 5) === 'g'){
                this.player.x = this.player.oldX;
                this.player.xVel = 0;
            }
        } else if (this.player.xVel >= 0){ //moving right
            if(this.world.getTile(this.currentMap, this.player.x + this.player.width, this.player.y) === 'g' || this.world.getTile(this.currentMap, this.player.x + this.player.width, this.player.y + this.player.height - 5) === 'g'){
                this.player.x = this.player.oldX;
                this.player.xVel = 0;
            }
        }

        this.player.jumping = true;

        //moving up and down
        if(this.player.yVel <= 0){
            if(this.world.getTile(this.currentMap, this.player.x, this.player.y) === 'g' || this.world.getTile(this.currentMap, this.player.x + this.player.width - 5, this.player.y) === 'g'){
                this.player.y = this.player.oldY;
                this.player.yVel = 0;
            }
        } else if (this.player.yVel > 0){
            if(this.world.getTile(this.currentMap, this.player.x, this.player.y + this.player.height) === 'g' || this.world.getTile(this.currentMap, this.player.x + this.player.width - 5, this.player.y + this.player.height) === 'g'){
                this.player.y = this.player.oldY;
                this.player.yVel = 0;
                this.player.jumping = false;
            }
        }
    }
}