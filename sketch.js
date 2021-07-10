var brush,bath,drink,eat,gym,iss,move,sleep,astronout,bg,move2;

function preload(){
iss=loadImage("images/iss.png");
bath=loadAnimation("images/bath1.png","images/bath2.png");
brush=loadAnimation("images/brush.png");
drink=loadAnimation("images/drink.png","images/drink2.png");
gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
move=loadAnimation("images/move.png","images/move1.png");
sleep=loadAnimation("images/sleep.png");



}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(windowWidth,windowHeight);
  bg.addAnimation("images",sleep);
  astronout=createSprite(300,230);
  astronout.addImage("images",sleep);
  astronout.scale=0.1;


}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(keyDown(UP_ARROW)){
    up();
  }
  if(keyDown(DOWN_ARROW)){
    down();
  }
  if(keyDown(LEFT_ARROW)){
    left();
  }
  if(keyDown(RIGHT_ARROW)){
    right();
  }
  
  if(keyDown(M)){
    m();
  }
}
function up(){
 
    astronout.changeAnimation("images",bath);
    astronout.y=450;
    astronout.velocityX=0;
    astronout.velocityY=0;
 
}

function down(){
 
  astronout.changeAnimation("images",drink);
  astronout.y=450;
  astronout.velocityX=0;
  astronout.velocityY=0;

}
function right(){
 
  astronout.changeAnimation("images",brush);
  astronout.y=450;
  astronout.velocityX=0;
  astronout.velocityY=0;

}
function left(){
 
  astronout.changeAnimation("images",gym);
  astronout.y=450;
  astronout.velocityX=0;
  astronout.velocityY=0;

}

function m(){
  astronout.changeAnimation("images",move);
  astronout.y=450;
  astronout.velocityX=0;
  astronout.velocityY=0;

}