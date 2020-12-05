class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.vision = 255;
}
display(){
  if(this.body.speed<4){
    super.display();
  }
  else{
    World.remove(world,this.body);
    push()
    this.vision = this.vision - 5;
    tint(0,this.vision)
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop()
  }
}
}