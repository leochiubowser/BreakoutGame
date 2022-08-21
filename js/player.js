class Player {
    constructor() {
        this.width = 130;
        this.height = 15;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - 100;
        this.right = false;
        this.left = false;
        this.speed = 10;
    }

    move() {
        if (this.right && this.x + this.width <= canvas.width) {
            this.x += this.speed;
        }
        else if (this.left && this.x > 0) {
            this.x -= this.speed;
        }
        addEventListener("keydown", (e) => {
            if (e.key == "a" || e.key == "ArrowLeft") {
                this.left = true;
            }
            if (e.key == "d" || e.key == "ArrowRight") {
                this.right = true;
            }
        })

        addEventListener("keyup", () => {
            this.right = false;
            this.left = false;
        })

    }

    draw() {
        this.move();
        ctx.save();
        ctx.fillStyle = "#3B3D54";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    }
}