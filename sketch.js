var x = 0;
var y = 0;

var shootx = 0;
var shooty = 0;
var vx = 0;
var vy = 0;
var shot = false;

var up = false, down = false, left = false, right = false;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  var c = document.querySelector("canvas");
  c.style.position = "absolute";
  c.style.left = "0px";
  c.style.top = "0px";
}

function keyPressed() {
  if(keyCode == UP_ARROW)
    up = true;
  if(keyCode == DOWN_ARROW)
    down = true;
  if(keyCode == LEFT_ARROW)
    left = true;
  if(keyCode == RIGHT_ARROW)
    right = true;
  if(keyCode == 32) {

  }
}

function mouseClicked() {
  shot = true;
  var theta = Math.atan2(mouseY - (y + 25), mouseX - (x + 25));
  vx = 3.5*Math.cos(theta);
  vy = 3.5*Math.sin(theta);
  shotx = x + 25;
  shoty = y + 25;
}

function keyReleased() {
  if(keyCode == 38)
    up = false;
  if(keyCode == 40)
    down = false;
  if(keyCode == 37)
    left = false;
  if(keyCode == 39)
    right = false;
}

function draw() {
  background(0, 220, 200);
  if(up) y--;
  if(down) y++;
  if(left) x--;
  if(right) x++;
  fill(0, 180, 30);
  rect(x, y, 50, 50);
  if(shot) {
    fill(255, 0, 0);
    ellipse(shotx, shoty, 7, 7);
    shotx += vx;
    shoty += vy;
  }
}
