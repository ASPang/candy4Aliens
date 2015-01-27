function checkIntersection() {
    var i, touch;  //loop counter
    
    /*Go through all the enemies to see if they intersect*/
    for (i = 0; i< aliens.length; i++) {        
        touch = character.intersect(aliens[i]);
        
        if (touch == true && candyTime() <= 0) {
            endGameFlag = true; 
        }
        else if (touch == true && candyTime() > 0) {
            newAlien(aliens[i]);
            points += 1;
        }
    }
}

function foundCandy() {
    touch = character.intersect(candy);
        
    if (touch == true) {
        /*Generate new candy in the game world*/
        genNewCandy();
        points += 1;
        powerUp = new Date().getTime();
        
        /*Add playtime*/
        addTime();
    }
    else if (candy.xPos < -50) {
        /*Generate new candy in the game world*/
        genNewCandy();
    }
}

/*Regenerate Alien*/
function newAlien(alien) {
    alien.xPos =  alien.canvas.width + genNumRange(100, 500); 
    alien.yPos = genNumRange(character.jumpHeight, alien.canvas.height-alien.height); 
}

/*Regenerate Candy*/
function genNewCandy() {
    candy.xPos = candy.canvas.width + genNumRange(100, 500); 
    candy.yPos = genNumRange(character.jumpHeight, candy.canvas.height-candy.height); 
}

