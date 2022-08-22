class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 10;
        this.colors = ["red", "yellow"];
        this.color = Math.round(Math.random() * 1);
        this.alive = true;
    }

    draw() {
        ctx.save();
        ctx.fillStyle = this.colors[this.color];
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    }
}