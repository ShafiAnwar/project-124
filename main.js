function setup(){
	video=createCapture(VIDEO);
	video.size(550,500);

	canvas=createCanvas(550,550);
	canvas.position(560,160);

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotposes);
}
function modelLoaded(){
	console.log("model Loaded!");
}
function gotposes(results){
if(results.length>0){
	console.log(results);
}
}
function draw(){
	background("aquamarine");
}

