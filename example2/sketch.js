let img;
let box1;
let box2;
let size = 20;
function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);

img = loadImage('https://public-media.si-cdn.com/filer/e3/4a/e34af87e-e36d-4e3e-95b3-3ec2a0ac2fb3/4243326958_471d9b997e_o.jpg');
box1 = new cube(size);
box2 = new cube(size);
}


function draw() {
  background(255, 0, 0);
  box1.display();
  box2.display();
}


class cube {
  constructor(size) {
    this.size = size;
  }
  display(){

    push();

    rotateY(30);
    rotateZ(5);

    translate(30, 20);
    fill(20,100,100,20);
    stroke(255,255,255);

    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(img);
    box(30);
    pop();

    push();
    translate(110, 20);

    fill(200,150,20);
    sphere(50);
    stroke(100,20,100);
    pop();

  }
}
