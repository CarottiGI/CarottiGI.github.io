let = zBereich;

function setup() {
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0, 0); //Links oben
  zBereich.style('z-index', '-1'); //Verschiebung auf der Z-Achse


}

function draw() {
  fill(255*mouseX/windowWidth,255*mouseY/windowWidth,15)
  if (mouseIsPressed) {
    noStroke();
    circle(mouseX,mouseY,20);
  }
}
