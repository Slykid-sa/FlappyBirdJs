var bird;
// var bird = new Image();
var pipes = [];
// bird.src = "kenny.png";

function setup() {
    createCanvas(400, 600);
    bird = new Bird;
    pipes.push(new Pipe());
}

function draw() {
    background(0);
    bird.update();
    bird.show();

    if (frameCount % 40 == 0) {
        pipes.push(new Pipe());
    }

    for (var i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();
        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
        console.log('SPACE');
    }
}  