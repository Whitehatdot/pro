song="";
song1="";
k="";

function preload(){
    loadSound("one.mp3");
    loadSound("two.mp3")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,600);
}

function play(){
    song.play();
    song.setVolume(1);
}
