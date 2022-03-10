let ellipseX
let ellipseY
let mouthHeight = 100
let furby

function preload(){
  furby = loadImage('images/furby.png')

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  print(ellipseX)

  ellipseX = random(50, windowWidth - 50)
  ellipseY = random(50, windowWidth - 50)
  rectMode(CENTER)
  imageMode(CENTER)

}

function draw(){
  if(mouseIsPressed == true){
    background(248, 83, 45)
  }else{
    background(23, 192, 42)
  }

image(furby, mouseX, mouseY, 50, 50)


stroke(30, 200, 100)
strokeWeight(1)
line(20, 40, 300, 200)


if(keyIsPressed == true){
  strokeWeight(10)
  stroke(random(255), random(255), random(255))
  mouthWeight = 0
}else{
  strokeWeight(5)
  stroke(200, 100, 50)
  mouthWeight = 100
}

  if(mouseX > windowWidth/2){
      fill(30, 230, 100)
  }else{
    fill( 200, 100, 60)
  }


  ellipse(300, 200, 100)
  ellipse(800, 200, 50)
  ellipse(ellipseX, ellipseY, 100)

  //rect(windowWidth/2, windowHeight/2, 200 mouthHeight)




}
