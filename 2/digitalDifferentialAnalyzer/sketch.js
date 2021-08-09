//DDA
function setup() {
	createCanvas(displayWidth, displayHeight);
}
  
function draw() {
	textSize(24);
	text('Output for DDA',180,50);
	ddaLine(150, 500, 480, 220);     //coordinates for the dda line
}
  
function ddaLine(x1, y1, x2, y2){
	var dx = x2 - x1;
	var dy = y2 - y1;
  
	if (abs(dx) > abs(dy)) {
	  	var stepSize = abs(dx);    //abs is for finding absolute value
	} 
	else{
	  	stepSize = abs(dy);
	}
  
	var x = x1;
	var y = y1;

	var xInc = (dx / stepSize);
	var yInc = (dy / stepSize);
  
	beginShape();
	var i = 0;
	while(i<=stepSize){
		vertex(round(x), round(y));
	  	x = x + xInc;
	  	y = y + yInc;	
		i++;  
	}
	endShape();
}