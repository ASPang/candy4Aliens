
physics.prototype = Object.create(imageLib.prototype);
physics.prototype.constructor = physics;

function physics(canvasName, width, height, xPos, yPos) {
    imageLib.call(this, canvasName, width, height, xPos, yPos);
    
    this.jumpHeight = 0;
    this.ground = 0;
    this.jumpSpeed = 0;
    this.fallSpeed = 0;
    
    this.character = this.image;
    
    var jumping = false;    
}

physics.prototype.jump = function() {
    var i = 0;  //Loop counter
    
    if (this.jumping == true && (this.yPos > this.jumpHeight)) {
        this.yPos -= this.jumpSpeed;
        this.redraw(this.xPos, this.yPos);  // - this.jumpSpeed);
        
    }
    else {
        this.jumping = false;
        this.gravity();
    }
};

physics.prototype.gravity = function() {    
    if (this.yPos < (this.canvas.height - this.height) && (this.yPos <= this.ground)) {
        this.redraw(this.xPos, this.yPos + this.jumpSpeed);
    }
};



