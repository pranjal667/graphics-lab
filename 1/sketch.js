//FLAG OF NEPAL
function setup() {
	createCanvas(displayWidth, displayHeight);
	textSize(20);
	text('Display Resolution = ',450,25)
	text(displayWidth,650,25);
	text('X',700,25);
    text(displayHeight,720,25);
}

function draw() {
	//blue region
	stroke(25,25,112);
	fill(25,25,112);
	triangle(500,300,800,300,500,50);
	triangle(500,500,850,500,500,50);

	//red region
	stroke(220,20,60);
	fill(220,20,60);
	triangle(510,290,770,290,510,70);
	triangle(510,490,827,490,510,80);

	//sun
	stroke(255);//outline color of Sun
	fill(255);//sun Color
	star(600,400,35,55,12);//sun

	//moon
	arc(600,200,115,160,0,-PI);//moon lower arc
	
	stroke(220,20,60);//outline color of upper arc 
	fill(220,20,60);//upper arc color
	arc(600,170,120,160,0.4,-PI); //upper arc of moon
	
	stroke(255);//outline color of moonStar 
	fill(255); //moonStar color
	star(600,235,20,30,14);//moonStar
}


function star(x, y, r1, r2, totalVertex) {
  	var angle = TWO_PI / totalVertex;
  	var halfAngle = angle / 2;
  	beginShape();
  	for (var i = 0; i < TWO_PI; i += angle) {
    	var starX = x + cos(i) * r2;
    	var starY = y + sin(i) * r2;
    	vertex(starX, starY);
    	starX = x + cos(i+halfAngle) * r1;
    	starY = y + sin(i+halfAngle) * r1;
    	vertex(starX, starY);
  	}
  	endShape();
}
