const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 
	paper = new paper(100,600,10);
	
	ground = new ground (400,600,800,20);

	leftside = new dustbin (510,610,20,100);
	rightside = new dustbin (310,610,20,100);
	bottomside = new dustbin (width/2,height-50,200,10);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();

  bottomside.display();
  leftside.display();
  rightside.display();
  
  drawSprites();
 
}


function keyPressed(){
	 if (keyCode === UP_ARROW){
		  
		Matter.Body.applyForce(paperObject.body,paperObject.body.postion,{x:85,y:-85});
		
	 }
}
