//Shearing
function setup(){
    createCanvas(displayWidth,displayHeight);
    
	//to get the shearing factor from user
    shear = prompt('Enter Shearing Factor');
	stroke(0);
	strokeWeight(0.5);
	fill('black');
    textSize(25);
    text('Shearing Factor = ',20,120);
    text(shear,250,120);  
}

function draw(){
	stroke(0);
	strokeWeight(0.5);
	fill('black');
    textSize(30);
	text('Legend',35,30);
    fill('blue');
    textSize(20);
    text('Before Shearing',20,60);
    fill('orange')
    text('After Shearing',20,90);

    //Before Shearing
    translate(200,200);
    a = [[10],[50],[1]];
    b = [[30],[10],[1]];
    c = [[50],[50],[1]];

    fill('blue');
    beginShape();
        vertex(a[0],a[1]);
        vertex(b[0],b[1]);
        vertex(c[0],c[1]);
    endShape(CLOSE);
    
    //Shearing Matrix
    shear_matrix = [
        [1,shear,0],
        [0,1,0],
        [0,0,1]
    ];

    y = [
        [-1,0,0],
        [0,1,0],
        [0,0,1],
    ];
    resultant = matrix_multiplication(y,shear_matrix)
    
    aN = matrix_multiplication(resultant,a);
    bN = matrix_multiplication(resultant,b);
    cN = matrix_multiplication(resultant,c);

    //after shearing
    translate(500,100);
    fill('orange');

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

