song1 = "";
song2 = "";

leftX = 0;
rightX = 0;
leftY = 0;
rightY = 0;

function preload(){
    song1 = "music.mp3";
    song2 = "music2.mp3";
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Pose Net and Model has been initialized');
}

function draw(){
    image(video,0,0,400,300);
}

function gotPoses(results){
    if(results){
        leftX = results[0].pose.leftWrist.x;
        rightX = results[0].pose.rightWrist.x;

        leftY = results[0].pose.leftWrist.y;
        rightY = results[0].pose.rightWrist.y;

        console.log("Left wrist X and Y coordinates are - ","X = "+leftX,"Y = "+leftY);
        console.log("Right wrist X and Y coordinates are - ","X - "+rightX,"Y - "+rightY);
    }
}