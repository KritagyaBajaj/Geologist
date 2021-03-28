class Sand {
    constructor(x,y,radius){
        var options ={
            'restitution':0.5,
            'friction':5,
            'density': 12
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.x= x;
        this.y= y;
        this.radius= radius;
        this.body= Bodies.circle(this.x, this.y, this.radius, options);

        World.add(world, this.body);
    }
    display(){
       var pos =this.body.position;
       
       push();
       translate(pos.x, pos.y);
       
       ellipseMode(CENTER);
       fill("brown");
       ellipse(0, 0, this.radius);
       pop();
     }
    }
