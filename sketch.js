const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var line1

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  line1 = new line(400,300,200,5);

  World.add(world, line1);

  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  Engine.update(engine); 

  line1.display();
  
  drawSprites();
}