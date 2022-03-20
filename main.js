img = "";

function preload() {
    img = loadImage('inside house.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("painting", 135, 165);
    noFill();
    stroke('#FF0000');
    rect(130, 150, 95, 200);
}