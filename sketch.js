
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, canvas;
var ground;
var dustbinImage,dustbin;
var paper;
var sideLeft,sideBottom,sideRight;

function preload(){

  dustbinImage = loadImage("images/dustbingreen.png")

}

function setup() {
	canvas = createCanvas(1400, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(700,400,1400,30);
  paper = new Paper(300,200,70);

  sideLeft = new Dustbin(1090,300,10,150);
  sideBottom = new Dustbin(1170,380,150,10);
	sideRight = new Dustbin(1250,300,10,150);
  
	Engine.run(engine);
  
}


function draw() {
  background("gray");

  Engine.update(engine);

  sideBottom.display();
  sideLeft.display();
  sideRight.display();

  imageMode(CENTER);
  image(dustbinImage,1170,300,185,170);
  paper.display();
  ground.display();
  

  

  if(keyWentDown(UP_ARROW)){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-1000}); 
  }

}
