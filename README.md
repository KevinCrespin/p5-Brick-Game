# p5-Brick-Game

Brick Game using the p5.js library

### Play it!
#### WARNING: This game is meant to be played on full screen mode on a web browser and it cannot be played on phones or tablets. Please, press F11 on your keyboard to enter full screen mode or zoom out the page until no game assets are off screen. Thank you!
https://kevincrespin.github.io/p5-Brick-Game/

### Controls

(Move Right) Right Arrow, D, Num Pad 6 <br>
(Move Left) Left Arrow, A, Num Pad 4 <br>
(Start Game) Space <br>
(Restart) R <br>
(Increase level) Press the "↑" icon located at the top-left corner <br>
(Decrease level) Press the "↓" icon located at the top-left corner <br>

### Screen Shots

![Game Example](BrickGame.gif)


## Installed Dependencies

### p5.js

[p5.js](http://p5js.org) is a Javascript library with the goal of making coding accessible for artists, designers, educators, and beginners. It is a reinterpretation of [Processing](http://processing.org), by Casey Reas and Ben Fry, initiated by artist [Lauren McCarthy](http://www.lauren-mccarthy.com/).

## Complications

* The game doesn't contain a complex set of physics, the ball just changes direction x and y when it collides with another object.
* The speed of the ball doesn't change, unless a new level in reached.
* The bricks' collision box behaves unconstently and it may generate akward situations.
* Most of the game assets positions are hard-coded, which makes screen responsiveness impossible due to how p5.js library works.
* The game was meant to be played on full-screen, and only on full screen; the game reads your screen resolution and uses it to create all the game assets acordingly. If not on full screen mode, the game appears to be off-screen.
* There is an existent bug. When the you lose the ball without moving the paddle since you start the game, the ball doesn't pause for your command to start the game in the next life.
* Levels were not exhaustedly tested, and the speed of the ball may be ackward in high levels and destroy many bricks in consequence. 
