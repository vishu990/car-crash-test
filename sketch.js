var wall,car;
var speed,weight;
var deformation = 0.5 * weight * speed * speed/22509;

function setup() {
  createCanvas(800,400);
  car=createSprite(400,200,50,50);
  wall=createSprite(700,200,50,200);

  speed=random(55,90);
  weight=random(40,1500);
  car.velocityX=speed;
}

function draw() {

  background("black");

  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {car.velocityX=0;
    if(deformation>180)
    {car.shapeColor=color(255,0,0);

    }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
  }

  drawSprites();
}