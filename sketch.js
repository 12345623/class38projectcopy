var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1;

var car1image,track1image,track2image;
function preload()
{car1image= loadImage("images/car1.png")
track1image= loadImage("images/track.png")
track2image=loadImage("images/track.jpg")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
