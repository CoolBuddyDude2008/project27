class bob{
    constructor(x,y,r){
        var options = {
        isStatic : false,
        restitution : 1,
        friction : 0,
        density: 7.8,
    }
    this.x = x;
    this.y = y;
    this.r = r;

    this.body = Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body);
}

display(){
    push();
    ellipseMode(RADIUS);
    Fill(254,0,255);
    ellipse(this.body.position.x,this.body.position.y,25,25);
    pop();
}
}   
 
 
 
 
 




