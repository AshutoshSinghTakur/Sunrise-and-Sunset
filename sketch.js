const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
    background(backgroundImg)
    }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
       //abbreviation: "IST"
       //client_ip: "122.175.141.117"
       //datetime: "2021-07-07T16:58:12.781372+05:30"

}

async function getBackgroundImg(){

    // write code to fetch time from API
    //var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago")
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responsejson = await response.json();
    console.log(responsejson);

    // write code slice the datetime
    var time = responsejson.datetime;
    console.log(time);

    var hour = time.slice(11,13)
    console.log(hour);

    //hour = 1

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 05 && hour <= 06){
        bg = ("sunrise1.png");
    }else if(hour >= 06 && hour <= 07){
        bg = ("sunrise2.png")
    }else if(hour >= 07 && hour <= 08){
        bg = ("sunrise3.png")
    }else if(hour >= 08 && hour <= 10){
        bg = ("sunrise4.png")
    }else if(hour >= 10 && hour <= 12){
        bg = ("sunrise5.png")
    }else if(hour >= 12 && hour <= 15){
        bg = ("sunrise6.png")
    }else if(hour >= 15 && hour <= 17){
        bg = ("sunset7.png")
    }else if(hour >= 17 && hour <= 19){
        bg = ("sunset8.png")
    }else if(hour >= 19 && hour <= 21){
        bg = ("sunset9.png")
    }else if(hour >= 21 && hour <= 23){
        bg = ("sunset10.png")
    }else if(hour >= 23 && hour <= 1){
        bg = ("sunset11.png")
    }else {
        bg = ("sunset12.png")
}
    

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)

}