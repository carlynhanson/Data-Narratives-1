
let x = []
let y = []

let furby
let blop

function preload(){
  furby = loadImage("images/furby.png")
  blop = loadSound("Audio/Blop.mp3")
}

function setup(){
createCanvas(windowWidth, windowHeight)
imageMode(CENTER)

}

function draw(){
  background(0)
  for(let i=0; i < x.length; i++){
    image(furby, x[i], y[i], 60, 60)
  }

}

function mouseClicked(){
  x.push(mouseX)
  y.push(mouseY)
  blop.play()
}

function keyPressed(){
  if(key == 'x'){
    for(let i=0; i < x.length; i++){
      x.splice(i, x.length)
      y.splice(i, y.length)
      print(x.length)
    }
  }
}
