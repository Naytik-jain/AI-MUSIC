song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
Status1="";
Status2="";

function preload(){
    song1=loadSound("Musical.mp3");
    song2=loadSound("bensound-onceagain.mp3");
}
function draw(){
image(video,0,0,500,600);
fill("#fc6603");
stroke("#fc3103");
Status1=song1.isPlaying();
Status2=song2.isPlaying();
console.log("Status1= " + Status1 + ", Status2= " + Status2);
if (scoreLeftWrist > 0.2) {
   
    circle(leftWristX,leftWristY,20);
    song2.stop();
    
}


if (scoreRightWrist > 0.2) {
      
    circle(rightWristX,rightWristY,20);
function setup(){

canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,Modelloaded);
poseNet.on('pose',gotresult);
 
    
}

function Modelloaded(){
console.log('Posenet is Initialized');
}

function Play(){
    btn_txt=document.getElementById("button").innerHTML;
    song.setVolume(0.5);
    song.rate(1);

    
 if (btn_txt == "Play" ){
     song.play();
     document.getElementById("button").innerHTML="Pause";
 }
 else {

song.pause();
document.getElementById("button").innerHTML="Play";
 }


}

function gotresult(results){
    if (results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        console.log("Left Wrist x= " + leftWristX + ",Left Wrist y= " + leftWristY);
        console.log("Right Wrist x=" + rightWristX + ", Right Wrist y= " + rightWristY );

        scoreLeftWrist=results[0].pose.keypoints[9].score;
        scoreRightWrist=results[0].pose.keypoints[10].score;
        console.log("Left Wrist Score : " + scoreLeftWrist + "  Right Wrist Score : " + scoreRightWrist);
    }
}