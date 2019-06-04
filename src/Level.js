class Level {
    constructor() {
        this.level = 1;
        this.levelStarted = 1;
        this.bricksPerRow = 1;
        this.rowsOfBricks = 1;
    }

    /**
     * @desc Creates level's brick pattern
     * @param Array bricks
     * @param Integer brickW, bricksH
     */

    checker(bricks, bricksW, bricksH) {
        if (this.level == 1) {
            if (this.levelStarted == 1) {
                this.bricksPerRow = 8;
                this.rowsOfBricks = 4;
                for (let i = 0; i < this.rowsOfBricks; i++) {
                    for (let j = 0; j < this.bricksPerRow; j++) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 350, bricksW, bricksH));
                    }
                }
                this.levelStarted--;
            }
        }
        if (this.level == 2) {
            if (this.levelStarted == 1) {
                this.bricksPerRow = 8;
                this.rowsOfBricks = 8;
                for (let i = 0; i < this.rowsOfBricks; i++) {
                    for (let j = 0; j < this.bricksPerRow; j++) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 350, bricksW, bricksH));
                    }
                }
                this.levelStarted--;
            }
        }
        if (this.level == 3) {
            if (this.levelStarted == 1) {
                this.bricksPerRow = 8;
                this.rowsOfBricks = 8;
                for (let i = 0; i < this.bricksPerRow; i++) {
                    for (let j = 0; j <= i; j++) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 350, bricksW, bricksH));
                    }
                }
                this.levelStarted--;
            }
        }
        if (this.level == 4) {
            if (this.levelStarted == 1) {
                this.bricksPerRow = 8;
                this.rowsOfBricks = 8;
                for (let i = 0; i < this.bricksPerRow; i++) {
                    for (let j = this.rowsOfBricks - 1; j >= i; j--) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 350, bricksW, bricksH));
                    }
                }
                this.levelStarted--;
            }
        }
        if (this.level == 5) {
            if (this.levelStarted == 1) {
                this.bricksPerRow = 8;
                this.rowsOfBricks = 12;
                for (let i = 0; i < this.rowsOfBricks; i++) {
                    for (let j = 0; j < this.bricksPerRow; j++) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 350, bricksW, bricksH));
                    }
                }
                this.levelStarted--;
            }
        }
        if (this.level == 6) {
            if (this.levelStarted == 1) {
                this.bricksPerRow = 8;
                this.rowsOfBricks = 8;
                for (let i = 0; i < this.bricksPerRow; i++) {
                    for (let j = this.rowsOfBricks - 1; j >= i; j--) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 190, bricksW, bricksH));
                    }
                }
                for (let i = 0; i < this.bricksPerRow; i++) {
                    for (let j = 0; j <= i; j++) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 350, bricksW, bricksH));
                    }
                }
                this.levelStarted--;
            }
        }
        if (this.level == 7) {
            if (this.levelStarted == 1) {
                this.bricksPerRow = 8;
                this.rowsOfBricks = 8;
                for (let i = 0; i < this.bricksPerRow; i++) {
                    for (let j = this.rowsOfBricks - 1; j >= i; j--) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 350, bricksW, bricksH));
                    }
                }
                for (let i = 0; i < this.bricksPerRow; i++) {
                    for (let j = 0; j <= i; j++) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 190, bricksW, bricksH));
                    }
                }
                this.levelStarted--;
            }
        }
        if (this.level == 8) {
            if (this.levelStarted == 1) {
                this.bricksPerRow = 8;
                this.rowsOfBricks = 16;
                for (let i = 0; i < this.rowsOfBricks; i++) {
                    for (let j = 0; j < this.bricksPerRow; j++) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 350, bricksW, bricksH));
                    }
                }
                this.levelStarted--;
            }
        }
        if (this.level == 9) {
            if (this.levelStarted == 1) {
                this.bricksPerRow = 8;
                this.rowsOfBricks = 8;
                for (let i = 0; i < this.bricksPerRow; i++) {
                    for (let j = this.rowsOfBricks - 1; j >= i; j--) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 240, bricksW, bricksH));
                    }
                }
                for (let i = 0; i < this.bricksPerRow; i++) {
                    for (let j = 0; j <= i; j++) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 400, bricksW, bricksH));
                    }
                }
                for (let i = 0; i < this.bricksPerRow; i++) {
                    for (let j = this.rowsOfBricks - 1; j >= i; j--) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 20, bricksW, bricksH));
                    }
                }
                for (let i = 0; i < this.bricksPerRow; i++) {
                    for (let j = 0; j <= i; j++) {
                        bricks.push(new Brick((bricksW * j) - 205, (20 * i) - 160, bricksW, bricksH));
                    }
                }
                this.levelStarted--;
            }
        }
    }

    /**
     * @desc Modifies level's properties
     * @param Object ball, paddle
     * @param Boolean runOnce, gameStarted
     */

    modifier(runOnce, gameStarted, ball, paddle) {
        if (this.level == 1) {
            bc2 = color('#FFA100');
            if (runOnce == 1 && gameStarted == 0) {
                ball.speedX *= 1;
                ball.speedY *= 1;
                paddle.paddleSpeed *= 1;
                return 0;
            }
        }
        if (this.level == 2) {
            bc2 = color('#F44336');
            if (runOnce == 1 && gameStarted == 0) {
                ball.speedX *= 1.14;
                ball.speedY *= 1.14;
                paddle.paddleSpeed *= 1.025;
                return 0;
            }
        }
        if (this.level == 3) {
            bc2 = color('#E91E63');
            if (runOnce == 1 && gameStarted == 0) {
                ball.speedX *= 1.28;
                ball.speedY *= 1.28;
                paddle.paddleSpeed *= 1.05;
                return 0;
            }
        }
        if (this.level == 4) {
            bc2 = color('#763BDF');
            if (runOnce == 1 && gameStarted == 0) {
                ball.speedX *= 1.42;
                ball.speedY *= 1.42;
                paddle.paddleSpeed *= 1.075;
                return 0;
            }
        }
        if (this.level == 5) {
            bc2 = color('#00BAF0');
            if (runOnce == 1 && gameStarted == 0) {
                ball.speedX *= 1.56;
                ball.speedY *= 1.56;
                paddle.paddleSpeed *= 1.1;
                return 0;
            }
        }
        if (this.level == 6) {
            bc2 = color('#8BDB4A');
            if (runOnce == 1 && gameStarted == 0) {
                ball.speedX *= 1.70;
                ball.speedY *= 1.70;
                paddle.paddleSpeed *= 1.125;
                return 0;
            }
        }
        if (this.level == 7) {
            bc2 = color('#FFEB3B');
            if (runOnce == 1 && gameStarted == 0) {
                ball.speedX *= 1.94;
                ball.speedY *= 1.94;
                paddle.paddleSpeed *= 1.15;
                return 0;
            }
        }
        if (this.level == 8) {
            bc2 = color('#F9690E');
            if (runOnce == 1 && gameStarted == 0) {
                ball.speedX *= 2;
                ball.speedY *= 2;
                paddle.paddleSpeed *= 1.175;
                return 0;
            }
        }
        if (this.level == 9) {
            bc2 = color('#F03434');
            if (runOnce == 1 && gameStarted == 0) {
                ball.speedX *= 2.3;
                ball.speedY *= 2.3;
                paddle.paddleSpeed *= 1.2;
                return 0;
            }
        }
    }
}