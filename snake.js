//variables vor canvas and context
let canvas = document.getElementById('canvas_playArea');
let ctx = canvas.getContext("2d");
//variables for game area and coordinate system
let rows = 20;
let columns = 20;
let box_height = canvas.height / rows;;
let box_width = canvas.width / columns;
//variables for game objects
let snake = [{ x: columns / 2 - 1, y: rows / 2 - 1 }];
let food;
//other variables
let direction = 'LEFT';

//place food initially at random position
placeFood();
//draw canvas and elements initially
draw();
//execute orchestrating game function continuously 
setInterval(executeGame, 250);
//listen to user input via keyboard
document.addEventListener('keydown', keyDown);

//function for orchestrating game functionalities
function executeGame() {
    //check if first part of snake reaches border of game or snake bites itself
    if (snake[0].x >= columns || snake[0].x < 0 || snake[0].y >= rows || snake[0].y < 0 ||
        snake.slice(1).find(part => part.x == snake[0].x && part.y == snake[0].y)) {
        snake = [{ x: columns / 2 - 1, y: rows / 2 - 1 }];
        direction = 'LEFT';
        placeFood();
    }

    //check, if first part of snake is on position of food (if yes, place new food and add one part to the snake)
    if (snake[0].x == food.x && snake[0].y == food.y) {
        snake = [{ x: food.x, y: food.y }, ...snake];
        //place new food item
        placeFood();
    }

    //move all snake parts
    shiftSnake();


    //move first part of snake one step forward
    switch (direction) {
        case 'RIGHT': snake[0].x++;
            break;
        case 'LEFT': snake[0].x--;
            break;
        case 'UP': snake[0].y--;
            break;
        case 'DOWN': snake[0].y++;
            break;
    };


}

//function for shifting all snake parts
function shiftSnake() {
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }
}

//function for drawing canvas background and elements within canvas
function draw() {
    //draw background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //draw food
    drawElementOnCanvas('yellow', food.x, food.y)
    //draw snake
    snake.forEach(snakePart => drawElementOnCanvas('white', snakePart.x, snakePart.y));
    //update canvas constantly
    requestAnimationFrame(draw);
}

//generic function for drawing elements on the canvas, like food or snake parts
function drawElementOnCanvas(color, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x * box_width, y * box_height, box_width - 2, box_height - 2)
}

//function for generating new food coordinates
function placeFood() {
    food = { x: Math.floor(Math.random() * columns), y: Math.floor(Math.random() * rows) };
}

//function for evaluating user input and changing movement direction
function keyDown(e) {
    switch (e.keyCode) {
        case 37: direction = 'LEFT';
            break;
        case 38: direction = 'UP';
            break;
        case 39: direction = 'RIGHT';
            break;
        case 40: direction = 'DOWN';
            break;
    }
}