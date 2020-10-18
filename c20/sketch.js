var ball,bat
function setup() {
  createCanvas(800,400);
  ball=createSprite(400, 200, 50, 50);
  bat=createSprite(200,100,40,40);
  ball.shapeColor='blue';
  bat.shapeColor='brown';
  ball.debug=true
  bat.debug=true
}

function draw() {
  background(0,0,0);  
  drawSprites();
  bat.x=World.mouseX;
  bat.y=World.mouseY;
  if(bat.x-ball.x<bat.width/2+ball.width/2 && ball.x-bat.x<bat.width/2+ball.width/2 &&
    bat.y-ball.y<bat.height/2+ball.height/2 && ball.y-bat.y<bat.height/2+ball.height/2)
{
    ball.shapeColor='red';
    bat.shapeColor='red'
  }
else {
  ball.shapeColor='blue';
  bat.shapeColor='brown'   
  }
}