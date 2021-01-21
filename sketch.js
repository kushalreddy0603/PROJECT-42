const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var tSound,rSound;
var engine,world;
var t,t1,t2,t3,t4, r;
var man;
var dropArray = [];
var maxDrops = 100;

function preload(){
  
    t1 = loadImage("/images/thunderbolt/1.png");
    t2 = loadImage("/images/thunderbolt/2.png");
    t3 = loadImage("/images/thunderbolt/3.png");
    t4 = loadImage("/images/thunderbolt/4.png");

    
}

function setup(){
    createCanvas(1500,750);

    engine = Engine.create();
    world = engine.world;

    man = new Man(200,300);
    man.scale = 0.2;

    if(frameCount % 50 === 0){
      for(var i = 0; i < maxDrops; i++){
        dropArray.push(new Drop(random(0,1500),random(0,1500),10));
    }
    } 
    
}

function draw(){
    background("Black");


    man.scale = 1;

    if(frameCount === 1 || frameCount % 200 === 0){
        rSound.play();
    }

    for(var p = 0 ; p < maxDrops ; p++){
        dropArray[p].updatePos();
        dropArray[p].display();
       }

    if(frameCount % 200 === 0){
        t = createSprite(random(0,1500),0);

        tSound.play();

        r = Math.round(1,4);

        switch(r){
            case 1 : t.addImage(t1);
                     break;

            case 2 : t.addImage(t2);
                     break;

            case 3 : t.addImage(t3);
                     break;  
                     
            case 4 : t.addImage(t4);
                     break;
        }

        t.scale = 1;
        t.lifetime = 15;
    }

    man.display();
    Engine.update(engine);

    drawSprites();   
}   

