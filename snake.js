let canvas = document.getElementById('canvas_playArea');
let ctx = canvas.getContext("2d");
let rows = 20;
let columns = 20;
let box_height = canvas.height / rows;;
let box_width = canvas.width / columns;
let snake = [{ x: 5, y: 5 }];
let food;

//generateRandomCoordinates().x_value;
//food = generateRandomCoordinates();
placeFood();
draw();



//function for drawing canvas background and elements within canvas
function draw() {
    //draw background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //draw food
    drawElementOnCanvas('yellow', food.x, food.y)
    //draw snake
    snake.forEach(snakePart => drawElementOnCanvas('white', snakePart.x, snakePart.y));
}

//generic function for drawing elements on the canvas, like food or snake parts
function drawElementOnCanvas(color, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x * box_width, y * box_height, box_width, box_height)
}

//function for generating new food coordinates
function placeFood() {
    food = { x: Math.floor(Math.random() * columns), y: Math.floor(Math.random() * rows) };
}

