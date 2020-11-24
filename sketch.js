
var monkey , monkeyrunning;
var ground;
var banana ,bananaimage, obstacle, obstacleimage;
var bananagroup, obstaclegroup;
var score;
var survivaltime;
function preload(){
  
  
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaimage = loadImage("banana.png");
  obstaceimage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20); 
  monkey.addAnimation("moving",monkeyrunning);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  score = 0;
  survivaltime = 0;
  
  bananagroup = new Group();
  obstaclesgroup = new Group();
}


function draw() {
  background("white");
  //console.log(ground.x);
  console.log(frameCount);
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  if(keyDown ("space")){
   monkey.velocityY = -10;
  }
   monkey.velocityY = monkey.velocityY + 0.8;
   monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("black");
  text("Score: "+ score, 500,50);  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/60) 
  text("Survival Time: "+survivaltime , 100,50);

   banana();
   obstacles();
   drawSprites(); 
}
function banana(){
  if (frameCount % 80 === 0) { 
    var banana = createSprite(405,220,40,10); 
    banana.y = Math.round(random(120,220));
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaimage);
     banana.scale=0.08;
    
    //add each banana to the group
    bananagroup.add(banana);
  }
}
function obstacles() {
  if(frameCount % 200 === 0) {
    var obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -5;
    
    //add image to the obstacle 
    obstacle.addImage(obstaceimage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesgroup.add(obstacle);
  }
}





