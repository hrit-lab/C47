class Bottle{
    constructor(x,y,r){
      var options={
        'friction':1.2,
        'density':0.05,
        'restitution':0.8
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world,this.body);
      this.image = loadImage("bottle.png");
     this.Visibility = 255;
    }
    display(){
      if(this.body.speed < 3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        rotate(angle);
        image(this.image,0,0,this.r,this.r);
        pop();
      }
      else{
        world.remove(world,this.body);
        push();
       this.Visibility = this.Visibility - 10;
        tint(255,this.Visibility);
        image(this.image, this.body.position.x,this.body.position.y,30,40);
        pop();
      }
    }

    score(){
      if(this.Visibility < 0 && this.Visibility > -1005){
        score ++;
      }
    }
}