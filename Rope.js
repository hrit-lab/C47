class Rope{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 1.4,
          length: 250
      }
      //this.rope1 = loadImage('sling1.png');
      //this.rope2 = loadImage('sling2.png');
      this.pointB = pointB
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
  }
  attach(body){
      this.rope.bodyA = body;
  }
  
  fly(){
      this.rope.bodyA = null;
  }

  display(){
      ///image(this.rope1, 150,350);
      //image(this.rope2, 120,350);
      if(this.rope.bodyA){
          var pointA = this.rope.bodyA.position;
          var pointB = this.pointB;
          push(); 
          stroke(48,22,8);
              strokeWeight(10);
              line(pointB.x, pointB.y, pointA.x, pointA.y);
          pop();
      }
  }
  
}