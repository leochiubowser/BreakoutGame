class Ball {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height - 100;
        this.radius = 15;
    }
    draw() {
        ctx.save();
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        this.y -= 10;
    }

}
