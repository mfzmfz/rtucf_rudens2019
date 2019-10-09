let canvas;

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('z-index', '-1');

}

function draw(){
  background(255, 0, 0);
  fill(255,255,200);
  rect(random(100,500), random(0,400), random(10,15), random(10,15));
  fill(0,255,200);
  ellipse(random(0,100), random(0,400), random(10,15), random(10,15));

}
