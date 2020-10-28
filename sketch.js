
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

var ball,ground;
var bin1,bin2,bin3;
var paperimg;

function preload(){
paperimg=loadImage("paper.png");
boximg=loadImage("dustbingreen.png");
	
}

function setup() {
  createCanvas(800, 700);
 
  engine = Engine.create();
	world = engine.world;
ball=new Paper(200,650,20);
ground=new Ground(400,675,800,20);
bin1=new Box(650,620,100,130);
bin2=new Box(695,620,10,100);
bin3=new Box(605,620,10,100);



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(225);
  rectMode(CENTER);
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  keypressed();
  drawSprites();
 
}

function keypressed(){

if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-25});
}
}