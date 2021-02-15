class Paper {
    constructor() {
        var options = {
            isStatic: false,
            restitution:0,
            friction:0,
            density:1.2
        }
        this.body = Bodies.circle(250,540, 25,options);
        this.image = loadImage("sprites/paper.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
		fill(255);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,70);
    }
}