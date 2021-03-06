class Hammer {
    constructor(x,y){
        var options ={
            'restitution':2,
            'friction':1.0,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, 75,50, options);
        this.width = 75;
        this.height = 50;

        World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
       pos.x=mouseX;
       pos.y=mouseY;

       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       rectMode(CENTER);
       fill("red");
       rect(0, 0, this.width, this.height);
       pop();
     }
    }
