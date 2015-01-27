/* 
 * Coder: Angela Pang
 * 
 * Assignment: CIS4500 Week 2 - Visibility (Candy 4 Aliens)
 * Date: 2015/01/14
 * Modified: 2015/01/27
 * 
 * Filename: gameTimer.js
 * 
 * Description:
 * This files contains the function that keeps track of the gameplay time.
 * 
 */

var gameTimer;
var startClock;
var endGameFlag = true; //Game isn't running is true
var numGamePlay = 0;
var milSec = 1000;


function startTimer() {
   clearInterval(gameTimer);
   startClock = new Date().getTime();
   var oneSec = 30;
 
   gameTimer = setInterval(function(){updateGame();}, oneSec);     
 
    /*Initiate game*/
    initGame();
    endGameFlag = false;    
}


function updateGame() {
    var i;  //Loop counter
    var countDownTime = 60;
    
    /*Calculate time lapse*/
    //var timeRemaining = Math.round(countDownTime - (new Date().getTime() - startClock) / milSec);
    var timeRemaining = Math.round((new Date().getTime() - startClock) / milSec);

    /*Clear the canvas*/
    backgroundImg.clearCanvas();
    
    /*Draw the background*/
    backgroundImg.redraw(backgroundImg.xPos, backgroundImg.yPos);
    
    /*Draw gameplay information*/
    backgroundImg.canvasCtx.fillStyle = "yellow";
    backgroundImg.canvasCtx.font = "bold 14px Arial";
    backgroundImg.canvasCtx.fillText("Survival Time: " + timeRemaining + " Seconds", 1, 14);
    
    /*Draw the character*/
    character.jump();
    character.redraw(character.xPos, character.yPos);

    /*Draw the candy*/
    candyTime();
    candy.redraw(candy.xPos, candy.yPos);
    
    /*Update Alien position*/
    moveAliens(2);
        
    /*Check if the image intersects with anything on the canvas*/
    checkIntersection();
    foundCandy();
    
    /*Determine if the game over flag as been set*/
    if (endGameFlag == true) { //|| timeRemaining <= 0) {
        clearInterval(gameTimer);
                
        /*Show all aliens*/ 
        for (i = 0; i< aliens.length; i++) {                        
            aliens[i].redraw(aliens[i].xPos, aliens[i].yPos);
        }
        
        /*Inform the user that they lost*/
        backgroundImg.canvasCtx.fillStyle = "red";
        backgroundImg.canvasCtx.font = "bold 60px Arial";
        backgroundImg.canvasCtx.fillText("GAME OVER", 125, 160);
        backgroundImg.canvasCtx.font = "bold 30px Arial";
        backgroundImg.canvasCtx.fillText("Survival Time: " + timeRemaining + " Seconds", 125, 220);
    }
}

function moveAliens(speed) {
    var i;  //Loop counter
    
    /*Modify every alien image*/
    for (i = 0; i< aliens.length; i++) {            
        aliens[i].canvasCtx.globalAlpha = alienVisibility;    
        aliens[i].redraw(aliens[i].xPos - speed, aliens[i].yPos);
        
        /*Determine if the alien is off screen*/
        if ((aliens[i].xPos + aliens[i].width) < 0) {
            newAlien(aliens[i]);
        }        
        
        /*Modify the alien's visibility*/
        if (visible == true) {
            alienVisibility -= 0.001;
        }
        else if (visible == false) { 
            alienVisibility += 0.001;
        }
        
        if (alienVisibility >= 1.0) {
            alienVisibility = 1.0;
            visible = true;
        }
        else if (alienVisibility <= 0.0) {
            alienVisibility = 0.0;
            visible = false;
        }
        aliens[i].canvasCtx.globalAlpha = 1;  
    }
}

function addTime() {
    var countDownTime = 60;
    var sec30 = 30 * milSec; 
    
    /*Add 30 seconds of game play*/
    startClock += sec30;
    
    /*Calculate time lapse*/
    var timeRemaining = Math.round(countDownTime - (new Date().getTime() - startClock) / milSec);
    
    if (timeRemaining > 60) {
        startClock = new Date().getTime(); 
    }
}

function candyTime() {
    var powerRemaining = Math.round(powerUpEnd - (new Date().getTime() - powerUp) / milSec);
    
    if (powerRemaining > 0) {
        backgroundImg.canvasCtx.font = "bold 30px Arial";
        backgroundImg.canvasCtx.fillText("Power Up Activated", 150, 110);
    }
    
    return powerRemaining;
}

/*Convert Second to millisecond*/
function convertSecToMilSec(sec) {
    var milSec = 1000;
    
    return sec * milSec;
}

/*Convert millisecond to second*/
function convertMilSecToSec(milSec) {
    var sec = 1000;
    
    return milSec / sec;
}
