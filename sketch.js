
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var hammer;
var ground;
var stone;
var sand1;
var sand2;
var sand3;
var sand4;
var sand5;




function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer= new Hammer(100,100);

	ground= new Ground(600,height,1200,20);
	
	stone= new Stone(700, 320,100,100);

	sand1=new Sand(300,500,20);

	sand2=new Sand(299,500,20);

	sand3=new Sand(301,500,20);

	sand4=new Sand(302,500,20);

	sand5=new Sand(298,500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
hammer.display();
ground.display();
stone.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display(); 
}



