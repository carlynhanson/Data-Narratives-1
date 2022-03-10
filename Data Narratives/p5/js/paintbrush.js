let furby
let furbyBrushBool = false
let ellipseBrushBool = false

let counter = 0

function preload(){
  furby = loadImage('images/furby.png')
}

function setup(){
createCanvas(windowWidth, windowHeight)

background(255)
imageMode(CENTER)

}

function draw(){

  if(ellipseBrushBool == true){
    ellipseBrush()
  }

  if(furbyBrushBool == true)
    furbyBrush()
}

function furbyBrush(){
  if(mouseIsPressed == true){
    image(furby, mouseX, mouseY, 40, 40)
  }
}

function ellipseBrush(){
  if(mouseIsPressed == true){
    fill(random(255), random(255), random(255), 50)
    ellipse(mouseX, mouseY, 50, 50)
  }
}

function keyPressed(){
    if(key == 'e'){
      ellipseBrushBool = true
    }

    if(key == 'f'){
      furrbyBrushBool = true

    }

    if(key == 'c'){
      background(255)
      furbyBrushBool = false
      ellipseBrushBool = false
    }
  }
