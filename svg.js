var svg = document.getElementById("vimage");
var move = document.getElementById("move");
var clear = document.getElementById("clear");

var clrScreen = function() {
    while(svg.firstChild) {
	svg.removeChild(svg.firstChild);
    }
}

var changeColor = function(e) {
    this.setAttribute("fill", "red");
    e.stopPropagation();
}

var remove = function() {
    if ((this.getAttribute("fill") == "red") && (this.getAttribute("state") == 0)) {
	this.setAttribute("state", 1);
    }
    else if (this.getAttribute("state") == 2) {
	svg.removeChild(this);
	draw2(Math.random() * svg.getAttribute("width"), Math.random() * svg.getAttribute("height"));
    }
    this.setAttribute("state", 2);
}

function circle(x,y) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx",x);
    circle.setAttribute("cy",y);
    circle.setAttribute("r",20);
    circle.setAttribute("state",0);
    circle.addEventListener("click",changeColor);
    circle.addEventListener("click",remove);
    return circle;
}

var draw = function(e) {
    var c = circle(e.offsetX, e.offsetY);
    svg.appendChild(c);
}

var draw2 = function(x,y) {
    var c = circle(x,y);
    svg.appendChild(c);
}

clear.addEventListener("click", clrScreen);
svg.addEventListener("click", draw);
