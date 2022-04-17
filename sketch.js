var base;
var pessoa;



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
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

 
  var base_options = {
    isStatic: true
  }

  var pessoa_options = {
    isStatic: true
  }
  
  base = Bodies.rectangle (200, 500, 50, 180, base_options)
  World.add (world, base)

  pessoa = Bodies.rectangle (240, 320, 100, 100, pessoa_options)
  World.add (world, pessoa)

  //criar corpo do jogador



}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()


  //exibir a imagem da base do jogador usando a função image()


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);

  image (baseimage, base.position.x, base.position.y, 220, 180)
  image (playerimage, pessoa.position.x, pessoa.position.y, 150, 200)
}
