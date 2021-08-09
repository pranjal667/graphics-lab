//midpoint line drawing algorithm
function setup() {
	createCanvas(displayWidth, displayHeight);
}
  
function draw() {
	textSize(24);
	text('Output for Mid Point Line Drawing Algorithm',220,50);
	text('Output for |m|<1',250,150);
	midPointLine(300, 250, 425, 500);     //coordinates for the line
	text('Output for |m|>=1',500,150);
	midPointLine(500, 350, 650, 400);
}

function midPointLine(X1, Y1, X2, Y2){
 
    // calculate dx & dy
    var dx = X2 - X1;
    var dy = Y2 - Y1;
	var m = dy / dx;
 
    // initial value of decision parameter d
    var d = dy - (dx/2);
    var x = X1
	var y = Y1;
 
	beginShape();
	vertex(x,y);
    
	// for slope < 1
    if(abs(m)<1){
		while ( x < X2)
   		{
		   	x++;
	      	if (d < 0){
            	d = d + dy;
		    }
        	else{
            d += (dy - dx);
            y++;
        	}
			vertex(x,y);
    	}
	}
	//for slope >=1
	else{
		while ( y < Y2)
   		{
			y++;
			if (d < 0){
				d = d + dx;
		 	}
		  	else{
		 		 d += (dx - dy);
		 		 x++;
		  	}
			  vertex(x,y);
    	}

	}
	endShape();
}
 
