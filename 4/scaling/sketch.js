//Scaling
function setup(){
    createCanvas(screen.width,screen.height);

	//to get the scaling factor from user
    scale = prompt('Enter Scaling Factor');
	
	stroke(0);
	strokeWeight(0.5);
	fill('black');
    textSize(25);
    text('Scaling Factor = ',20,120);
    text(scale,250,120);   
}

function draw(){
    stroke(0);
	strokeWeight(0.5);
	fill('black');
    textSize(30);
	text('Legend',32.5,30);
    fill('blue');
    textSize(20);
    text('Before Scaling',20,60);
    fill('orange')
    text('After Scaling',20,90);

    //Before Scaling
    translate(300,200);
    a = [[10],[50],[1]];
    b = [[30],[10],[1]];
    c = [[50],[50],[1]];

    fill('blue');
    beginShape();
        vertex(a[0],a[1]);
        vertex(b[0],b[1]);
        vertex(c[0],c[1]);
    endShape(CLOSE);
    
    //Scaling Matrix
    scale_matrix = [
        [scale,0,0],
        [0,scale,0],
        [0,0,1]
    ];
    
    
    aN = matrix_multiplication(scale_matrix,a);
    bN = matrix_multiplication(scale_matrix,b);
    cN = matrix_multiplication(scale_matrix,c);
    
    translate(300,0);
    fill('orange')

    beginShape();
        vertex(aN[0],aN[1]);
        vertex(bN[0],bN[1]);
        vertex(cN[0],cN[1]);
    endShape(CLOSE);
    
    
}

function matrix_multiplication(a,b){
    let aRows = a.length;
    let aCols = a[0].length;
    let bRows = b.length;
    let bCols = b[0].length;
    let res = new Array(aRows);
    if (aCols == bRows){
        for (var i=0; i<aRows;++i){
            res[i] = new Array(bCols);
            for (var j =0 ; j<bCols;++j ){
                res[i][j] = 0;
                for (var k = 0; k<aCols;++k){
                    res[i][j] += a[i][k]*b[k][j];
                }
            }
        }
    return res;
    }
}

