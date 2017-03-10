var svg = document.getElementById("vimage");
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
    circle.setAttribute("velX",0);
    circle.setAttribute("velY",0);
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


//reminderthis is wrong;clear circles 
var move = document.getElementById("move");

move.addEventListener('click', function(){
	var circles = document.getElementsByTagName('circle');
	window.cancelAnimationFrame(rid);
	var velX=1;
	var velY=1;
	var maxX=500-40;
	var maxY=500-40;

	var moveAll=function(e){
		for(var i=0; i<circles.length; i++){
		    var curr = circles[i];
		    var cx = curr.getAttribute("cx");
		    var cy = curr.getAttribute("cy");
		    if(cx>maxX||cx<=0){
			curr.setAttribute("velX", curr.getAttribute(velX)*-1);
		    };
		    if(cy>=maxY||cy<=-20){
			curr.setAttribute("velY", curr.getAttribute(velY)*-1);
		    };
		    curr.setAttribute("cx",cx+velX);
		    curr.setAttribute("cy",cy+velY);
		};//forloop
		rid=window.requestAnimationFrame(moveAll);
	};
	moveAll();
    };
	
	

clear.addEventListener("click", clrScreen);
svg.addEventListener("click", draw);
