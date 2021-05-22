var hr,sc,mn,scAngle,mnAngle,hrAngle;



function setup() {
  createCanvas(650,500);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  hr=hour();
  mn=minute();
  sc=second();

  strokeWeight(8);  
  noFill();
  stroke(255,0,0);
  scAngle=map(sc,0,60,0,360)
  arc(0,0,300,300,0,scAngle);

  stroke(0,0,255);
  mnAngle=map(mn,0,60,0,360)
  arc(0,0,280,280,0,mnAngle);

  stroke(0,255,0);
  hrAngle = map(hr % 12,0,12,-0,360)
  arc(0,0,260,260,0,hrAngle);

  //draw seconds hand
  push();
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop();

  push();
  rotate(mnAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,75,0)
  pop();

  push();
  rotate(hrAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  
  
  
drawSprites();
}
