class Ball{
constructor(x,y,r,angle){
    var options={
        'friction':0.008,
        'density':1,
        'restitution':1.2
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world,this.body);
    this.image = loadImage("ball.png");
}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
}
}