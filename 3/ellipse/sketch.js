//midpoint algorithm for ellipse
function setup() {
	createCanvas(displayWidth, displayHeight);
  }
  
  function draw() {
	midPointEllipse(200,150,650,350);
  }
  
  function midPointEllipse(rX,rY,xC,yC){
	var x0 = 0;
	var y0 = rY;
	
//calculating the initial value of the decision paramter in region 1
	
    var p1o = sq(rY) - (sq(rX) * rY) + (1 / 4 * sq(rX));

	var p1k = p1o;
	var x = x0;
	var y = y0;
	
	while ((2 * sq(rY) * x) <= (2 * sq(rX) * y)){
		if (p1k < 0){
	  		ellipse(xC + x,yC + y,0);
	  		x = x + 1;
	 	 	y = y;
	  		p1k = p1k + (2 * sq(rY) * x) + sq(rY);
		}
		else{
	  		ellipse(xC + x,yC + y,0);
	  		x = x + 1;
	  		y = y - 1;
	  		p1k = p1k + (2 * sq(rY) * x) - (2 * sq(rX) * y) + sq(rY);
		}
	  	sp(x,y,xC,yC);           //sp refers to symmetry points
	}
	
// calculate the initial calue of decision parameter in region 2

	var p2o = sq(rY) * sq(x + 1 / 2) + sq(rX) * sq(y - 1) - sq(rX) * sq(rY);
  	var p2k = p2o;
	
	while(y > 0){
	  	if (p2k <= 0){
			ellipse(xC + x,yC + y,0);
  			x = x + 1;
			y = y - 1;
			p2k = p2k + (2 * sq(rY) * x) - ( 2 * sq(rX) * y) + sq(rX);  
		}
	  	
		else{
			ellipse(xC + x,yC + y,0);
  			x = x;
			y = y - 1;
			p2k = p2k - (2 * sq(rX) * y) + sq(rX);
		}
		sp(x,y,xC,yC);
  	}
}

// determine the symmetry points in other three quadrants 
function sp(x,y,xC,yC){
	ellipse(xC + x,yC - y,0);
	ellipse(xC - x,yC - y,0);
	ellipse(xC - x,yC + y,0); 
}
	
	