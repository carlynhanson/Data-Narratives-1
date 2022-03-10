let ballX
let ballY
let ballSpeedX
let ballSpeedY

let score = 0

let mouseCollide

function setup(){
  createCanvas(windowWidth, windowHeight)
  ballX = random(15, windowWidth - 15)
  ballY = random(15, windowHeight - 15)
  ballSpeedX = 2
  ballSpeedY = 2
  textAlign(CENTER)
// if background was relocated here, ball leaves trail
}

function draw(){
    background(6,57,112)
    fill(118, 180, 200)
    textSize(50)
    text("Score: " + score + "00", windowWidth/2, 100)

    mouseCollide = dist(ballX, ballY, mouseX, mouseY)

    //change the speed of the balll
    ballX = ballX + ballSpeedX
    ballY = ballY + ballSpeedY

    //change the direction of the ball
    if(ballX >= windowWidth - 15 || ballX <= 15){
        ballSpeedX = ballSpeedX * -1
    }
    if(ballY >= windowHeight - 15 || ballY <= 15){
        ballSpeedY = ballSpeedY * -1
    }
    //if ball gets tagged, replace ball and add to Score
    if(mouseCollide < 15){
      score = score + 1 //could also do score++ for incremental increase of 1
      ballX = random(15, windowWidth - 15)
      ballY = random(15, windowHeight - 15)
      ballSpeedX = ballSpeedX * 1.2
      ballSpeedY = ballSpeedY * 1.2

    }


    ellipse(ballX, ballY, 30, 30)


}

funtion(windowResized){
resizeCanvas(windowWidth, windowHeight)

}
