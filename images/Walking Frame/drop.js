class Drop{
    constructor(x,y,r){
        var op = {
          'friction':0.1
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.drop = Bodies.circle(x,y,r,op);
        
        World.add(world,this.drop);

    }
    updatePos(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop,{x:random(0,1500), y : 5})
      }
    }
    display(){
        var pos = this.drop.position;

        ellipseMode(CENTER);

        fill(173, 205, 215);
        ellipse(pos.x,pos.y,this.r,this.r);

    }
}