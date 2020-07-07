class Obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 300;
        this.height = 50;
        this.x = (this.ctx.canvas.width - this.width) / 2;
        this.y = (this.ctx.canvas.height - this.height) - 100;
    }

    draw(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    getRight() {
        return this.x;
    }

    getLeft() {
        return this.x + this.width;
    }

    getTop() {
        return this.y;
    }

    getBottom() {
        return this.y + this.height;
    }
}