# HW6
function setup() {
  createCanvas(400, 400);
  background(255);
  colorMode(HSB);
  noStroke();
}

var diameter = 10;

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

//function keyPressed() {
function keyPressed(r) {
  print(key);
  if (key == 'R') {
    fill(0, 100, 100);
  } else if (key == 'G') {
    fill(100, 70, 100);
  } else if (key == 'B') {
    fill(210, 100, 100);
  } else if (key == 'T') {
    fill(180, 100, 100);
  } else if (key == 'Y') {
    fill(60, 100, 100);
  } else if (key == 'P') {
    fill(310, 100, 100);
  }

  if (key == 1) {
    diameter = 10;
  } else if (key == 2) {
    diameter = 20;
  } else if (key == 3) {
    diameter = 30;
  }

  if (key == 'E') {
    diameter = 30;
    fill(0, 0, 100);
  }
}

function setup() {
  createCanvas(400, 400);
  background(255);
  colorMode(HSB);
  noStroke();
  
var diameter = 10;

function draw() {
  if (keyIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}
}
