//midpoint algorithm for circle
function setup(){
	createCanvas(displayWidth, displayHeight);
}
  
function draw(){
	midPointCircle(200, 500, 350);
}
  
function midPointCircle(r, xC, yC) { 		//(r is radidus, xC & yC are the coordinates of the center of the circle)
	var x0 = 0;
	var y0 = r;
	                                      
//Now, calculating initial value of decision paramter
	var p0 = 1 - r;
  
	var pk = p0;
	var x = x0;
	var y = y0;
  
	while (x <= y) {
	    if (pk < 0) {
		
			circle(xC + x, yC - y, 0);
  			x = x + 1;
			y = y;
			pk = pk + (2 * x) + 1;
  		} 
		else{  
			circle(xC + x, yC - y, 0);
			x = x + 1;
			y = y - 1;
			pk = pk + (2 * x) - (2 * y) + 1;
	  	}
	sp(x, y, xC, yC);                   //sp is symmetry points
	}
}
  
function sp(x, y, xC, yC) {
	circle(xC + y, yC - x, 0);
	circle(xC + y, yC + x, 0);
	circle(xC + x, yC + y, 0);
	circle(xC - x, yC + y, 0);
	circle(xC - y, yC + x, 0);
	circle(xC - y, yC - x, 0);
	circle(xC - x, yC - y, 0);	
}




