let canvas = document.getElementById('canvas_playArea');
let ctx = canvas.getContext("2d");

draw();

//function for drawing of canvas and elements within canvas
function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}