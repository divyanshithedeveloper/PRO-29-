class Block{
  constructor(x, y, width, height) {
    var options={
  friction:0.1

    }
      
      this.visibility=255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);

    }
    


      
      display(){
      if(this.body.speed<40){
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
      }
      else{
        World.remove(world,this.body)
      }
    }    
}
