class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.09,
            length:0.1
        }

        this.sling=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.sling);
    }

    attach(body){
        this.sling.bodyA=body;
    }

        fly(){
            this.sling.bodyA=null;
        }

    

display(){
    if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(1);
        stroke(56,44,44);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}
   
    }
