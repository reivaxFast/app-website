const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = '#fff';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = '#E1E1FF';
ctx.lineWidth = 30;
ctx.fillStyle = '#999';
for (let i = 0; i < 8; i++) {
    ctx.save();
    ctx.translate(canvas.width-300, canvas.height / 2);
    ctx.rotate(Math.PI * i / 4);
    ctx.strokeRect(50, 50, 400, 400);
    ctx.restore();
}
ctx.beginPath();
ctx.arc(0, 0, 500, 0, Math.PI*2);
ctx.stroke();