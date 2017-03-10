var svg = document.getElementById("vimage");
var clear = document.getElementById("clear");
var rid;

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
    circle.setAttribute("velX",1);
    circle.setAttribute("velY",1);
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
	//var velX=1;
	//var velY=1;
	var maxX=500-40;
	var maxY=500-40;

	var moveAll=function(e){
		for(var i=0; i<circles.length; i++){
		    var curr = circles[i];
		    var velX=parseInt(curr.getAttribute("velX"));
		    var velY=parseInt(curr.getAttribute("velY"));
		    var cx = parseInt(curr.getAttribute("cx"));
		    var cy = parseInt(curr.getAttribute("cy"));
		    //console.log(cx);
		    //console.log(maxX);
		    if(cx>maxX||cx<=0){
			//velX=parseInt(curr.getAttribute("velX"))*-1;
			curr.setAttribute("velX", velX*-1);
			console.log(velX);
		    };
		    if(cy>=maxY||cy<=-20){
			//curr.setAttribute("velY", parseInt(curr.getAttribute("velY"))*-1);
			curr.setAttribute("velY", velY*-1);
		    };
		    console.log(velX);

		    curr.setAttribute("cx",cx+velX);
		    curr.setAttribute("cy",cy+velY);
		};//forloop
		rid=window.requestAnimationFrame(moveAll);
	};
	moveAll();
    });
	
	

clear.addEventListener("click", clrScreen);
svg.addEventListener("click", draw);
