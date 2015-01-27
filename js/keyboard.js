/* 
 * Coder: Angela Pang
 * 
 * Assignment: CIS4500 Week 1 - Interlocking Block
 * Date: 2015/01/14
 * 
 * Filename: keyboard.js
 * 
 * Description:
 * This files contains the function that determines the appropriate action for 
 * the key that was pressed. 
 * 
 */

/*Initiate Keyboard listener even handler*/
window.addEventListener("keydown", keyDownEvent, false);
//window.addEventListener("keypress", keyPressEvent, false);

/*Keyboard event handler*/
function keyDownEvent(e) {
    var left = -1,
            right = 1,
            up = -brdCol,
            down = brdCol;
    var avl;    //Non-empty space
    var noBlock;    //Empty Space
    
    e.preventDefault();
    
    /*Determine if the game over flag as been set*/
    if (endGameFlag == true) { 
      return false;
    }
    
    /*Determine which key is pressed*/
    switch (e.keyCode) {
        case 32:
            // Space key pressed
            placeBlock();
            break;
        case 37:
            // left key pressed
            lastKey = e.keyCode;
            
            leftArrowKeyEvent();
            
            break;
        case 38:
            // up key pressed
            lastKey = e.keyCode;
            upArrowKeyEvent();
            break;
        case 39:
            // right key pressed
            lastKey = e.keyCode;
            //console.log("right key pressed");
            
            rightArrowKeyEvent();
            
            break;
        case 40:
            // down key pressed
            lastKey = e.keyCode;
            
            break;
        case 68:
            // D key pressed
            
            break;
        case 70:
            // F key pressed
            
            break;
    }
}

function upArrowKeyEvent() {
    /*Enable character to jump*/
    if ((character.yPos + character.height) >= character.canvas.height) {
        character.jumping = true; 
    }

    /*Update the game window*/
    updateGame();
}

function rightArrowKeyEvent() {
    var move = 4;
    
    /*Move background image 5 pixels*/
    backgroundImg.redraw(backgroundImg.xPos - move, backgroundImg.yPos);
    candy.redraw(candy.xPos - move, candy.yPos);
    
    /*Update alien x Position*/
    moveAliens(4);
    
    /*Update the game window*/
    updateGame();
}


function leftArrowKeyEvent() {
    var move = 4;
    
    /*Move background image 5 pixels*/
    backgroundImg.redraw(backgroundImg.xPos + move, backgroundImg.yPos);
    candy.redraw(candy.xPos + move, candy.yPos);
     
    /*Update alien x Position*/
    moveAliens(-3);
    
    /*Update the game window*/
    updateGame();
}




















/*Determine if the user can move to an area on the canvas.
 * Return a variable:
 * 0 = not a valid move or there's no block for them to move to
 */
function checkNext(direction, position) {
    var newPos;
    var numSq = brdCol * brdRow + 1;
   
    /*Calculate the position in relation to the array*/
    newPos = position + direction;
    
    /*Determine if it's within the canvas*/
    if ((newPos < 0) || (newPos > numSq)) {
        return 0;
    }
    /*Determine if there's an object on the left side*/
    else if (gameBoard[newPos] == 0) {
        return 0;
    }

    return gameBoard[newPos];
}

/***Boarder detection for boards***/
/*Check top boarder*/
function chkTopBorder(newPos) {    
    /*Determine if it's within the canvas*/
    if (newPos < 0) {
        return true;
    }
    
    /*Within range*/
    return false;
}

/*Check bottom boarder*/
function chkBottomBorder(newPos) {
    /*Determine if it's out of range*/
    if (newPos > (brdCol * brdRow)) {
        return true;
    }
    
    /*Within range*/
    return false;
}

/*Check right boarder*/
function chkRightBorder() {
    var reminder;
    
    /*Determine if the block is located at the end of the row*/
    reminder = curPos % brdCol;
    
    /*Determine if it's out of range*/
    if (reminder == 0) {
        return true;
    }
    
    /*Within range*/
    return false;
}

/*Check left boarder*/
function chkLeftBorder() {
    var reminder;
    
    /*Determine if the block is located at the end of the row*/
    reminder = (curPos - 1) % brdCol;
    
    /*Determine if it's out of range*/
    if (reminder == 0) {
        return true;
    }
    
    /*Within range*/
    return false;
}

/*Place new block on the board*/
function placeBlock() {
    var check;
    var numSq = brdCol * brdRow;
    
    /*Check if the block can be placed*/
    check = avlBlock();
    
    if (check == true ) {
        /*Update the board array*/
        updateBoardAry();

        /*Display the new permanent block*/
        removeTemp();
        makeMove(tempBlkPos);

        /*Update block list*/
        updateBlockList();
        
        /*Update Score*/
        document.getElementById('countScore').innerHTML = "Area Covered: " + areaCovered() + "/" + numSq;
    }
}

function updateBoardAry() {
    gameBoard[tempBlkPos] = blockList[0];
}