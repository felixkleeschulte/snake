let canvas = document.getElementById('canvas_playArea');
let ctx = canvas.getContext("2d");
let rows = 10;
let columns = 10;
let box_height;
let box_width;

draw();

//function for initializing the game
function initializeGame() {
    box_height = canvas.height / rows;
    box_width = canvas.width / columns;
}

//function for drawing canvas and elements within canvas
function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

