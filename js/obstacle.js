class Obstacle {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    draw(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    getRight() {
        return this.x + this.width;
    }

    getLeft() {
        return this.x;
    }

    getTop() {
        return this.y;
    }

    getBottom() {
        return this.y + this.height;
    }
}