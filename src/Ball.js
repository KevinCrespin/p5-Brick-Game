class Ball {

  constructor(paddle) {
    this.radius = 12.5;
    this.posX = paddle.posX + paddle.paddleW / 2;
    this.posY = paddle.posY - paddle.paddleH + 1;
    this.speedX = 0;
    this.speedY = 0;

    this.score = 0;
    this.lives = 3;
  }

  display(bc) {
    fill(bc);
    noStroke();
    ellipse(this.posX, this.posY, this.radius, this.radius);
  }


  /**
   * @desc Increases ball's X and Y position to a pre-set speed
   */

  direction() {
    this.posX += this.speedX;
    this.posY += this.speedY;
  }


  /**
   * @desc Changes direction of ball if is in collision with a wall's hitbox
   * @param Integer ballMinPosX, ballMinPosY, ballMaxPosX, 
   * ballMaxPosY - ball position limits
   */

  isCollidingWithWall(ballMinPosX, ballMinPosY, ballMaxPosX, ballMaxPosY, paddle, gameStarted) {
    if (this.posX <= ballMinPosX) { // Left wall's hitbox
      this.speedX = -this.speedX;
      this.posX = ballMinPosX;
    } else if (this.posX >= ballMaxPosX) { // Right wall's hitbox
      this.speedX = -this.speedX
      this.posX = ballMaxPosX
    }
    if (this.posY <= ballMinPosY) { // Top wall's hitbox
      this.speedY = -this.speedY;
      this.posY = ballMinPosY;
    } else if (this.posY > ballMaxPosY + this.radius * 2) { // Game Over!
      if (this.lives > 0) {
        this.speedX = 0;
        this.speedY = 0;
        this.posX = paddle.posX + paddle.paddleW / 2;
        this.posY = paddle.posY - paddle.paddleH + 1;
        this.lives--;
        gameStarted = 1;
      } else {
        this.speedX = 0;
        this.speedY = 0;
        this.posY = ballMaxPosY + this.radius;
        this.lives--;
        gameStarted = 1;
      }
    }
    return gameStarted;
  }


  /**
   * @desc Changes direction of ball if is in collision with the paddle's hitbox
   * @param object paddle
   */

  isCollidingWithPaddle(paddle, beep) {
    if ((this.posY >= paddle.posY - this.radius / 2) && (this.posY <= paddle.posY) && (this.posX >= paddle.posX - this.radius) && (this.posX <= paddle.posX + paddle.paddleW + this.radius)) {
      this.speedY = -this.speedY;
      this.score = this.score + 500;
      // Reposition ball out of the hitbox (if inside) to avoid bug
      if (this.posY >= paddle.posY) {
        this.posY = paddle.posY + this.radius + (paddle.paddleH / 2);
      } else if (this.posY <= paddle.posY) {
        this.posY = paddle.posY - this.radius / 2;
      }
      beep.play();
    }
  }

  /**
   * @desc Changes direction of ball if it's in collision with a brick's hitbox
   * @param object brick
   * @return Boolean if ball is colliding with brick
   */


  //TODO: GET ball X and Y position and + or - to ball X or Y position the X or Y ball speed respectivly, in order to get PAST position
  //TODO: based on boundaries change X, Y (or both) ball direction
  isCollidingWithBrick(brick) {
    if ((this.posY >= brick.posY - (this.radius / 2)) && (this.posY <= brick.posY + brick.brickH + (this.radius / 2)) && (this.posX >= brick.posX - (this.radius / 2)) && (this.posX <= brick.posX + brick.brickW + (this.radius / 2))) {
      let tmpPosX;
      let tmpPosY;
      // Get position prior collision
      // Going TR
      if (this.speedX > 0 && this.speedY < 0) { 
        tmpPosX = this.posX - Math.abs(this.speedX);
        tmpPosY = this.posY + Math.abs(this.speedY);
      }
      // Going BR
      else if (this.speedX > 0 && this.speedY > 0) {
        tmpPosX = this.posX - Math.abs(this.speedX);
        tmpPosY = this.posY - Math.abs(this.speedY);
      }
      // Going BL
      else if (this.speedX < 0 && this.speedY > 0) {
        tmpPosX = this.posX + Math.abs(this.speedX);
        tmpPosY = this.posY - Math.abs(this.speedY);
      }
      // Going TL
      else if (this.speedX < 0 && this.speedY < 0) {
        tmpPosX = this.posX + Math.abs(this.speedX);
        tmpPosY = this.posY + Math.abs(this.speedY);
      }

      // Change direction of ball
      if ((tmpPosY >= brick.posY - (this.radius / 2)) && (tmpPosY <= brick.posY + brick.brickH + (this.radius / 2))) {
        this.speedX = -this.speedX;
      } else if ((tmpPosX >= brick.posX - (this.radius / 2)) && (tmpPosX <= brick.posX + brick.brickW + (this.radius / 2))) {
        this.speedY = -this.speedY;
      } else {
        this.speedX = -this.speedX;
        this.speedY = -this.speedY;
      }

      return true;
    } else {
      return false;
    }
  }

  /**
   * @desc Changes the speed of ball to player's control
   * @return Do nothing if player wants to increase/decrase speed off limits
   */

  speedControl() {
    if (keyIsDown(87) || keyIsDown(UP_ARROW) || keyIsDown(104)) {
      if (Math.abs(this.speedX) <= 6 && Math.abs(this.speedY) <= 6) {
        this.speedX = this.speedX * 1.01;
        this.speedY = this.speedY * 1.01;
      } else {
        return;
      }
    }
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW) || keyIsDown(98)) {
      if (Math.abs(this.speedX) > 0.5 && Math.abs(this.speedY) > 0.5) {
        this.speedX = this.speedX * 0.99;
        this.speedY = this.speedY * 0.99;
      } else {
        return;
      }
    }
  }

  /**
   * @desc Changes the position of ball to player's control (for debuging purposes)
   */

  control() {
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW) || keyIsDown(100)) {
      this.posX -= 5;
    }
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW) || keyIsDown(102)) {
      this.posX += 5;
    }
    if (keyIsDown(87) || keyIsDown(UP_ARROW) || keyIsDown(104)) {
      this.posY -= 5;
    }
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW) || keyIsDown(98)) {
      this.posY += 5;
    }
  }

}