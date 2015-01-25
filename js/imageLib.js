


var imageLib = function(canvasName, width, height, xPos, yPos) {
    console.log("image library initiated.");
    var canvas;
    var canvasCtx;
    
    this.canvasName = canvasName;
    this.canvas = document.getElementById(this.canvasName);
    console.log(canvas);
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
    
};

imageLib.prototype.addImg = function(image) {
    this.image = image; 
    this.canvasCtx.drawImage(image, this.xPos, this.yPos, this.width, this.height);
    //ctx.drawImage(image, this.xPos, this.yPos, this.width, this.height);
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


imageLib.prototype.redraw = function(newPosX, newPosY) {
    /*Remove image*/
    //this.canvasCtx.clearRect(this.xPos, this.yPos, this.width, this.height);
    this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    console.log(this.oldPosX + " " + newPosX);
    /*Redraw new image*/
    this.canvasCtx.drawImage(this.image, newPosX, newPosY,  this.width, this.height)
    
    /*Update related image information*/
    this.xPos = newPosX;
    this.yPos = newPosY;
    this.oldPosX = newPosX;
    this.oldPosY = newPosY;
    
    /*Determine if the image needs to be repeated*/
    this.backgroundRepeat();
}

imageLib.prototype.backgroundRepeat = function() {
    console.log(this.canvas.width);
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
        
imageLib.prototype.intersect =  function() {
    
}       
        //function redrawPos(shade) {
//    var xPos, yPos, row, col;
//    
//    /*Get the block row and column number*/
//    row = getRow(curPos);
//    col = getCol(row, curPos);
//    
//    /*Get the block coordinate*/
//    xPos = getXPos(row);
//    yPos = getYPos(col);
//    
//    /*Remove image*/
//    ctx.clearRect(yPos, xPos, blockSize, blockSize);
//    
//    /*Added faded image*/
//    ctx.globalAlpha=shade;    
//    ctx.drawImage(blockImg[gameBoard[curPos]], yPos, xPos, blockSize, blockSize);
//}
