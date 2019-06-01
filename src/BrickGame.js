let rectW = 200;
let rectH = 400;

let ball;
let ballMinPosX = -rectW;
let ballMinPosY = -rectH;
let ballMaxPosX = rectW;
let ballMaxPosY = rectH;

let paddle;
let paddleMinPosX = -rectW;
let paddleMaxPosX = rectW;

let bricks = [];
let bricksW = 51.2;
let bricksH = 20;

let gameStarted = 1;
let runOnce;
let level;

let bc;
let bc2;

let letters = [];
let beep;
let info;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create objects
  level = new Level();
  paddle = new Paddle(-40, ballMaxPosY - 50, 80, 8);
  ball = new Ball(paddle);
  beep = new Audio('sounds/collisionPaddle.wav');

  letters.push(new Text('G', -145, 2));
  letters.push(new Text('A', -105, 4));
  letters.push(new Text('M', -70, 3));
  letters.push(new Text('E', -30, 2));
  letters.push(new Text('O', 20, 3));
  letters.push(new Text('V', 55, 4));
  letters.push(new Text('E', 85, 1));
  letters.push(new Text('R', 115, 2));

  info = createButton('ⓘ', 1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  bc = color('#282B3C');
  background(bc);

  // Create level
  level.checker(bricks, bricksW, bricksH);
  runOnce = level.modifier(runOnce, gameStarted, ball, paddle);

  // Next level
  if (bricks.length == 0) {
    ball.posX = paddle.posX + paddle.paddleW / 2
    ball.posY = paddle.posY - paddle.paddleH + 1;
    ball.speedX = 0;
    ball.speedY = 0;

    level.level++;
    level.levelStarted = 1;
    gameStarted = 1;
  }

  // Start game
  if (key === ' ' && ball.lives >= 0) {
    if (gameStarted == 1) {
      ball.speedX = 4;
      ball.speedY = -4;
      gameStarted = 0;
      runOnce = 1;
      key = 'a';
    }
  }

  fill(bc2);
  rect((windowWidth - rectW * 2) / 2 - ball.radius / 2 - 100, (windowHeight - rectH * 2) / 2 - ball.radius / 2, (rectW * 2) + ball.radius, (rectH * 2) + ball.radius);

  // Ball properties
  ball.direction();
  ball.isCollidingWithPaddle(paddle, beep);
  gameStarted = ball.isCollidingWithWall(ballMinPosX, ballMinPosY, ballMaxPosX, ballMaxPosY, paddle, gameStarted);

  // Game controll
  paddle.control(paddleMinPosX - 5, paddleMaxPosX + 5, ball, gameStarted);

  // Debugging tools
  //ball.control();
  //ball.speedControl();

  translate(windowWidth / 2 - 100, windowHeight / 2);

  // Display objects
  ball.display(bc);
  paddle.display(bc);

  for (let i = bricks.length - 1; i >= 0; i--) {
    bricks[i].display(bc, bc2);
    if (ball.isCollidingWithBrick(bricks[i], beep)) {
      bricks.splice(i, 1);
      ball.score = ball.score + 1000;
    }
  }

  // UI score and level
  fill(color(255));
  noStroke();
  textSize(48);
  textAlign(LEFT);

  ball.score = ball.score + Math.abs(0.5 * Math.abs(ball.speedX) / 3);
  text(Math.round(ball.score), 218, -300);

  text('Level ' + level.level, 218, -360);
  textSize(40);

  // UI lives
  if (ball.lives > -1) {
    text(' x ' + ball.lives, 266, 391);
  } else {
    // UI GAME OVER
    for (let i = letters.length - 1; i >= 0; i--) {
      letters[i].display();
      letters[i].move();
      letters[i].bounce();
    }
    text(' x 0', 266, 391);
  }

  fill(bc2);
  ellipse(245, 378, 40, 40);


  // UI info
  info.style('background-color', bc);

  // Info animaiton
  info.position(20, 10);

  // Info hover
  info.mouseOver(function hover() {
    info.style('color', bc2);
  });
  info.mouseOut(function hover() {
    info.style('color', color(255));
  })

  // Info redirect
  info.mousePressed(function changeBG() {
    window.open('https://github.com/KevinCrespin/p5-BrickGame');
  });
}
