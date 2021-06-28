

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var roof,rope1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;
var engine,world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,100,300,30);
	

	
bobObject1 = new bob(250,300);
bobObject2 = new bob(300,300);
bobObject3 = new bob(350,300);
bobObject4 = new bob(400.300);
bobObject5 = new bob(450,300);

rope1 = new Rope(bobObject1.body,roof.body,-100,0);

 rope2 = new Rope(bobObject2.body,roof.body,-50,0);


 rope3 = new Rope(bobObject3.body,roof.body,0,0);
 

 rope4 = new Rope(bobObject4.body,roof.body,+50,0);


 rope5 = new Rope(bobObject5.body,roof.body,+100,0);

	
  
}


function draw() {
  background("white");
  Engine.update(engine);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  Engine.run(engine);
 
 
}
function keyPressed(){
if(keycode===32){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0})
	}
}


