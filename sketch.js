var fixedRect, movingRect, newRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  newRect = createSprite(100,200,80,30);
  newRect.shapeColor = "green";
  newRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if( isTouching(movingRect,fixedRect)){
    movingRect. shapeColor = "red";
    fixedRect. shapeColor = "red";
  
  } 
  else if( isTouching(movingRect,newRect)){
    movingRect. shapeColor = "blue";
    newRect. shapeColor = "blue";
  
  } 
  else{
    movingRect. shapeColor = "green";
    fixedRect. shapeColor = "green"; 
    newRect.shapeColor = "green";
  }
  
  drawSprites();
}
// moving rect as object 1, fixed rect as object 2
