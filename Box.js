class Box {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true,
          'restitution':0.5,
          'friction':0.3,
          'density':0.5,

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      
      imageMode(CENTER);

    image(this.image, pos.x,pos.y, this.width, this.height);
      pop();
    }
  };