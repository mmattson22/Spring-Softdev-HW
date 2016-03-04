var svgStuff = document.getElementById("vimg");
var startButton = document.getElementById("animate");
var stopButton = document.getElementById("stop");
var id;

var drawC = function(){
	clear();
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	var radius = 0;
	c.setAttribute( "cx", 250 );
	c.setAttribute( "cy", 250 );
	c.setAttribute( "r", radius );
	c.setAttribute( "fill", "blue" );
	c.setAttribute( "stroke", "black" );

	svgStuff.appendChild( c );

	var grow = true;

	var anim = function(){
		if(radius>=250)
			grow = false;
		if(radius<=0)
			grow = true;
		if(grow)
			radius+=1;
		else
			radius-=1
		console.log(radius);
		c.setAttribute( "r", radius);
	}

	id = setInterval(anim, 16);
};

var clear = function(){
	if(id)
		clearInterval(id);
	var c = document.getElementsByTagName("circle");
	if(c[0])
		c[0].remove();
}

startButton.addEventListener("click",drawC);
stopButton.addEventListener("click",clear);
