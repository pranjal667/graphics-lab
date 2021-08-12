//LiangBarsky 
function setup(){
    createCanvas(screen.width, screen.height);
}

let xWmin=400;
let yWmin=250;
let xWmax= 800;
let yWmax=500;

function draw(){
    stroke(0);
	strokeWeight(0.5);
	fill('black');
    textSize(30);
	text('Legend',45,30);
    fill('blue');
    textSize(20);
    text('RECTANGULAR WINDOW',20,60);
    fill('orange');
    text('CLIPPED LINE',20,90);

    fill('white');
    stroke(0,0,255);
    strokeWeight(2);
    rect(xWmin,yWmin,(xWmax-xWmin),(yWmax-yWmin));
    
   
    clip(500,60,600,500); //rejected
    clip(700,600,800,660);
    clip(490,300,600,350);
}

function clip(x1,y1,x2,y2){ 
    let a = [];
    let b = [];
    let r1 = [];
    let r2 = [];
    let flag = true;

    dx = (x2 - x1);
    dy = (y2 - y1);
    a[0] = -dx;
    a[1] = dx;
    a[2] = -dy;
    a[3] = dy;
    
    b[0] = x1 - xWmin;
    b[1] = xWmax - x1;
    b[2] = y1 - yWmin;
    b[3] = yWmax - y1;

    for (i = 0; i < 4; i++) {
        if (a[i] === 0) {
            if (b[i] < 0)
                flag = false;
        }
    }

    if (flag == true) {
        for (i = 0; i < 4; i++) {
          if (a[i] < 0) 
            {
                r1.push((b[i] / a[i])); //Append r1 array
            }
            else if (a[i] > 0) 
            {
                r2.push((b[i] / a[i])); //Append r2 array
            }
        }
    }

    u1 = max(r1);
    u2 = min(r2);

    if(u1<u2){
        xp = x1 + u1*dx;
        yp = y1 + u1*dy;
        xq = x1 + u2*dx;
        yq = y1 + u2*dy;
        stroke(255,165,0);
        strokeWeight(2);
        line(xp,yp,xq,yq); //required Clipped Line
    }  
}

