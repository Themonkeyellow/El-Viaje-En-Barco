

function preload(){
 seaImg = loadImage("sea.png");
 shipImage = loadAnimation (ship1.png,ship2.png);
if (sea.x <1) {
  sea.x=sea.width/2;
}
}

function setup(){
  createCanvas(400,400);
  var sea = createSprite(20,4060,80,50);
    sea.addImage(seaImage);
    var ship = createSprite(200,300,100,50);
    ship.addImage(shipImage);
}

function draw() {
  background("blue");
  drawSprites();
  
}
