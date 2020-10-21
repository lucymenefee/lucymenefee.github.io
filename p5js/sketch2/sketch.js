function setup() {
  createCanvas(500, 500);
  background(74)
}


function draw() {
  if (mouseIsPressed) {
    fill(0, 900, 200);
    square(mouseX, mouseY, 40);
  }
}

function mouseClicked() {
  fill(200, 75, 250);
  square(mouseX, mouseY, 100)
}
