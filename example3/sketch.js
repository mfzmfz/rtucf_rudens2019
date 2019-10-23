
let n = 0.0;
let increment = 0.1;

let x = [];
let y = [];



function setup(){

canvas = createCanvas(windowWidth,windowHeight);
canvas.position(0,0);
canvas.style('z-index', '-1');
background(249, 236, 242);

for(let i = 0; i < 13; i++){

x[i] = random(0, windowHeight);
y[i] = random(0, windowHeight);

}

//y = random(0, windowHeight);
}

function draw(){


frameRate(15);
n+=increment;
let pos = noise(n)*100;

for(let i = 0; i < 13; i++){

stroke(random(0,150), 200, 30);
line(x[i]*pos,y[i],x[i]*pos,y[i]+100);

}



increment+=0,5;
}
