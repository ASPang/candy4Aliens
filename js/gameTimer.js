/* 
 * Coder: Angela Pang
 * 
 * Assignment: CIS4500 Week 1 - Interlocking Block
 * Date: 2015/01/14
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
    startClock = new Date().getTime();
    var oneSec = 30;
    
    //gameTimer = setInterval(function(){gameOver(countDownTime);}, oneSec);     
    gameTimer = setInterval(function(){updateGame();}, oneSec);     
    
    /*Initiate game*/
    //init();
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
    if (lastKey == 40) {
      // flip context horizontally
      character.canvasCtx.scale(-1, 1);
    }
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



///*Determine if the game should end*/
//function gameOver(countDownTime) {
//    var milSec = 1000;
//    var numSq = brdCol * brdRow;
//
//    /*Calculate time lapse*/
//    var timeRemaining = Math.round(countDownTime - (new Date().getTime() - startClock) / milSec);
//    
//    /*Determine end of game*/
//    if (timeRemaining > 0) {
//        /*Show time elapse*/
//        document.getElementById('countDown').innerHTML = "Time Remaining: " + timeRemaining + " seconds";
//        document.getElementById('startButton').innerHTML = "New Game";
//        endGameFlag = false;    //Set end game flag to false as the game is still running
//    }
//    else {
//        /*Set game over*/
//        clearInterval(gameTimer);
//        endGameFlag = true; //Set end game flag to true
//        
//        /*Determine if player can go to the next level*/
//        if ((areaCovered()/numSq > 0.4)) {
//            document.getElementById('countDown').innerHTML = "Time Up - Go to next round";
//            numGamePlay++;  //Update round counter
//            document.getElementById('rounds').innerHTML = "Number of Rounds Passed: " + numGamePlay;
//            document.getElementById('startButton').innerHTML = "Continue";
//        }
//        else {
//            document.getElementById('countDown').innerHTML = "Game Over";
//            document.getElementById('rounds').innerHTML = "Number of Rounds Passed: " + numGamePlay;
//            numGamePlay = 0; //Update round counter
//            document.getElementById('startButton').innerHTML = "New Game";
//        }
//    }      
//}
//
///*Start the appropriate timer depending how many rounds user has passed*/
//function startTimer(countDownTime) {
//    startClock = new Date().getTime();
//    var numSq = brdCol * brdRow;
//    var oneSec = 1000;
//    
//    /*Clear canvas*/
//    clearCanvas();
//    
//    /*Determine if the user can go to next round*/
//    if (numGamePlay == 0 || (areaCovered()/numSq < 0.4)) {
//        /*New Game*/
//        numGamePlay = 0; //Update round counter
//        clearInterval(gameTimer);
//        gameTimer = setInterval(function(){gameOver(countDownTime);}, oneSec);     
//        initGame();
//    }
//    else if(numGamePlay < 4) {
//        /*User can continue to next game with 30 to 50 seconds*/
//        countDownTime -= numGamePlay * 10;
//        clearInterval(gameTimer);
//        gameTimer = setInterval(function(){gameOver(countDownTime);}, oneSec); 
//        initGame();
//    }
//    else if(numGamePlay >= 4) {
//        /*User can continue to next game with 20 seconds*/
//        countDownTime = 20;
//        clearInterval(gameTimer);
//        gameTimer = setInterval(function(){gameOver(countDownTime);}, oneSec); 
//        initGame();
//    }
//}

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
