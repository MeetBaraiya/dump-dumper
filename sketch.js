const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paperObject,paper;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,480,1000,20);

	paper = new Paper (90,50,60);

	dastbin = new Dastbin (870,380,20,150);
	dastbin1 = new Dastbin (730,380,20,150);
    dastbin2 = new Dastbin (800,470,150,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);
  
  
 paper.display();
  ground.display();
 
  dastbin.display();
  dastbin1.display();
  dastbin2.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:280,y:-280});
		
	}
	
}

