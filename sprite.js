class Sprite {
    constructor(x, y,size,img) {
      this.img = img;
      this.x = x;
      this.y = y;
      this.size = size;
    }
  
    position(x, y){
      this.x = x;
      this.y = y;
    }
    
    
    move(){
      
      if(keyIsDown(RIGHT_ARROW)){
        this.x  = this.x + 5;
      }
      if(keyIsDown(UP_ARROW)){
        this.y  = this.y - 5;
      }
      
      if(keyIsDown(LEFT_ARROW)){
        this.x  = this.x - 5;
      }
      if(keyIsDown(DOWN_ARROW)){
        this.y  = this.y + 5;
      }
      
    }
    
    display() {
      push();
      image(this.img,this.x,this.y,50,100);
      pop();
    }
  }