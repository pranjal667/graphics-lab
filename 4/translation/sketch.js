//Translation
function setup(){
    createCanvas(windowWidth,windowHeight);
    translation = prompt('Enter the translation Factor: ');
    stroke(0);
	strokeWeight(0.5);
	fill('black');
    textSize(25);
    text('Translation Factor = ',20,120);
    text(translation,250,120);   
}

function draw(){
	stroke(0);
	strokeWeight(0.5);
	fill('black');
    textSize(30);
	text('Legend',45,30);
    fill('blue');
    textSize(20);
    text('Before Translation',20,60);
    fill('orange')
    text('After Translation',20,90);
    
    
	//Before translation
    
	translate(100,150);
    a = [[50],[100],[1]];
    b = [[150],[100],[1]];
    c = [[100],[50],[1]];
   
	//drawing triangle before translation
    fill('blue');
    beginShape(); 
        vertex(a[0],a[1]);
        vertex(b[0],b[1]);
        vertex(c[0],c[1]);
    endShape(CLOSE);
    
    //creating translation Matrix
    translation_matrix = [
        [1,0,translation],
        [0,1,translation],
        [0,0,1]
    ];
    
    aN = matrix_multiplication(translation_matrix,a);
    bN = matrix_multiplication(translation_matrix,b);
    cN = matrix_multiplication(translation_matrix,c);
    
    
    translate(200,0);
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

