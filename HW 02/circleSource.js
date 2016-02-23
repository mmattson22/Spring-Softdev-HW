var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.fillStyle = "#ff0000";
var startButton = document.getElementById("start");

var growing = true;
var radius = 0;

var draw = function draw(){
    ctx.clearRect(0,0,500,500);
    if(growing == true){
      radius = radius + 1;
     }
    else{
      radius = radius - 1;
    }
    if(radius >= 250){
	     growing = false;
    }
    else if (radius == 0){
	     growing = true;
    }
    ctx.beginPath();
    ctx.arc(250,250, radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();

    window.requestAnimationFrame(draw);
}


startButton.addEventListener("click", draw);
