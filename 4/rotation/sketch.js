//Rotation
function setup(){
    createCanvas(displayWidth,displayHeight);
   
	//to get the rotation factor from user
    r = prompt('Enter Rotation Factor');
	stroke(0);
	strokeWeight(0.5);
	fill('black');
    textSize(25);
    text('Rotation Factor = ',20,120);
    text(r,250,120);   
    
	if (r==90){
        r = 0;
    }else{
        r = r*PI/180;
    }
   
}

function draw(){
	stroke(0);
	strokeWeight(0.5);
	fill('black');
    textSize(30);
	text('Legend',35,30);
    fill('blue');
    textSize(20);
    text('Before Rotation',20,60);
    fill('orange')
    text('After Rotation',20,90);
    
    //Before Rotation
    translate(200,100);
    a = [[100],[300],[1]];
    b = [[200],[100],[1]];
    c = [[300],[300],[1]];

    fill('blue');
    beginShape();
        vertex(a[0],a[1]);
        vertex(b[0],b[1]);
        vertex(c[0],c[1]);
    endShape(CLOSE);
    
    xr = a[0];
    yr = a[1];

    //Rotation Matrix
    rotation_matrix = [
        [Math.cos(r),-1*Math.sin(r),xr],
        [Math.sin(r),Math.cos(r),yr],
        [0,0,1]
    ];
    
    
    aN = matrix_multiplication(rotation_matrix,a,xr,yr);
    bN = matrix_multiplication(rotation_matrix,b,xr,yr);
    cN = matrix_multiplication(rotation_matrix,c,xr,yr);

   //After Rotation 
    fill('orange');

    beginShape();
        vertex(aN[0],aN[1]);
        vertex(bN[0],bN[1]);
        vertex(cN[0],cN[1]);
    endShape(CLOSE);
    
    
}

function matrix_multiplication(a,b){
    b = [[b[0] - xr], [b[1] - yr],[b[2]]];
    let aRows = a.length;
    let aCols = a[0].length;
    let bRows = b.length;
    let bCols = b[0].length;
    let result = new Array(aRows);
    if (aCols == bRows){
        for (var i=0; i<aRows;++i){
            result[i] = new Array(bCols);
            for (var j =0 ; j<bCols;++j ){
                result[i][j] = 0;
                for (var k = 0; k<aCols;++k){
                    result[i][j] += a[i][k]*b[k][j];
                }
            }
        }
    return result;
    }
}