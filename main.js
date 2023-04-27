function setup(){
    video=createCapture(VIDEO);
   video.size(550,500);
   canvas=createCanvas(550,500);
canvas.position(660,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
} 

function gotPoses(results){
    if (results.length>0){
        console.log(results);
    }
}
function draw(){
    background('#FF0000');
    textSize(difference);
    fill('#F90093');
    text(YUVRAJ,50,200);
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}