class Polygon{
constructor(x,y,width,height){
    var options = {
         density:2            
    }
    this.body = Bodies.rectangle(x, y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("polygon.png")
        
}
display(){
    var angle = this.body.angle;
    var pos= this.body.position;
    push()
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    imageMode(CENTER);
    image(this.image,0,0,40,40)
    pop ()
  }
}