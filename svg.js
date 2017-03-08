var svg = document.getElementById("vimage");
var move = document.getElementById("move");
var clear = document.getElementById("clear");

var clrScreen = function() {
    while(svg.firstChild) {
	svg.removeChild(svg.firstChild);
    }
    console.log("clear");
}

var change = function(e) {
    console.log("change");
    circle.setAttribute("color", "red");
    e.stopPropagation();
}

function circle(x,y) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx",x);
    circle.setAttribute("cy",y);
    circle.setAttribute("r",20);
    circle.addEventListener("click",change);
    return circle;
}

var draw = function(e) {
    var c = circle(e.offsetX, e.offsetY);
    svg.appendChild(c);
}

clear.addEventListener("click", clrScreen);
svg.addEventListener("click", draw);
