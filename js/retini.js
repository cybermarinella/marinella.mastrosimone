
var nbr_circles;
var retiniRandom;
var moire = 50;
var cx = 0; // x centro del cerchio
var cy = 0; // y centro del cerchio
var lg_diam;
var lg_rad;
var chiaro;
var scuro;
var opticalArea;
var angle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(30); 
  retiniRandom=int(random(1, 7));
  nbr_circles = 100;
  moire = 50;
  spessoreLinea = 3;
  poligono = 3;
  
}

function draw(){
  opticalArea = 30;
  chiaro = map(mouseX, width/2-lg_rad/2, width/2+lg_rad/2, 25, 250);
  scuro = map (mouseX, 0, width/2-lg_rad/2, width/2+lg_rad/2, 250, 25);

  background(chiaro);
  lg_diam = height-100;
  lg_rad = lg_diam / 2;
  noStroke();
  fill(scuro);
  ellipse(width/2, height/2, lg_diam, lg_diam);
  push();
  translate(width/2, height/2);
  rotateCerchio();
  pop();
  pelini_02()


  //text(chiaro, mouseX, mouseY)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function selectedCerchio(){
  if(retiniRandom == 1){
    cerchio_01();
  }else if(retiniRandom == 2){
    cerchio_02();
  }else if(retiniRandom == 3){
    cerchio_03();
  }else if(retiniRandom == 4){
    cerchio_04();
  }else if(retiniRandom == 5){
    cerchio_05();
  }else if(retiniRandom == 6){
    cerchio_06();
  }else if(retiniRandom == 7){
    cerchio_07();
  }
}

function rotateCerchio(){
  selectedCerchio();
  if(keyIsPressed){

  }else{
    var a = atan2(pmouseY-height/2, pmouseX-width/2);
    rotate(a);
    selectedCerchio();
  }
}

function pelini_02(){
  var bcx = width/2; // x centro del cerchio
  var bcy = height/2; // y centro del cerchio
  for (var bi = 1; bi <= 7; ++bi) {
    var angle = bi * PI / 60*2+25;
    var bx = bcx + cos(angle) * height/1.618;
    var by = bcy + sin(angle) * height/1.618;
    fill(chiaro)
    perlini(bx, by);
  }
}
function cerchio_01(){
  for (var i = 1; i <= nbr_circles; ++i) {
    for (var bi = 1.618; bi <= nbr_circles; ++bi) {
      angle = i * TWO_PI / nbr_circles;
      x = cy + cos(angle) * lg_rad;
      y = cx + sin(angle) * lg_rad;
      noStroke();
      fill(chiaro);
      ellipse(x*bi, y/bi, bi, moire*bi);
    }
  }
}
function cerchio_02(){
  //spessoreLinea(1, 7); nbr_circles(35, 140)
  strokeWeight(spessoreLinea);
  stroke(chiaro);
  strokeCap(ROUND);  
  lg_rad = (height-28)/2; // abbondanza linee vs cerchio centrale
  for (var i = 1; i <= nbr_circles; ++i) {
    var angle = i * TWO_PI / nbr_circles;
    var x = cx + cos(angle) * lg_rad;
    var y = cy + sin(angle) * lg_rad;
    line(x, y, cx-lg_rad, cy);
  }
}
function cerchio_03(){
  //moire(10,30)
  var spacer = moire*1.2;
  noStroke();
  fill(chiaro);
  for (var x = 0; x <= lg_diam+spacer; x+=spacer) {
    for (var y = 0; y <= lg_diam+spacer; y+=spacer) {
      ellipse(y-lg_rad, x-lg_rad, moire, moire);
    }
  }
}
function cerchio_04(){
  //poligono(1,7); moire(15, 30);
  var spacer = moire*2-poligono/10;
  noStroke();
  fill(chiaro);
  for (var x = 0; x <= lg_diam+spacer; x+=spacer) {
    for (var y = 0; y <= lg_diam+spacer; y+=spacer) {
      polygon(y-lg_rad, x-lg_rad, moire, poligono);
    }
  }
}
function cerchio_05(){
    var lg_circ = PI * lg_diam;
    spacer = moire*2;
  
    for (var i = 0.5; i <= nbr_circles/2; ++i) {
      var angle = i * TWO_PI / nbr_circles;
      var x = cx + sin(angle) * lg_diam;
      var y = cy + sin(angle) * lg_diam;
      stroke(chiaro);
      strokeWeight(spessoreLinea*i/2);
      noFill();
      polygon(cx, cy, spacer*i/2, poligono);
     // quad(x, cx, cy, y, -x, -cx, -cy, -y);
    }
}
function cerchio_06(){
    var lg_circ = PI * lg_diam;
  
    for (var i = 0.5; i <= nbr_circles*2; ++i) {
      var angle = i * TWO_PI / nbr_circles;
      var x = cx + sin(angle) * lg_diam;
      var y = cy + sin(angle) * lg_diam;
      stroke(chiaro);
      strokeWeight(0.1*i);
      noFill();
      quad(x, cx, cy, y, -x, -cx, -cy, -y);
    }
}
function cerchio_07(){
  var spacer = moire*2;
  fill(chiaro);
  noStroke();
  for (var x = 0; x <= lg_diam; x+=spacer) {
    for (var y = 0; y <= lg_diam; y+=spacer) {
      /*var rot = atan2(mouseY-height, mouseX-width);
      rotate(rot);*/
      polygon(y-lg_rad, x-lg_rad, moire, poligono);
    }
  }
}

function mousePressed() {
    retiniRandom = int(random(1, 10));
    if(retiniRandom == 1){
    }else if(retiniRandom == 2){
      spessoreLinea =int(random(3, 7));
      nbr_circles=int(random(35, 140));
    }else if(retiniRandom == 3){
      moire=int(random(10, 20));
    }else if(retiniRandom == 4){
      poligono=int(random(3,8));
      moire=int(random(10, 20));
    }else if(retiniRandom == 5){
      poligono=int(random(3,8));
      moire=int(random(5,30));
      nbr_circles=int(random(35, 80));
      if(poligono==7){
        nbr_circles=int(random(14, 28));
      }else{
        nbr_circles=int(random(35, 100));
      }
      moire=int(random(10, 20));
      spessoreLinea =int(random(3, 7));
    }else if(retiniRandom == 6){
      spessoreLinea =int(random(3, 7));
      nbr_circles=int(random(30, 60));
      moire=int(random(10, 20));
    }else if(retiniRandom == 7){
      poligono=int(random(3,8));
      moire=int(random(5,30));
      nbr_circles=int(random(35, 80));
  }
}
function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);   
}

function perlini(x, y){
  var separator = width/18;
  stroke(scuro, 60);
  fill(scuro, 60);
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
    line(0, 0, 15, 0);
    pop();
  }
  dragSegment(x, mouseX, mouseY);
}

function sliders(){
  retiniRandomSlider = createSlider(1, 7, 7);
  retiniRandomSlider.position(20, 20);
  nbr_circlesSlider = createSlider(50, 255, 100);
  nbr_circlesSlider.position(20, 50, 30);
  moireSlider = createSlider(8, 40, 50);
  moireSlider.position(20, 80, 100);
  spessoreLineaSlider = createSlider(1, 10, 3);
  spessoreLineaSlider.position(20, 110, 100);
  poligonoSlider = createSlider(3, 8, 3);
  poligonoSlider.position(20, 140, 100);
}