function preload(){

}

function setup(){
canvas=createCanvas(1000,635);
camera=createCapture(0,0);
camera.hide();
canvas.center();
}

function take_snapshot(){
    save("picture.png");
}

function draw(){
image(camera,325,150,350,350);
fill("red");
stroke("red");
circle(325,115,35);

fill("orange");
stroke("orange");
circle(405,115,35);

fill("yellow");
stroke("yellow");
circle(475,115,35);

fill("green");
stroke("green");
circle(545,115,35);

fill("blue");
stroke("blue");
circle(615,115,35);

fill("purple");
stroke("purple");
circle(685,115,35);

fill("red");
stroke("red");
circle(325,535,35);

fill("orange");
stroke("orange");
circle(405,535,35);

fill("yellow");
stroke("yellow");
circle(475,535,35);

fill("green");
stroke("green");
circle(545,535,35);

fill("blue");
stroke("blue");
circle(615,535,35);

fill("purple");
stroke("purple");
circle(685,535,35);
}