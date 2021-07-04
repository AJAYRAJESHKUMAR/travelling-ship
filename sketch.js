var ship,ship_moving;
var seaImage;
var sea;

function preload()
{
  seaImage=loadImage("sea.png");
    ship_moving=loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
    }

function setup()
{
  createCanvas(600,400);

  sea=createSprite(200,200);
    sea.addImage(seaImage);
    sea.scale=0.5;
  //creating ship
  ship= createSprite(150,180,70,70);
  ship.addImage(ship_moving);
  ship.scale=0.4;
  
  
}

function draw() {
  
  background(0);
  if(sea.x<0){
sea.x=sea.width/2;
  }
   drawSprites();
}
  