const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 450;
canvas.height = 450;

ctx.save();
ctx.arc(100, 100, 10, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.restore();