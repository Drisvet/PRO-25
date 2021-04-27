
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var paper;
var groundObject, dustbinObj,paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObject.display();
  dustbinObj.display();
  paperObject.display();

  drawSprites();

  class paper () {
  var options={
	  isStatic:false,
	  restitution:0.3,
	  friction:0.5,
	  density:1,2
  }

  Matter.Bodies.circle(10,15,30,true);
}
function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paperOpject.body,paperObject.body.position,{x:85,y:-85})
	}
}
}



