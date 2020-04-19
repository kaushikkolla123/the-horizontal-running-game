var PLAY = 1;
var END = 0;
var athlete1;
var athlete2;
var athlete3;
var athlete4;
var track;
var athlete1_img;
var athlete2_img;
var athlete3_img
var athlete4_img

function preload(){
track = loadImage("track.png");
athlete1 = loadImage("athlete1.png");
athlete2 = loadImage("athlete2.png");
athlete3 = loadImage("athlete3.png");
athlete4 = loadImage("athlete4.png");
}
function setup(){
createCanvas(1000,500);

athlete1 = createSprite(10,200,30,10);
athlete1.addImage("athlete1",athlete1_img);
athlete1.scale = 0.15;

athlete2 = createSprite(10,290,30,10);
athlete2.addImage("athlete2",athlete2_img);
athlete2.scale = 0.15;

athlete3 = createSprite(10,380,30,10);
athlete3.addImage("athlete3",athlete3_img);
athlete3.scale = 0.15;

athlete4 = createSprite(10,460,30,10);
athlete4.addImage("athlete4",athlete4_img);
athlete4.scale = 0.15;

}
function draw(){
background(track);
}