var sketch = function( p ) {


  p.setup = function() {
    p.createCanvas(45, 45);
    frameRate(100);
  };

  p.draw = function() {
	var x = p.mouseX/2; 
	var y = p.mouseY/2;
	var pupilla_X = p.constrain(x, 0, 35);
	var pupilla_Y = p.constrain(y, 15, 40);
    p.background(255);
    p.fill(200);
    p.noStroke();
    p.ellipse(pupilla_X,pupilla_Y,30,30);
  };
};

var myp5 = new p5(sketch, 'pupil');

	var segLength = 80;
	var x, y;
	var gray = 170;
	var bk_color = 255;
	var spicchioXRandom;
	var spicchioYRandom;
	var angle = 0;

	function setup() {
		frameRate(100);
		createCanvas(700, 410);
		var myCanvas = createCanvas(windowWidth-30, windowHeight/1,618);
	  	myCanvas.parent('myContainer');
		strokeWeight(0.3);
		stroke(gray, 255);
		smooth();
		spicchioXRandom = random(-40, 40);
		spicchioYRandom = random(-40, 40);
	}

	function windowResized() {
		resizeCanvas(windowWidth, windowHeight);
	}

	function draw() {
		background(bk_color);
		pelini()
	  	logo_gen();
	  	scale(1.3,1.3);
		logo_m();
		textAlign(CENTER);
		//text("Marinella Mastrosimone", 25, 100);
		//text("Graphic Designer", 25, 120);
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
		blendMode(MULTIPLY);
		noStroke();
		translate(spicchioXRandom, spicchioYRandom);

		ellipse(0+mouseX/8, 0+mouseY/8, 60, 60)
		ellipse(30-mouseX/8, 75-mouseY/8, 30, 30)
		stroke(150);
		strokeWeight(1)
		line(0+mouseX/8, 0+mouseY/8, 30-mouseX/8, 75-mouseY/8);
	}
	function pelini(){
		var separator = width/18;
		for(var x = separator; x <= width-separator; x+=separator){
			for(var y = separator; y <= height-separator; y+=separator){
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
		push();
		//blendMode(LIGHTEST);
		blendMode(MULTIPLY);
		translate(-25, -30);
		fill(0);
		stroke(0.6);
		strokeCap(SQUARE);
		strokeJoin(BEVEL);
		strokeWeight(1);
		noStroke();
		beginShape(TRIANGLES);
		//fill(20);
		vertex(0, 0);
		vertex(14, 50);
		vertex(0, 50);

		//fill(50);
		vertex(0, 0);
		vertex(24, 28);
		vertex(24, 50);

		//fill(80);
		vertex(0, 0);
		vertex(14, 35);
		vertex(24, 50);

		//fill(100);
		vertex(14, 35);
		vertex(14, 50);
		vertex(0, 0);

		//fill(100);
		vertex(50, 0);
		vertex(34, 50);
		vertex(50, 50);

		//fill(80);
		vertex(50, 0);
		vertex(24, 28);
		vertex(24, 50);

		//fill(50);
		vertex(50, 0);
		vertex(34, 35);
		vertex(24, 50);

		//fill(20);
		vertex(34, 35);
		vertex(34, 50);
		vertex(50, 0);
		endShape();
		pop();
	}
	function mousePressed() {
		push()
		background(bk_color)
		spicchioXRandom = random(-40, 40);
		spicchioYRandom = random(-40, 40);
		pop()
	}


