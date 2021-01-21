class Man{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.r = 150;

        this.animation = loadAnimation("../images/Walking Frame/walking_1.png","../images/Walking Frame/walking_2.png","../images/Walking Frame/walking_3.png","../images/Walking Frame/walking_4.png","../images/Walking Frame/walking_5.png","../images/Walking Frame/walking_6.png","../images/Walking Frame/walking_7.png","../images/Walking Frame/walking_8.png");

        this.body = Bodies.circle(x,y,200,options) ;
        
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        animation(this.animation, pos.x, pos.y + 90, 300,300);
        
    }
}