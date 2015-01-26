

//var physics = function() {};
physics.prototype = Object.create(imageLib.prototype); //new imageLib();
physics.prototype.constructor = physics;
//physics.prototype.parent =  imageLib.prototype;


        

function physics(canvasName, width, height, xPos, yPos) {
    imageLib.call(this, canvasName, width, height, xPos, yPos);
    
    this.jumpHeight = 0;
    this.ground = 0;
    this.jumpSpeed = 0;
    this.fallSpeed = 0;
    
    this.character = this.image;
    
    var jumping = false;    
}
//physics.prototype.addImg = function(image) {
    //imageLib.addImg(image);
    //this.$super.addImg.call(this,image);
///};

//physics.inhert(imageLib);


physics.prototype.jump = function() {
    //console.log("in jump " + this.oldPosY);
//    /var character = this.character;
    var i = 0;  //Loop counter
    
    if (this.jumping == true && (this.yPos > this.jumpHeight)) {
        
        this.redraw(this.xPos, this.yPos - this.jumpSpeed);
    }
    else {
        this.jumping = false;
        this.gravity();
    }
};

physics.prototype.gravity = function() {
    //var character;
    //console.log("in gravity" +  this.yPos + " " + this.canvas.height + " " + this.height + " " + this.jumpHeight);
    //console.log("----" +  yPos + " " + this.canvas.height + " " + this.height);
    
    if (this.yPos < (this.canvas.height - this.height) && (this.yPos <= this.ground)) {
        this.redraw(this.xPos, this.yPos + this.jumpSpeed);
    }
};



