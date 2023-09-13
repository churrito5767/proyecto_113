function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill('#09B300')
    square(0, 0, 640, 30)
    square(0, 450, 640, 30)
    square(0, 0, 30, 480)
    square(610, 0, 30, 480)
    fill('#FF1C1C')
    circle(10, 10, 150);
    circle(630, 10, 150);
    circle(10, 470, 150);
    circle(630, 470, 150);
}

function take_snapshot() {
    save('student_name.png');
}