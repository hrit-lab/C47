class Ground{
  constructor(x,y,width,height){
      var options={
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world,this.body);
  }
  display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      stroke(0);
      strokeWeight(5);
      fill("red");
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
  }
}