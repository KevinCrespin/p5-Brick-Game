class Brick {
    constructor(posX, posY, brickW, brickH) {
        this.posX = posX;
        this.posY = posY;
        this.brickW = brickW;
        this.brickH = brickH;
    }

    display(bc, sc) {
        fill(bc);
        strokeWeight(3);
        stroke(sc);
        rect(this.posX, this.posY, this.brickW, this.brickH);
    }
}