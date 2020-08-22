const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2, box3, box4, box5, box6, strikr;
var platform, platform, ground;
var  slingshot;



function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    platform2 = new Ground(950, 335, 300, 120);
 strikr = new Striker(220, 50, 50, 50);
 box1 = new Box(950, 310, 50 ,50 );
 box2 = new Box(995, 310, 50 ,50 );
 box3 = new Box(915, 310, 50 ,50 );
 box4 = new Box(975, 140, 50 ,50);
 box5 = new Box(925, 140, 50 ,50);
 box6 = new Box(950, 40, 50 ,50);
 slingshot = new SlingShot(strikr.body,{x:200, y:50});
}

function draw(){
    background(247, 247, 247);
    Engine.update(engine);
    strokeWeight(4);
ground.display();
strikr.display();
slingshot.display();
platform.display();
platform2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
}

function mouseDragged(){
  Matter.Body.setPosition(strikr.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
