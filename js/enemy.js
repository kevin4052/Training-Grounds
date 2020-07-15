class Enemy {
    constructor(ctx, x, y, width, height, motion) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.motion = motion;
        this.hp = 50;
        this.startX = x;
        this.startY = y;
        this.x = x;
        this.y = y;
        this.horizontal = 'right';
        this.vertical = 'down';
        this.enemySheet = new Image();
        this.enemySheet.src = './images/MegaManSheet3.gif';
        this.spriteFrames = {
            'right' : {
                'value': [[0, 0], [1, 0]],
                'x': 158, 'y': 2, 
                'w': 18, 'h':21
            },
            'left' : {
                'value': [[0, 0], [1, 0]],
                'x': 114, 'y': 2, 
                'w': 18, 'h':21
            }
        }
        this.animation = new Animation(this.spriteFrames.left, 3)
        this.damage = new Audio("./sounds/09 - EnemyDamage.wav");
        this.damage.volume = 0.2;
        this.pastBullet;
    }

    draw() {
        this.animation.update();
        this.ctx.drawImage(this.enemySheet, this.animation.sprite.x + this.animation.frame[0] * this.animation.sprite.w, this.animation.sprite.y + this.animation.frame[1] * this.animation.sprite.h, this.animation.sprite.w, this.animation.sprite.h, this.x, this.y, this.width, this.height);
    }

    checkBullet(bullet){
        let hitBoxOffset = 10; //pixels
        if (bullet !== this.pastBullet){
            if (bullet.x + bullet.width > this.x - hitBoxOffset && 
                bullet.y > this.y - hitBoxOffset &&
                bullet.y + bullet.height < this.y + this.height + hitBoxOffset && 
                bullet.x < this.x + this.width + hitBoxOffset) {
                    this.hp -= bullet.strength;
                    this.x += bullet.xVel;
                    this.damage.play();
                    this.pastBullet = bullet;
                };
        }
    }

    update() {
        if (this.motion === "horizontal") {

            if (this.horizontal === 'right') this.x += 5;
            else if(this.horizontal === 'left') this.x -= 5;
    
            if(this.x > this.startX + 800) this.horizontal = 'left';
            else if (this.x < this.startX) this.horizontal = 'right';

        } else {

            if (this.vertical === 'down') this.y += 5;
            else if(this.vertical === 'up') this.y -= 5;
        
            if(this.y > this.startY + 800) this.vertical = 'up';
            else if (this.y < this.startY) this.vertical = 'down';
        }
    }

    getRight() {return this.x + this.width;}
    getLeft() {return this.x;}
    getTop() {return this.y;}
    getBottom() {return this.y + this.height;}
}