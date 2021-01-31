class Drops {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          friction:0.1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      var maxDrops = 100;
    

     
    for(var i=0; i<maxDrops;i++)
    {
        drops.push(new createDrop(random(0,400)),random(0,400));
    }
      ellipseMode(CENTER);
     
      

      
   
  if(this.drops.position.y>height)
  {
    Matter.Body.setPosition(this.drops, {x:random(0,400),y:random(0,400)})
  }
  
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("skyblue");
      ellipse(pos.x, pos.y, this.radius,this.radius);
      pop();
    }
  };