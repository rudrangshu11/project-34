class Hero {
    constructor(x,y,radius){
        var options_hero = {
            isStatic:false,
            density : 1,
            frictionAir: 1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("images/Superhero-01.png")
        this.body = Bodies.circle(this.x,this.y,this.radius,options_hero);
        World.add(world,this.body)
    }
    
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}