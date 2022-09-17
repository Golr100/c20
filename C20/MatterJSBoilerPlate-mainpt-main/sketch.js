var Engine,world
var block1, block2, block3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var plane_options={
		isStatic: true
	}
    var plane= Bodies.rectangle(600, 580, 1200, 2, plane_options)
	world.add(world, plane)
	Engine.run(engine);
    var block1=Bodies.circle( 1, 200, 2,block1_options)
	world.add(world, block1)
	var block1_options={
		restition:0.5,
		friction:0.02,
        frictionAir:0
	}
	var block2=Bodies.rectangle(100, 200, 2, 2,block2_options)
	world.add(world, block2)
	var block2_options={
		restition:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	var block3=Bodies.rectangle(100, 200, 2, 2,block3_options)
    world.add(world, block3)
	block3_options={
		restition:0.01,
		friction:1,
		frictionAir:0.3
	}
}
function draw() {
  background("lightgreen");
  ellipseMode(RADIUS);
  fill("brown");
  rect(plane.position.x,plane.position.y,1200);
  ellipse(block1.position.x,block1.position.y,30);
  rect(block2.position.x,block2.position.y,50,50);
  rect(block3.position.x,block3.position.y,100,50);
}
