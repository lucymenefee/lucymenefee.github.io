function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(150);
  for (var y = 0; y <= height; y += 50) {
    for (var x = 0; x <= width; x += 50) {
    fill(300, 300, 300);
    circle(x, y, 30);
    fill(255, 0, 0);
    line(x, y, 300, 300)
}
}
}