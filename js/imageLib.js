


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
    this.repeat = false;
    
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
    this.canvasCtx.clearRect(this.xPos, this.yPos, this.width, this.height);
    
    console.log(this.oldPosX + " " + newPosX);
    /*Redraw new image*/
    this.canvasCtx.drawImage(this.image, newPosX, newPosY,  this.width, this.height)
    
    /*Update related image information*/
    this.xPos = newPosX;
    this.yPos = newPosY;
    this.oldPosX = newPosX;
    this.oldPosY = newPosY;
    
    /*Determine if the image needs to be repeated*/
    if(this.repeat == false) {
       console.log("REPEAT");
    }
}

imageLib.prototype.backgroundRepeat = function() {
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
