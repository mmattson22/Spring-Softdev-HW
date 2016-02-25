var c = document.getElementById("slate");
var ctx = c.getContext("2d");

ctx.fillStyle= "#ff0000";


var bounceyTime = function() {

    var xDir = 1.5;
    var yDir = 2;
    var x = 250;
    var y = 250;

    var img = new Image();
    img.src = 'image1.jpg'

    var animCode = function() {
        ctx.clearRect(0,0,c.width,c.height);

	      if (x + xDir > c.width-100 || x + xDir < 0) {
	        xDir = 0-xDir;
	      }
	      if (y + yDir > c.height-100 || y + yDir < 0) {
	        yDir = 0-yDir;
	      }
	ctx.drawImage(img,x,y,100,100);
	x += xDir;
	y += yDir;
  window.requestAnimationFrame(animCode);
    }

    animCode();
}

var s = document.getElementById("start");
s.addEventListener("click", bounceyTime);
