function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameover=loadSound("gameover.wave");
	mario_coin=loadSound("coin.wav");
	mario_jump=loadSound("jump.wav");
	mario_kick=loadSound("jump.wav");
	mario_die=loadSound("mariodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console')
	poseNet = ml5.poseNet(video,modal_loaded);
	poseNet.on('pose',gotPoses);

}
function modalloaded(){
	console.log("modal loaded succesfully !");
}
function gotPoses(results){
	if (results.length>0){
		console.log(results);
		nosex=results[0].pose.nose.x
		nosey=results[0].pose.nose.y
	}
	
}

function draw() {
	game()
}






