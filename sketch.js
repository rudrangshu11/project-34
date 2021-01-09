const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var backgroundImg
var ground,hero,fly,block1;
function preload() {
//preload the images here
  backgroundImg = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(1400, 700);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(70,400,2000,20);
  hero = new Hero(200, 200, 150);
  fly = new Fly(hero.body,{x:300,y:0});
  block1 = new Block(900,350,40,40); 
}

function draw() {
  background('black');
  background(backgroundImg);
  ground.display();
  hero.display();
  fly.display();
  block1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}