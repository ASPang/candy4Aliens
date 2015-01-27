/* 
 * Coder: Angela Pang
 * 
 * Assignment: CIS4500 Week 2 - Visibility (Candy 4 Aliens)
 * Date: 2015/01/14
 * Modified: 2015/01/27
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
