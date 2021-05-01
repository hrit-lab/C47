const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var gameState ="onSling";
var ball;
var base1,base2;
var backgroundImg;
var bottle1,bottle2,bottle3,bottle4,bottle5,bottle6,bottle7,bottle8;
var rope;
var score = 0;
function preload() {
    backgroundImg = loadImage("background.jpg");
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(400,450,60);
    base1 = new Ground(600,500,200,20);
    base2 = new Ground(200,500,200,20);
    bottle1 = new Bottle(560,450,80);
    bottle2 = new Bottle(600,450,80);
    bottle3 = new Bottle(640,450,80);
    bottle4 = new Bottle(520,450,80);
    bottle5 = new Bottle(260,450,80);
    bottle6 = new Bottle(210,450,80);
    bottle7 = new Bottle(170,450,80);
    bottle8 = new Bottle(130,450,80);
    rope = new Rope(ball.body,{x:300, y:50});
}

function draw(){
background(backgroundImg);
textSize(30);
fill(0);
text("Score: "+score,600,50);
    ball.display();
base1.display();
base2.display();
bottle1.display();
bottle2.display();
bottle3.display();
bottle4.display();
bottle5.display();
bottle6.display();
bottle7.display();
bottle8.display();
bottle1.score();
bottle2.score();
bottle3.score();
bottle4.score();
bottle5.score();
bottle6.score();
bottle7.score();
bottle8.score();
rope.display();
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


//function mouseReleased(){
  //  rope.fly();
    //gameState = "launched";
//}