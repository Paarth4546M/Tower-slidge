class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 50
        }

        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
       if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push()
        stroke("brown")
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop()
       }
    }

    detach(){

        this.chain.bodyA = null;
    }   
}