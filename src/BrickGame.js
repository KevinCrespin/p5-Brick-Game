let rectW = 200;
let rectH = 400;

let ball;
let tmpBallSpeedX;
let tmpBallSpeedY;
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
let gamePaused = 1;
let runOnce;
let level;

let bc;
let bc2;

let letters = [];
let beep;
let info;
let git;
let leaderboard;
let increaseLevel;
let decreaseLevel;

function setup() {
  createCanvas(windowWidth, windowHeight);

  level = new Level();
  paddle = new Paddle(-40, ballMaxPosY - 50, 80, 8);
  ball = new Ball(paddle);
  beep = new Audio("sounds/collisionPaddle.wav");

  letters.push(new Text("G", -145, 2));
  letters.push(new Text("A", -105, 4));
  letters.push(new Text("M", -70, 3));
  letters.push(new Text("E", -30, 2));
  letters.push(new Text("O", 20, 3));
  letters.push(new Text("V", 55, 4));
  letters.push(new Text("E", 85, 1));
  letters.push(new Text("R", 115, 2));

  info = createButton("ⓘ", 1);
  increaseLevel = createButton("↑", 1);
  decreaseLevel = createButton("↓", 1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  bc = color("#282B3C");
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

  // Start Game
  if (key === " " && ball.lives >= 0) {
    if (gameStarted == 1) {
      ball.speedX = 4;
      ball.speedY = -4;
      gameStarted = 0;
      runOnce = 1;
    }
  }

  fill(bc2);
  rect((windowWidth - rectW * 2) / 2 - ball.radius / 2 - 100, (windowHeight - rectH * 2) / 2 - ball.radius / 2, (rectW * 2) + ball.radius, (rectH * 2) + ball.radius);

  // Ball properties & paddle control
  ball.direction();
  ball.isCollidingWithPaddle(paddle, beep);
  gameStarted = ball.isCollidingWithWall(ballMinPosX, ballMinPosY, ballMaxPosX, ballMaxPosY, paddle, gameStarted);
  paddle.control(paddleMinPosX - 5, paddleMaxPosX + 5, ball, gameStarted);

  translate(windowWidth / 2 - 100, windowHeight / 2);
  ball.display(bc);
  paddle.display(bc);

  for (let i = bricks.length - 1; i >= 0; i--) {
    bricks[i].display(bc, bc2);
    if (ball.isCollidingWithBrick(bricks[i], beep)) {
      bricks.splice(i, 1);
      ball.score = ball.score + 1000;
    }
  }

  // Score & level
  fill(color(255));
  noStroke();
  textSize(48);
  textAlign(LEFT);

  ball.score = ball.score + Math.abs(0.5 * Math.abs(ball.speedX) / 3);
  text(Math.round(ball.score), 218, -300);
  text("Level " + level.level, 218, -360);
  textSize(40);

  // Lives
  if (ball.lives > -1) {
    text(" x " + ball.lives, 266, 391);
  } else {
    // Game over
    for (let i = letters.length - 1; i >= 0; i--) {
      letters[i].display();
      letters[i].move();
      letters[i].bounce();
    }
    text(" x 0", 266, 391);
  }

  fill(bc2);
  ellipse(245, 378, 40, 40);

  // Buttons
  button(info, 20, 10, "info");
  button(increaseLevel, 80, 10, "increaseLevel");
  button(decreaseLevel, 100, 10, "decreaseLevel");

}

/**
 * @desc Game Controls (Excluding paddle cotrol)
 */

function keyPressed() {
  if (key === "p") {
    if (gamePaused == 1) {
      tmpBallSpeedX = ball.speedX;
      tmpBallSpeedY = ball.speedY;
      gamePaused = 0;
    }
    ball.speedX = 0;
    ball.speedY = 0;
  }
  if (key === "u") {
    ball.speedX = tmpBallSpeedX;
    ball.speedY = tmpBallSpeedY;
    gamePaused = 1;
  }
  if (key === "r") {
    location.reload();
  }
}

/**
 * @desc Creates buttons
 * @param Button button
 * @param Integer posX, posY
 * @param String operation
 */

function button(button, posX, posY, operation) {
  button.style("background-color", bc);
  button.position(posX, posY);
  button.mouseOver(function hoverIn() {
    button.style("color", bc2);
  });
  button.mouseOut(function hoverOut() {
    button.style("color", color(255));
  })
  button.mousePressed(function clicked() {
    switch (operation) {
      case "info":
        window.open("https://github.com/KevinCrespin/p5-BrickGame");
        break;
      case "increaseLevel":
        if (level.level <= 8) {
          bricks = [];
        }
        break;
      case "decreaseLevel":
        if (level.level >= 2) {
          level.level = level.level - 2;
          bricks = [];
        }
        break;
    }
  });
}