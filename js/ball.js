class Ball {
    constructor() {
        this.radius = 8;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.maxSpeed = 5;
        this.minSpeed = 3;
        this.alive = true;
        this.velocity = {
            x: Math.round(Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed),
            y: Math.round(Math.random() * (this.maxSpeed - Math.abs(this.minSpeed))
                + Math.abs(this.minSpeed))
        }
        if (Math.round(Math.random() * 1) == 0) {
            this.velocity.x = -this.velocity.x;
        }
    }

    UpdatePos() {
        var allalive = 0;
        for (var i in enemys) {
            if (!enemys[i].alive) {
                allalive += 1;
            }
        }
        if (allalive < enemys.length) {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        }


        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
            this.velocity.x = - this.velocity.x;
        } else if (this.y - this.radius <= 0) {
            this.velocity.y = -this.velocity.y;
        } else if (this.y + this.radius + this.velocity.y >= canvas.height) {
            this.velocity.x = 0;
            this.velocity.y = 0;
            this.alive = false;
        }

        if (this.x + this.radius >= player.x && this.x - this.radius <= player.x + player.width &&
            this.y + this.radius >= player.y && this.y - this.radius <= player.y) {
            this.velocity.y = -this.velocity.y;
        }

        for (var i in enemys) {

            if (enemys[i].alive) {
                if (this.x + this.radius >= enemys[i].x && this.x - this.radius <= enemys[i].x + enemys[i].width &&
                    this.y + this.radius >= enemys[i].y && this.y - this.radius <= enemys[i].y) {
                    this.velocity.y = -this.velocity.y;
                    enemys[i].alive = false;
                }
            }

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
