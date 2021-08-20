var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround;

var cloudsGroup;
var obstaclesGroup, obstacle;

var score = 0;

var gameOver, restart;

function preload(){
trex = loadImage("images/imageedit_1_4400513290.png")
}

function setup() {
  createCanvas(800,400);
  trex = createSprite(200,182,20,50);
  trex.addAnimation(trex);

  ground = createSprite(500,217,2000,20);
  ground.x = ground.width/2;
  ground.velocityX = -(6+3*score/100)
}

function draw() {
  background(255,255,255);  

  trex.display()
  drawSprites();
}