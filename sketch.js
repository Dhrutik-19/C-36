var database;

//wait = 0 , play = 1, end = 2
var gameState = 0;

var playerCount = 0;

var form; //object of Form class

var game;  //objevt of Game class

var player;   //object of Player class

function setup(){
createCanvas(400,400);

  //create the database --> firebase.database() inside the variable 'database'
  database = firebase.database();

  game = new Game();

  //read/get the gameState
  game.getState();

  //start the game
  game.start();
}

function draw(){
  
}