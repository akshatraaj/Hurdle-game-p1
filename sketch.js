var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var cars,car1,car2,car3,car4;
var track, car1_img, car2_img, car3_img, car4_img;
function preload(){
 
}
function setup(){
  canvas = createCanvas(displayWidth - 20,displayHeight-30);
  database = firebase.database();
  form = new Form();
  form.display();
}


function draw(){
}
