class Link{
    constructor(bodyA,bodyB){
        var lastlink = bodyA.body.Bodies.length-2;
        this.link = Constraint.create({
             bodyA = bodyA.body.Bodies[lastlink],
             pointA = {x:0,y:0},
             bodyB = bodyB,
             pointB = {x:0,y:0},
             length = -10,
             stiffness = 0.01


        });
        World.add(engine.world,this.link);
    }
}