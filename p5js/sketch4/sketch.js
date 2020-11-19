function setup() {
    createCanvas(700, 700);
    background(1000)
  }
  
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(245, 114, 197, 100);
      circle(mouseX, mouseY, 25)
      }
    }
  
  
  function mouseClicked() {
    fill(12, 22, 162, 100);
    circle(mouseX, mouseY, 100)
  }