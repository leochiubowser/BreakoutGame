const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ball = new Ball();
const player = new Player();
const enemy = new Enemy(100, 100);



var enemyIfo = {
    count: 15,
    interval: canvas.width /10,
}
var enemys = [];


createEnemy(enemyIfo.count);

function createEnemy(count) {
    for (var i = 0; i < count; i++) {
        if (i == 0 || i == 5 || i == 10) {
            var y;
            switch (i) {
                case 0:
                    y = 100;
                    break;
                case 5:
                    y = 200;
                    break;
                case 10:
                    y = 300;
                    break;
            }
            enemys[i] = new Enemy((canvas.width - ((enemyIfo.interval - enemy.width + enemy.width) * 5) + (enemyIfo.interval - enemy.width)) / 2, y)
        }
        else if (i <= 4) {
            enemys[i] = new Enemy(enemys[i - 1].x + enemyIfo.interval, 100);
        }
        else if (i <= 9) {
            enemys[i] = new Enemy(enemys[i - 1].x + enemyIfo.interval, 200);
        }
        else if (i <= 15) {
            enemys[i] = new Enemy(enemys[i - 1].x + enemyIfo.interval, 300);
        }
    }
}

function drawEnemy(count) {
    for (var i = 0; i < count; i++) {
        enemys[i].draw();
    }
}

animation();

function animation() {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEnemy(enemyIfo.count);

    ball.draw();
    player.draw();
}

addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})