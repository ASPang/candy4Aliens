
imageLib.prototype.constructor = imageLib;

function imageLib(canvasName, width, height, xPos, yPos) {    
    this.canvasName = canvasName;
    this.canvas = document.getElementById(this.canvasName);
    this.canvasCtx = this.canvas.getContext("2d"); 
    this.width = width;
    this.height = height;
    this.xPos = xPos;
    this.yPos = yPos;
    this.oldPosX = xPos;
    this.oldPosY = yPos;
    
    this.image = "";
    this.repeatHor = false;
    this.repeatVer = false;
    this.loopHor = false;
    this.loopVer = false;
    
    this.spaceBuffer = 0;
    
    this.visible = true;
};

imageLib.prototype.addImg = function(image) {
    this.image = image; 
    this.canvasCtx.drawImage(image, this.xPos, this.yPos, this.width, this.height);
    
    /*Determine if the image needs to be repeated*/
    this.backgroundRepeat();
};

/*Clear entire canvas*/
imageLib.prototype.clearCanvas = function() {
    this.canvasCtx.clearRect(0, 0,  this.canvas.width, this.canvas.height);
};

/*Canvas Width*/
imageLib.prototype.canvasWidth = function() {
    return this.canvas.width;
};

/*Canvas Height*/
imageLib.prototype.canvasHeight = function() {
    return this.canvas.height;
};

imageLib.prototype.clearCanvas = function() {
    this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

imageLib.prototype.redraw = function(newPosX, newPosY) {
    /*Redraw new image*/
    this.canvasCtx.drawImage(this.image, newPosX, newPosY,  this.width, this.height)
    
    /*Update related image information*/
    this.xPos = newPosX;
    this.yPos = newPosY;
    this.oldPosX = newPosX;
    this.oldPosY = newPosY;
    
    /*Determine if the image needs to be repeated*/
    this.backgroundRepeat();
};

imageLib.prototype.backgroundRepeat = function() {
    //console.log(this.canvas.width);
    var newPosX = this.xPos + this.width;
    var newPosY = this.yPos + this.width;
    var repeat = 0;
    
    if(this.repeatHor == true) {
        /*Repeat image from current position to the right*/
        while (newPosX < this.canvas.width) {
            this.canvasCtx.drawImage(this.image, newPosX, this.yPos,  this.width, this.height);
            newPosX = newPosX + this.width;
            repeat++;
        }
        
        /*Repeat image from current position to the left*/
        var newPosX = this.xPos - this.width;
        while (newPosX > (this.width * (-1))) {
            this.canvasCtx.drawImage(this.image, newPosX, this.yPos,  this.width, this.height);
            newPosX = newPosX - this.width;
            repeat++;
        }
        
        /*loop the image*/
        if (this.xPos >= this.canvas.width) {
            this.xPos = 0;
        }
        else if (this.xPos <= 0) {
            this.xPos = this.canvas.width;
        }
    }
}
        
imageLib.prototype.intersect =  function(image) {   //function(cx1, x1, x2, y1, y2) { 
    var x1 = image.xPos;
    var x2 = image.xPos + image.width;
    var y1 = image.yPos;
    var y2 = image.yPos + image.height;

    if ((x2 >= this.xPos) && (x1 <= (this.xPos + this.width)) && (y2 >= this.yPos) && (y1 <= (this.yPos + this.height))){
        return true;
    }
    
    return false;
};
