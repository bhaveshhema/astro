var astronaut;
var sleep, brush, eat, gym, bath, move, backGround;
var bg;

function preload () {
  bg = loadImage("images/iss.png");
  sleep = loadImage("images/sleep.png");
  brush = loadImage("images/brush.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  gym = loadAnimation("images/gym1.png", "images/gym11.png", "images/gym12.png", "images/gym2.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
}

function setup() {
  createCanvas(400, 400);
  
  backGround=createSprite(400,400);
  backGround.addImage(bg);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(220);
  
  drawSprites();
  
  edges= createEdgeSprites();
  astronaut.collide(edges);
  
  textSize(15);
  fill('white');
  text("Instructions: ",50,50)
  
  textSize(10);
  fill('white');
  text("Up arrow = Brushing",50,60)
    
  textSize(10);
  fill('white');
  text("Down arrow = Gymming",50,70)
    
  textSize(10);
  fill('white');
  text("Left arrow = Eating",50,80)
    
  textSize(10);
  fill('white');
  text("Right arrow = Bathing",50,90)
  
  textSize(10);
  fill('white');
  text("m key = Moving",50,100)
  
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  
}