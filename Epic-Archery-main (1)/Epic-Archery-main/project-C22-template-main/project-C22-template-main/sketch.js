const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImage = loadImage("./assets/base.png");
  playerImage = loadImage("./assets/player.png");
  boardImage = loadImage("./assets/board.png");
  playerArcherImage = loadImage("./assets/playerArchery.png");
  arrowImage = loadImage("./assets/arrow,png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 20;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  var options = {
    isStatic: true,
  };

  //create player base
  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  //create player body
  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, player);
}
Arrow = new Cannon(180, 110, 130, 100, angle);
Arrow = new CannonBall(arrow.x, arrow.y);

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, hieght);

  Engine, update(engine);

  rect(baseimage, playerBase.position.x, playerBase, position, y, 180, 150);
  rect(playerimage, player.position.x, player, position, y, 50, 180);

  Engine.update(engine);

  // Title
  
  push();
  imageMode(CENTER);
  image(playerArcherImage, player.position.x, player.position.y, 160, 310);
  pop();

  arrow.display();
}
