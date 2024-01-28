function preload(){

}

function setup(){
    g = createCanvas(640,420);
    g.position(300,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video,0,0,640,420);
    tint(tint_color);
}

function take_snapshot(){
    save("person_"+tint_color+".png");
}

function add(){
    tint_color = document.getElementById("helloinput").value;
}