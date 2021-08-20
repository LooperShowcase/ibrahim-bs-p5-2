function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(1180,670);
angleMode(DEGREES);

}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background(0,0,0);

  translate (width / 2, height/2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  let r=10;
  let g=10;
  let b=10;


  noFill();
  stroke (3, 215, 252);
  strokeWeight(5);


stroke(3, 215, 252)
let secondAngle = map(sc,0 ,60 ,0 ,360);
arc (0,0, 350,350,0,secondAngle);



stroke(255, 255, 255)
let minuteAngle = map(mn,0 ,60 ,0 ,360);
arc (0,0, 300,300,0,minuteAngle);





stroke(3, 215, 252)
let hourAngle = map(hr % 12,0 ,12 ,0 ,360);
arc (0,0, 250,250,0,hourAngle);




stroke(255)
strokeWeight(1);
rotate(90)
textSize(25)
text(hr + "  :  " + mn + "  :  " + sc ,0-75,0)
strokeWeight(5);

r=random(255);
g=random(255);
b=random(255);
stroke(r,g,b)
rect(-250, -200, 500,400);

rect (-500, -200,250,100)
rect (250, 100,250,100)

let d = day();
strokeWeight(1);
text('Current day: \n' + d, -470, -170 );

ellipse(380, 150, 55, 55);
ellipse(400, 150, 55, 55);
ellipse(420, 150, 55, 55);
ellipse(440, 150, 55, 55);
ellipse(460, 150, 55, 55);
ellipse(480, 150, 55, 55);
ellipse(360, 150, 55, 55);
ellipse(340, 150, 55, 55);
ellipse(320, 150, 55, 55);
ellipse(300, 150, 55, 55);
ellipse(280, 150, 55, 55);
ellipse(260, 150, 55, 55);


}
