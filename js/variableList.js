/* 
 * Coder: Angela Pang
 * 
 * Assignment: CIS4500 Week 2 - Visibility (Candy 4 Aliens)
 * Date: 2015/01/14
 * Modified: 2015/01/27
 * 
 * Filename: variableList.js
 * 
 * Description:
 * This files contains the variables within the interlocking block game.
 * 
 */

var c;  //Canvas variable
var ctx;    //Canvas Context
var cBlock;     //Block canvas
var ctxBlock;   //Block context

var gameImage;
var imgSrc = ["background1", "character", "alien1", "candy"];   /*Name of images*/
var backgroundImg;  //background image
var character;  //character image
var candy;  //candy image
var aliens = [];
var alienVisibility = 1.0;
var visible = true;

var points = 0;
var powerUp = 0;
var powerUpEnd = 7;





















var gameBoard = []; //Array for the board game
var blockList = [];  //Array for the blocks
var blockImg = []; //Stores all the images

var blockSize = 50; //Blocksize in pixels
var brdCol = 6; //Number of columns
var brdRow = 8; //Number of rows 
var startPos = 46;  //Starting Position
var curPos; //Current position on the board
var oldPos;

var lastKey = 39;
var tempBlkNum; //Might not need
var tempBlkPos;