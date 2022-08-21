class Ball {
    constructor() {
        this.radius = 10;
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
        this.maxSpeed = 3.5;
        this.minSpeed = 2;
        this.velocity = {
            x: Math.round(Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed),
            y: Math.round(Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed)
        }
    }

    UpdatePos() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
            this.velocity.x = - this.velocity.x;
        } else if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
            this.velocity.y = -this.velocity.y;
        }
    }

    draw() {
        this.UpdatePos();

        ctx.save();
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

}