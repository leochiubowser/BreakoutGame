const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ball = new Ball();
const player = new Player();
const enemy = new Enemy(100, 100);


animation();

// (canvas.width - ((real + enemy.width) * enemyCount.Horizontal) + real) / 2
function animation() {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw();
    enemy.draw();
    ball.draw();
}

addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})