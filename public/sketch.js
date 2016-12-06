var socket

function setup() {
  createCanvas(1900, 800)
  background(51)

  socket = io.connect('http://draw-with-me.surge.sh/public')
  socket.on('mouse', newDrawing)
}

function newDrawing(data) {
  fill(190, 0, 20)
  noStroke()
  ellipse(data.x, data.y, 30, 30)

}

function mouseDragged() {
  console.log('sending', mouseX + ',' + mouseY)

  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data)
  fill(190)
  noStroke()
  ellipse(mouseX, mouseY, 30, 30)
}

function draw() {

}
