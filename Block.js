class Block{
  constructor(x, y) {
    var options = {
      restitution: 0.2,
      friction: 0.05,
      density: 0.01
    };
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 40;
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
    this.visibility = 225;
    World.add(world, this.body);
  }
  display(){
    if (this.body.speed < 2) {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop(); 
    } else {
      World.remove(world, this.body);
      push()
      this.visibility -= 2.5;
      pop();
    }

  }
}