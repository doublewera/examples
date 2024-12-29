function draw() {
    const ctx = risovalka.getContext("2d");

    let size = 200;
    skameika(ctx, {x: 200, y: 200}, size, size, size);
    skameika(ctx, {x: 450, y: 100}, 300, 200, 300);

}

function plank_vrt(ctx, start_point, color, height) {
    ctx.fillStyle = color;
    ctx.moveTo(
        start_point.x,
        start_point.y);
    ctx.beginPath();
    ctx.lineTo(start_point.x + 100, start_point.y - 50);
    ctx.lineTo(start_point.x + 100, start_point.y + height - 50);
    ctx.lineTo(start_point.x, start_point.y + height);
    ctx.lineTo(start_point.x, start_point.y);
    //ctx.moveTo(110, 75);
    ctx.stroke();
    ctx.fill();
}

function plank_hrz(ctx, start_point, color, length) {
    ctx.fillStyle = color;
    ctx.moveTo(
        start_point.x,
        start_point.y);
    ctx.beginPath();
    ctx.lineTo(start_point.x + 100, start_point.y - 50);
    ctx.lineTo(start_point.x + 100 + length, start_point.y - 50);
    ctx.lineTo(start_point.x + length, start_point.y);
    ctx.lineTo(start_point.x, start_point.y);
    //ctx.moveTo(110, 75);
    ctx.stroke();
    ctx.fill();
}

function skameika(ctx, start_point, h1, w1, h2) {
    plank_vrt(ctx, start_point, "#CCC", h1);
    plank_hrz(ctx, start_point, "#CCC", w1);
    plank_vrt(ctx, {x: start_point.x + w1, y: start_point.y}, "#CCC", h2);
}

window.addEventListener(
    'load',
    draw
);