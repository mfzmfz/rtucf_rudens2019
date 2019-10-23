let mic;

function setup() {
createCanvas(windowWidth, windowHeight, );

mic = new p5.AudioIn();

mic.start();
}

function draw() {
background(255,36,30)

let vol = mic.getLevel();
let i = map(vol, 0,0.5,10,100);

rect(100,100,i,30);
print(vol);

}


function touchStarted() {
getAudioContext().resume();
}
