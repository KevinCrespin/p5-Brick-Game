class Paddle {

  constructor(posX, posY, paddleW, paddleH) {
    this.posX = posX;
    this.posY = posY;
    this.paddleW = paddleW;
    this.paddleH = paddleH;
    this.paddleSpeed = 7;
  }

  display(bc) {
    fill(bc);
    noStroke();
    rect(this.posX, this.posY, this.paddleW, this.paddleH);
  }

  /**
   * @desc Increases/Decreases paddle's X position to player's control / Increases/Decreases ball's X position if game haven't started yet
   * @param Integer paddleMinPosX, paddleMaxPosX - paddle position limits
   * @param Boolean gameStarted - Game state
   * @param Object ball
   * @return Do nothing if player wants to move off limits
   */

  control(paddleMinPosX, paddleMaxPosX, ball, gameStarted) {
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW) || keyIsDown(100)) {
      if (this.posX > paddleMinPosX) {
        if (gameStarted == 1) {
          ball.posX -= this.paddleSpeed;
        }
        this.posX -= this.paddleSpeed;
      } else {
        return;
      }
    }
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW) || keyIsDown(102)) {
      if (this.posX < (paddleMaxPosX - this.paddleW)) {
        if (gameStarted == 1) {
          ball.posX += this.paddleSpeed;
        }
        this.posX += this.paddleSpeed;
      } else {
        return;
      }
    }
  }

}