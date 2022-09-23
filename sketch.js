function setup() {
  limitx = 600;
  limity = 400;
  createCanvas(limitx, limity);
  speed = 15;
  x = 50;
  vx = speed;
  y = 50;
  vy = speed;
  d = 30;
  switchbg = 0;
}

function draw() {
  if (switchbg == 0) {
    background(75);
  } else {
    background(255);
  }
  if (x >= limitx-(d/2)) {
    vx = -1*vx;
  } if (x <= 0+(d/2)) {
    vx = -1*vx;
  } 
  
  if (y >= limity-(d/2)) {
    vy = -1*vy;
  } if (y < 15) {
    vy = -1*vy;
  }
  x = x+vx
  y = y+vy
  fill(255, 150, 100);
  circle(x, y, d);
}
