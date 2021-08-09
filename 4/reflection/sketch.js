//reflection
function setup(){
    createCanvas(displayWidth,displayHeight);   
}

function draw(){
	stroke(0);
	strokeWeight(0.5);
	fill('black');
    textSize(30);
	text('Legend',32.5,30);
    fill('blue');
    textSize(20);
    text('Before Reflection',20,60);
    fill('orange')
    text('After Reflection',20,90);
    
	//Before reflection
    translate(350,400);
    var a = [[100],[200],[1]];
    var b = [[150],[100],[1]];
    var c = [[200],[200],[1]];

    fill('blue');
    beginShape();
        vertex(a[0],a[1]);
        vertex(b[0],b[1]);
        vertex(c[0],c[1]);
    endShape(CLOSE);
    
   reflection_matrix = [
        [-1,0,0],
        [0,-1,0],
        [0,0,1]
    ];
    
    
    var aN = matrix_multiplication(reflection_matrix,a);
    var bN = matrix_multiplication(reflection_matrix,b);
    var cN = matrix_multiplication(reflection_matrix,c);
    
//after reflection
	translate(0,0);
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

