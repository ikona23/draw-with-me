
var socket

function setup() {
  createCanvas(800, 800)
  background(51)

  socket = io.connect('http://localhost:3000')

}

function mouseDrag() {
  console.log(mouseX + ',' + mouseY)
}

function draw() {
  fill(190)
  noStroke()
  ellipse(mouseX, mouseY, 30, 30)

}
