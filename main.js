img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('inside house.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function draw() {
    image(img, 0, 0, 640, 420);

    if (status != "") {
        for (i = 0; objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + "56" + "%", objects[i].x, objects[i].y + 15);
            noFill();
            stroke("FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }


    fill("#FF0000");
    text("Painting 65%", 135, 165);
    noFill();
    stroke('#FF0000');
    rect(130, 150, 95, 200);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}