const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop1,drop2,drop3,drop5,drop6,drop7,drop8,drop9,drop10;


function preload(){
    
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   


    
}

function draw()
{
  background("black");
  drops.display();








}   

