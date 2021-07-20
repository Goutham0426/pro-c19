var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var score;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);

  

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg)
 ghost.scale =0.3;

 doorsGroup = new Group();
 climbersGroup = new Group();
 invisibleBlockGroup = new Group();

}

function draw() {

  fill("red")
  text("Score: "+ score, 500,50);
textSize(40);





  background(0);



 

  if(gameState === "play"){

   


if(keyDown("left_arrow")){
ghost.x = ghost.x-3;

}
if(keyDown("right_arrow")){
  ghost.x = ghost.x+3;
  
  }
  if(keyDown("space")){
    ghost.velocityY = -10;
    
    }
ghost.velocityY = ghost.velocityY+0.8;
  
  
  if(tower.y > 400){
      tower.y = 300
    }
    if(climbersGroup.isTouching(ghost)){ 
      ghost.velocityY = 0; 
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
       ghost.destroy();
       climbersGroup.destroyEach();
       invisibleBlockGroup.destroyEach();
       doorsGroup.destroyEach();
       tower.velocityY = 0;
      
       gameState = "end"
       }




if(gameState)
  spawnDoors();

  score = score + Math.round(getFrameRate()/150);
  } 


drawSprites();
}

function spawnDoors(){
if (frameCount % 240 ===0){

var door = createSprite(200,-50);
var climber = createSprite(200,10);
var invisibleBlock = createSprite(200,15);

door.addImage(doorImg);
climber.addImage(climberImg);

invisibleBlock.width = climber.width
invisibleBlock.height = 2;

door.x = Math.round(random(120,400));
climber.x = door.x;
invisibleBlock.x = door.x;

door.velocityY = 1;
invisibleBlock.velocityY = 1;
climber.velocityY = 1;

ghost.depth = door.depth;
 ghost.depth +=1;

 door.lifetime =800;
 climber.lifetime =800;
 invisibleBlock.lifetime =800;

 doorsGroup.add(door); 
 invisibleBlock.debug = true;

 climbersGroup.add(climber);
  invisibleBlockGroup.add(invisibleBlock);


}





}






