var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.fillStyle = ("#ff0000");
ctx.beginPath();

var lineDraw = function(e){
  ctx.arc( e.offsetX, e.offsetY, 25, 0, 2*Math.PI );
  ctx.moveTo(e.offsetX, e.offsetY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.fill();}

var button = document.getElementById( "clear" );
var clear = function(e) {
  e.preventDefault();
  ctx.clearRect(0, 0, 500, 500);
  ctx.beginPath();}
button.addEventListener( "click", clear );
c.addEventListener("click", lineDraw)
