	var segLength = 80;
	var separator;
	var x;
	var y;
	var gray = 170;
	var bk_color = 255;
	var spicchioXRandom;
	var spicchioYRandom;
	var angle = 0;
	var img;

	var mcolor;

	

var d = new Date();
var n = d.getHours();

//n=5


	function preload() {  // preload() runs once
	  img = loadImage('material/logo.png');
	}

	function setup() {
		var mybody = document.getElementsByTagName("body")[0];
		var myname = document.getElementsByTagName("h2")[0];
		var myfooter = document.getElementById("closure");
		var mymenu = document.getElementsByTagName("a");

		var myCanvas = createCanvas(windowWidth, windowHeight);
	  	myCanvas.parent('virtualBk');
		strokeWeight(0.3);
		stroke(gray, 255);
		smooth();
		spicchioXRandom = random(-40, 40);
		spicchioYRandom = random(-40, 40);

		if(n >=9 && n<=18 ){
			sunLight =255;
			gray = 150;
			bk_color = 245;
			mcolor = 150;
		}else{
			sunLight =0;
			gray = 100;
			bk_color = 40;
			mcolor = 150;
			mybody.style.background = "#282828";
			mybody.style.color = "#efefef";
			myfooter.style.background = "#282828";
			myfooter.style.color = "#efefef";
			myname.style.color = "#fff";
			var i;
			for (i = 0; i < mymenu.length; i++) {
			    mymenu[i].style.color = "#efefef";
			}
		}
	}

	function windowResized() {
		resizeCanvas(windowWidth, windowHeight);
	}

	function draw() {
		background(bk_color)
		translate(-10, 0)
		pelini()
		push()
		translate(0, -80)
	  	logo_gen();
	  	scale(1.3,1.3);
		logo_m();
		pop();
	}

	function logo_gen(){
		translate(width/2, height/2);
		logo_genX = map(mouseX, width/2-100, width/2+100, 0, 360);
		logo_genY = map(mouseY, height/2-100, height/2+100, 0, 360);
		push();
		a = atan2(logo_genX, logo_genY)*10;
		rotate(a);
		logo_pi();
		pop();
	}
	function logo_pi(){
		noStroke();
		fill(bk_color);
		ellipse(0, 0, 300, 300);
		var red = color(237, 34, 40, 210);
		var green = color(8, 171, 82, 210);
		var yellow = color(250, 237, 33, 210);
		var blue = color(0, 157, 225, 210);	
		var colors = Array (gray ,red, green, yellow, blue);	
		var deg = 360/4;
		var rad = radians(deg);
		var singleRad = 0;
		for (var i = 1; i <= 4; ++i) {
			push();
			rotate(singleRad);
			fill(colors[i]);
			spicchio();
			var singleRad = singleRad+rad;
			pop();
		}
	}
	function spicchio(){
		if(n >=9 && n<=18 ){
			blendMode(MULTIPLY);
		}else{
			blendMode(SCREEN);
		}
		
		noStroke();
		translate(spicchioXRandom, spicchioYRandom);
		//ellipse(0+mouseX/8, 0+mouseY/8, 60, 60)
		//ellipse(30-mouseX/8, 75-mouseY/8, 30, 30)

		ellipse(get_mouseY()/1.618, get_mouseX()/1.618, 60, 60)
		ellipse(30-get_mouseX()/8, 75-get_mouseY()/8, 30, 30)
		
		
		beginShape();
  		vertex(0, 0);
		bezierVertex(110, 0, 110, 150, 0, 150);
  		bezierVertex(75, 125, 75, 25, 0, 0);
  		endShape();

		stroke(150);
		strokeWeight(1)
		line(get_mouseY()/1.618, get_mouseX()/1.618, 30-get_mouseX()/8, 75-get_mouseY()/8);
	}
	function pelini(){
		separator = width/18;
		for(var x = separator; x <= width; x+=separator){
			for(var y = separator; y <= height; y+=separator){
				fill(gray);
				ellipse(x, y, 3, 3);			
				function dragSegment(i, xin, yin) {
					dx = mouseX - x;
					dy = mouseY - y;
					angle2 = atan2(dy, dx);
					segment(x, y, angle2);
				}
				function segment(x, y, a) {
					push();
					translate(x, y);
					rotate(a);
					line(0, 0, segLength/2, 0);
					pop();
				}
				dragSegment(x, mouseX, mouseY);
	    	}
	  	}
	}
	function logo_m(){
		image(img, -25, -25, 50, 50);
	}
	function mousePressed() {
		push()
		background(bk_color)
		spicchioXRandom = randomGaussian(-80, 10);
		spicchioYRandom = randomGaussian(-80, -80);
		pop()
	}

function get_mouseX() {
  return int(abs(map(mouseX, 0, width, -width/2, width/2)))
}

function get_mouseY() {
  return int(abs(map(mouseY, 0, height, -height/2, height/2)))
}



/* =============== pupil ===================== */

var sketch = function( p ) {

  p.setup = function() {
    p.createCanvas(120, 120)
  };

  p.draw = function() {
	var x = p.mouseX 
	var y = p.mouseY
	var pupilla_X = p.constrain(x, 30, 90)
	var pupilla_Y = p.constrain(y, 30, 100)
    p.background(255)
    p.fill(200)
    p.noStroke()
    p.ellipse(pupilla_X,pupilla_Y,50,50)
    p.fill(255)
    p.ellipse(30,20,15,15)
    p.stroke(200)
    p.noFill()
  };
};

var myp5 = new p5(sketch, 'pupil');