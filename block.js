  class Block{
      constructor(x, y, width, height){

          var options = {
            isStatic:false,
            'restitution' :0.5,
            'friction' :0.01
                      
          } 
          
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          this.image = loadImage("block.png");
          this.Visiblity= 255;
          World.add(world, this.body);
        }

        display(){
          if(this.body.speed<3){
            var angle = this.body.angle;
            var pos= this.body.position;
            push();
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
            translate(pos.x, pos.y);
            rotate(angle);
            pop();
          }else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity-5;
            tint(255,this.Visiblity);
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
      }
    }
