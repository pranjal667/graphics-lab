//BLA
function setup() {
	createCanvas(displayWidth, displayHeight);
}
  
function draw() {
	textSize(24);
	text('Output for |m|<1',250,50);
	blaLine(300, 250, 425, 500);
	textSize(24);
	text('Output for |m|>=1',500,50);
	blaLine(500,350,650,400);
}
  
  
function blaLine(x0, y0, x1, y1){
	var dx = x1 - x0;
	var dy = y1 - y0;
  
	var slope = abs(dy / dx);
  
	if (slope < 1) {
	  bla1(x0, y0, dx, dy);
	} 
	else {
	  bla2(x0, y0, dx, dy);
	}
}
  
//creating method for slope less than 1

function bla1(x0, y0, dx, dy){
	var p0 = 2 * dy - dx;
  
	var x = x0;
	var y = y0;
	var pk = p0;
  
	beginShape();
	var i = 0;
	while(i <= dx){
		if (pk < 0) {
			vertex(x, y);
			x = x + 1;
			y = y;
			pk = pk + 2 * dy;
		} 
		else{
			vertex(x, y);
			x = x + 1;
			y = y + 1;
			pk = pk + (2 * dy) - (2 * dx);
		}	
		i++;

	}
	endShape();
}
  
//creating method for slope less than 1

function bla2(x0, y0, dx, dy) {
	var p0 = (2 * dx) - dy;
  	var x = x0;
	var y = y0;
	var pk = p0;
  
	beginShape();
	var i = 0;
	while(i <= dy){
		if (pk < 0) {
			vertex(x, y);
			x = x;
			y = y + 1;
			pk = pk + 2 * dx;
		} 
		else{
			vertex(x, y);
			x = x + 1;
			y = y + 1;
			pk = pk + (2 * dx) - (2 * dy);
		}
		i++;
    }
	endShape();
}
	
