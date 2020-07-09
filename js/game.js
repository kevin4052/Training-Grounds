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
        this.collision = {
            1: (object, row, column) => {
                this.topCollision(object, row);
            }
        };
    }

    generateWorld() {
        let mapIndex = 0;
        for (let y = 0; y < this.world.mapHeight; y += this.world.tileSize) {
            for (let x = 0; x < this.world.mapWidth; x += this.world.tileSize) {
                if (this.world.map[mapIndex] === 1) {
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
        // this.player.update(this.didCollide);
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

    topCollision(object, row){
        if(object.yVel > 0){
            let tileTop = row * this.world.tileSize;
            if (object.y + object.height > tileTop && object.oldY + object.height <= tileTop) {
                object.jumping = false;
                object.yVel = 0;
                object.oldY = object.y = tileTop - object.height; //- 0.01;
                return true;
            }
        }
        return false;
    }

    
    
    checkCollision() {
        const collision = {
            1: (object, row, column) => {
                if (this.topCollision(object, row)) return;
            }
        };


        
        this.tileX = Math.floor((this.player.x + this.player.width * 0.5) / this.world.tileSize);
        this.tileY = Math.floor((this.player.y + this.player.height) / this.world.tileSize);
        this.tileType = this.world.map[this.tileY * this.world.columns + this.tileX];
        // console.log(this.tileType);

        if (this.tileType != 0){
            this.collision[this.tileType](this.player, this.tileY, this.tileX);
        }



        //Axis-Aligned Bounding Box collision detection
        // this.obstacles.forEach(obstacle => {
            // if (this.player.getTop() < obstacle.getBottom() && this.player.getLeft() < obstacle.getRight() ||
            //     this.player.getTop() < obstacle.getBottom() && this.player.getRight() < obstacle.getLeft() ||
            //     this.player.getBottom() > obstacle.getTop() && this.player.getLeft() > obstacle.getRight() ||
            //     this.player.getBottom() > obstacle.getTop() && this.player.getRight() > obstacle.getLeft()) {
            //     console.log('touch')

            //     //collide with top of object
            //     if (this.player.oldY < this.player.y) {

            //         this.player.oldY = this.player.setBottom(obstacle.getTop()) + 0.1;
            //         this.player.yVel = 0
            //         this.player.jumping = false;

            //     } else if (this.player.oldY > this.player.y) {

            //         this.player.setTop(obstacle.getBottom());
            //         this.player.jumping = true;

            //     } else if (this.player.oldX < this.player.x) {

            //         this.player.setRight(obstacle.getLeft());

            //     } else if (this.player.oldX > this.player.x) {

            //         this.player.setLeft(obstacle.getRight());
            //     }

            //     // return true;
            //     // this.didCollide = true;
            // } else {
            //     console.log('none')
            //     // return false;
            //     // this.didCollide = false;
            // }

        // })

    }
}