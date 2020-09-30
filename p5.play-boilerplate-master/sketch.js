var F,M
function setup() {
  createCanvas(800,400);
 F= createSprite(400, 200, 50, 50);
 M= createSprite(200, 200, 50, 50);
 M.shapeColor="purple"
 F.shapeColor="purple"
 M.debug=true
 F.debug=true
}

function draw() {
  background(255,255,255);
  M.x=World.mouseX
  M.y=World.mouseY
  
  if (M.x - F.x < F.width/2 + M.width/2 
    && F.x - M.x < F.width/2 + M.width/2 
    && M.y - F.y < F.height/2 + M.height/2 
    && F.y - M.y < F.height/2 + M.height/2) 
    { M.shapeColor = "pink"; F.shapeColor = "pink"; } 
    else 
    { M.shapeColor = "purple"; F.shapeColor = "purple"; }
  drawSprites();
}