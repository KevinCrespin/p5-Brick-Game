class Text {

    constructor(letter, posX, displacement) {
        this.letter = letter;
        this.posX = posX;
        this.speedY = 1;
        if (displacement == 1) {
            this.posY = 0;
            this.maxY = 5;
            this.minY = -10;
        } else if (displacement == 2) {
            this.posY = -5;
            this.maxY = 10;
            this.minY = -5;
        } else if (displacement == 3) {
            this.posY = 5;
            this.maxY = 10;
            this.minY = -5;
        } else if (displacement == 4) {
            this.posY = -5;
            this.maxY = 5;
            this.minY = -10;
        }
    }

    display() {
        text(this.letter, this.posX, this.posY);
    }

    /**
     * @desc Increases letter's Y position to a pre-set Y speed
     */
    move() {
        this.posY += this.speedY;
    }

    /**
     * @desc Changes Y direction of letter if is in collision with maxY or minY position
     */

    bounce() {
        if (this.posY <= this.minY) {
            this.speedY = -this.speedY;
        } else if (this.posY >= this.maxY) {
            this.speedY = -this.speedY;
        }
    }
}