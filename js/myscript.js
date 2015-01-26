/* 
 * Coder: Angela Pang
 * 
 * Assignment: CIS4500 Week 1 - Interlocking Block
 * Date: 2015/01/14
 * 
 * Filename: myscripts.js
 * 
 * Description:
 * This files contains the function that deals with starting the game and
 * updating the game windows.
 * 
 */

/*Start the game once the page has been loaded*/
 $(function ()  {     
    initGame();
});

/*Initialize the game*/
function initGame() {
    /*Preload images*/
     preloadGameImages();
     
    /*Set up the board*/
    //setupVar();
    
    /*Setup the board array*/
    //blockAry();
    
    /*Display the board*/
    //setupBoard();   //Display currently placed blocks
    setupCanvas();
    
    /*Setup the list of blocks*/
    //getBlockList();
    //displayBlockList();
    //displayTemp(tempBlkPos);  //Display temporary block
    
    
    /*Start the timer*/
    startTimer();   //TESTING shouldn't be here have to be called from somewhere else
}

/*Initialize the canvas*/
function setupCanvas() {
     /*Setting up the canvas*/
    c = document.getElementById("gameCanvas");
    ctx = c.getContext("2d");
    
    /*cBlock = document.getElementById("blockCanvas");
    ctxBlock = cBlock.getContext("2d");*/
}



function preloadGameImages() {   
    gameImage = new preloadImages()
    
    /*Add image that needs to be preloaded*/
    for (i = 0; i < imgSrc.length; i++) {
        gameImage.setImageAry(imgSrc[i]);
    }
    
    
    /*var newimg = new Image();
    newimg = gameImage.loadedImg["background1"];
    
    console.log(newimg);*/
}


function setupCanvas() {
    var gameCanvas = "gameCanvas";
    backgroundImg = new imageLib(gameCanvas, blockSize, blockSize, 50, 350);
    
    
    /*Add background image to canvas*/
    backgroundImg.repeatHor = true; //Repeat the background
    backgroundImg.addImg(gameImage.loadedImg["background1"]);
    
    /*Draw the character on the screen*/
    setupCharacter(gameCanvas);
    addAliens(gameCanvas);
}

function setupCharacter(gameCanvas) {
    /*Add the character to the canvas*/
    character = new physics(gameCanvas, 50, 50, 275, 350);
    character.addImg(gameImage.loadedImg["character"]);
    
    /*Establishing character jumping capabilities*/
    character.jumpHeight = 200;
    character.ground = character.canvas.height - character.height;
    character.jumpSpeed = 2;
    character.fallSpeed = 2;
}

function addAliens(gameCanvas) {
    //var gameCanvas = "gameCanvas";
    var alienHeight = 50;
    var alienWidth = 50;
    
    /*Add aliens to the canvas*/
    aliens[0] = new physics(gameCanvas, alienWidth, alienHeight, 275, 200);
    aliens[0].addImg(gameImage.loadedImg["alien1"]);
    
    
    aliens[1] = new physics(gameCanvas, alienWidth, alienHeight, 300, 250);
    aliens[1].addImg(gameImage.loadedImg["alien1"]);
}














function testPreload() {
    gameImage.imgPath;
    console.log(gameImage.imgPath);
    
    gameImage.setImagePath("Hello setting new path");
    console.log(gameImage.imgPath);
    
    gameImage.imgPath = "jldfasjdlf";
    console.log(gameImage.imgPath);
}













//
//
///*Initialize the canvas*/
//function setupVar() {
//     /*Setting up the canvas*/
//    c = document.getElementById("gameCanvas");
//    ctx = c.getContext("2d");
//    
//    /*cBlock = document.getElementById("blockCanvas");
//    ctxBlock = cBlock.getContext("2d");*/
//}
// 
// /*Create an empty array for the board*/
// function blockAry() {
//     var pos = 0;
//     var numSq = brdCol * brdRow + 1;
//     
//    for (pos = 0; pos < numSq; pos++) {
//        gameBoard[pos] = 0;
//    }
//    
//    gameBoard[startPos] = 20;
// }
// 
// /*Set up the inital Board*/
//function setupBoard() {
//    var xPos, yPos, row, col;
//    
//    /*Setting the current position on the board*/
//    curPos = startPos;
//    
//    /*Get the block row and column number*/
//    row = getRow(startPos);
//    col = getCol(row, startPos);
//    
//    /*Get the block coordinate*/
//    xPos = getXPos(row);
//    yPos = getYPos(col);
//    
//    /*Create the starting position*/
//    ctx.globalAlpha=0.6;
//    ctx.drawImage(gameImage["background1"], yPos, xPos, blockSize, blockSize);
//}
//
///*Determine the row where the block is*/
//function getRow(blockNum) {
//    var reminder, row;
//    
//    /*Determine if the block is located at the end of the row*/
//    reminder = blockNum % brdCol;
//    
//    /*Get the row number*/
//    if (reminder != 0) {
//        row = parseInt(blockNum / brdCol );
//    }
//    else {
//        row = parseInt(blockNum / brdCol  - 1);
//    }
//        
//    return row;
//}
//
///*Determine the x-pixel coordinate of the block*/
//function getXPos(row) {
//    var xPos;
//    
//    xPos = row * blockSize;
//    
//    return xPos;
//}
//
///*Determines the column where the block is in*/
//function getCol(row, blockNum) {
//    var firstRow, col;
//    
//    /*Determine column number for the block*/
//    firstRow = 6 * row;   
//    col = blockNum - firstRow;
//    
//    return col;
//}
//
///*Determine the y-pixel coordinate of the block*/
//function getYPos(col) {
//    var yPos;
//    
//    /*Getting the y coordinate pixel location of the block*/
//    yPos = col * blockSize - blockSize;
//    
//    return yPos;
//}
//
//function makeMove(newPos) {
//    /*Remove old position*/
//    redrawPos(1.0);
//    
//    /*Draw new position*/
//    curPos = newPos;
//    redrawPos(0.6);
//}
//
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
//
///*Display possible new blocks*/
//function displayTemp(pos) {
//    var xPos, yPos, row, col;
//    
//    /*Get the block row and column number*/
//    row = getRow(pos);
//    col = getCol(row, pos);
//    
//    /*Get the block coordinate*/
//    xPos = getXPos(row);
//    yPos = getYPos(col);
//   
//    ctx.globalAlpha=0.2;
//    
//    ctx.drawImage(blockImg[blockList[0]], yPos, xPos, blockSize, blockSize);
//    
//    tempBlkPos = pos;
//}
//
//function removeTemp() {
//    var xPos, yPos, row, col;
//    if (gameBoard[tempBlkPos] == 0) {
//        /*Get the block row and column number*/
//        row = getRow(tempBlkPos);
//        col = getCol(row, tempBlkPos);
//
//        /*Get the block coordinate*/
//        xPos = getXPos(row);
//        yPos = getYPos(col);
//
//        /*Clear old block*/
//        ctx.clearRect(yPos, xPos, blockSize, blockSize);
//    }
//}
//

