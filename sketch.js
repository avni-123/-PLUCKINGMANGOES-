const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;


const Constraint = Matter.Constraint;

var treeObj, stoneObj, groundObject, launcherObject;

var mango1, mango2, mango3, mango4, mango5;

var world,boy;

var stone;

var slingShot;

function preload(){

	boy = loadImage("boy.png");

  }

function setup(){

	createCanvas(1300, 600);

	engine = Engine.create();

	world = engine.world;

	mango1 = new mango(1100, 100, 30);

  mango2 = new mango(1070, 250, 40);

  mango3 = new mango(1010, 100, 30);

  mango4 = new mango(1100, 40, 20);

  mango5 = new mango(1140, 200, 25);

  mango6 = new mango(950, 150, 35);

  mango7 = new mango(950, 250, 15);

  mango8 = new mango(1170, 260, 37);

  mango9 = new mango(1220, 180, 30);

  mango10 = new mango(900, 200, 28);

  mango11 = new mango(1030, 180, 30);

  mango12 = new mango(1170, 130, 40);

	treeObj = new tree(1050, 580);

	groundObject = new ground(width/2, 600, width, 20);

	stone = new Stone(235, 420, 50);

	slingShot = new Slingshot(stone.body, {x : 235, y : 420});
	
	Engine.run(engine);

}

function draw(){

  background(230);

  fill("pink");

  strokeWeight(2);

  stroke("blue");

  textFont("Colonna MT")

  textSize(30);

  text("Press Space Bar Key to hit the mangoes with the stone again!!", 100, 100);

  image(boy ,200, 340, 200, 300);
  

  treeObj.display();

  mango1.display();

  mango2.display();

  mango3.display();

  mango4.display();

  mango5.display();

  mango6.display();

  mango7.display();

  mango8.display();

  mango9.display();

  mango10.display();

  mango11.display();

  mango12.display();

  stone.display();

  slingShot.display();

  groundObject.display();

  Collision(stone, mango1);
  Collision(stone, mango2);
  Collision(stone, mango3);
  Collision(stone, mango4);
  Collision(stone, mango5);
  Collision(stone, mango6);
  Collision(stone, mango7);
  Collision(stone, mango8);
  Collision(stone, mango9);
  Collision(stone, mango10);
  Collision(stone, mango11);
  Collision(stone, mango12);

}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});

}

function mouseReleased(){

	slingShot.fly();

}

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.setPosition(stone.body, {x : 235, y : 420});

		slingShot.attach(stone.body);

	}

}

function Collision(lstone, lmango){

	mangoBodyPosition = lmango.body.position;

	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance <= lmango.r + lstone.r){

		Matter.Body.setStatic(lmango.body, false);

	}

}
