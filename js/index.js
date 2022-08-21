const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function updateScreen() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const ball = new Ball();

animation();

function animation() {
    requestAnimationFrame(animation);
    updateScreen();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.draw();
}

