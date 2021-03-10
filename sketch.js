const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball ,ball1
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);

    var ball_option={
         restitution : 1
    }
       ball=Bodies.circle(200,100,20,ball_option,ball1_option)
        World.add(world,ball,ball1)
    console.log(object);

    var ball1_option={
        restitution:1
    }
    ball1=Bodies.circle(300,200,50,ball1_option)
    World.add (world,ball1)
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("blue")

    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);

    
      fill("red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y , 30 ,20)
    ellipseMode (RADIUS);
    ellipse(ball1.position.x,ball1.position.y , 50,80)
}
