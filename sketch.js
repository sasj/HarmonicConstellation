// Daily 
// Saskia Freeke
// 2023

let windowScale;


let shape = [];
let totalShapes = 130;

let colorPalette = [];
let colorStroke = [];
let sizeArray = [];
let dimArray = []; 
let lineHeightArray = [];
let shapeVariantArray = [];

let a = 1;
let shapeSize = 100; 
         
let spacingX; 
let spacingY;

let marginX;
let marginY;   
let backgroundMarginX;     
let backgroundMarginY;  
let backgroundRectSize;   
let backMargin; 
let startRectX; 
let startRectY;   
     
let record = false; 

function setup() {            
    // windowResized();     
    createCanvas(800, 800,SVG);      
    // createCanvas(800, 800);                
    rectMode(CENTER);         
    pixelDensity(1);                      
              
    colorPalette = [color('#000000'),color('#45CFDD'),
                    color('#2F99AD'),color('#FFBE00'), 
                    color('#6527BE') ];            
    colorStroke =   [color('#000000')];              
    sizeArray = [shapeSize/2,shapeSize/2,shapeSize/4,shapeSize/4,shapeSize/2];    
    dimArray = [shapeSize/2,shapeSize/4,shapeSize];                             
    lineHeightArray = [shapeSize/2,shapeSize,shapeSize/2,shapeSize,shapeSize/4];                  
    shapeVariantArray = [1,5,4]; // 5,6       
       
    initialiseShapes();              
    marginX = (shapeSize);  
    marginY = (shapeSize); 
        
    startRectX = -50;        
    startRectY = -50;  
    backgroundRectSize = startRectY - (backMargin);
}
   
function draw() {    
    clear();

    background(255);

    push();
    translate(startRectX, startRectY); 

    for (let i = 0; i < shape.length; i++) {
        shape[i].display();
    }
  
    pop();

    if (record) {
        save(year() + "-"+ month()+ "-"+ day() + "_");
        record = false;
    }

    // noLoop();
}

class Shapes {
    
    constructor() {
        this.update();
    }

    update() {

        this.shapeVariantPick = int(random(0, shapeVariantArray.length));
        this.shapeVariant = shapeVariantArray[this.shapeVariantPick]; 
        // this.shapeVariant = 1;

        this.sizePick = int(random(0, sizeArray.length));    
        this.objectHeight = sizeArray[this.sizePick];

        this.dimPick = int(random(0, dimArray.length));       
        this.dim = sizeArray[this.dimPick];    
 
        this.lineHeightPick = int(random(0, lineHeightArray.length));
        this.lineHeight = lineHeightArray[this.lineHeightPick];
        this.lineOrStroke = int(random(0, 4));


     
        this.dimCircles = this.lineHeight; 

        this.arcLength = int(random(1, 5)) * 90;
        this.secondColor = int(random(0, colorPalette.length));
        this.grid = shapeSize*1.80; 
        this.gridVariant = false;          

        this.x = (0) + int(random(1, 5)) * (this.grid );  
        this.y = (0) + int(random(1, 5)) * (this.grid );

        this.rotateRadians = int(random(1, 3)) * 90;
        this.rotateRadiansFull = int(random(0, 4)) * 90;

    }
 
    display() {

        push();

        translate((this.x), (this.y));
     
        // rect(0,0,shapeSize);

        rotate(radians((this.rotateRadiansFull)));
        strokeWeight(2);  

        if (this.lineOrStroke === 0 ){
            stroke(colorStroke[0]);
            fill(colorPalette[this.secondColor]);
        
        } else if (this.lineOrStroke === 1 ){
            stroke(colorPalette[this.secondColor]);
            fill(colorPalette[this.secondColor]);
        
        } else {
            stroke(colorStroke[0]);
            noFill(); 
        }
        strokeCap(SQUARE);

        for (let i = -this.objectHeight; i <= this.objectHeight; i += (this.lineHeight)) {
            for (let j = -this.objectHeight; j <= this.objectHeight; j += (this.lineHeight)) {


        if (this.shapeVariant === 0) {
            /*  line */
                
                push(); 
                translate(i, j);
                stroke(0);
                line(0, -this.dim/2, 0, this.dim/2);
                pop();

        } else if (this.shapeVariant === 1) {
                push();  
                translate(i, j);      
                ellipse(0,0,this.dim/2);    
                pop();

        } else if (this.shapeVariant === 2) {
                push();
                stroke(0);
                translate(i, j);       

                line(-this.dim/2, -this.dim/2, this.dim/2, this.dim/2);
                pop();
      
        } else if (this.shapeVariant === 3) {  
           
                    push();
                    translate(i, j+(this.dim/4));       
                    rect(0,0, this.dim,this.dim/2);
                    pop();    
     
        } else if (this.shapeVariant === 4) {
     
            push();
            translate(i, j);       
            line(0, -this.dim/2,0, this.dim/2);
            pop();  
               
        }  else if (this.shapeVariant === 5) {

     
   
                let temp = this.dim / 2;
                let temp2 = (this.dim / 4);
                push();
                translate(i, j);
                beginShape(); 
                vertex(0, -temp);
                vertex(temp, 0);
                vertex(temp, temp);
                vertex(0, temp);
                vertex(-temp, 0);
                vertex(-temp, -temp);
                endShape(CLOSE);                
                pop();    

        }  else if (this.shapeVariant === 6) {
          
                let temp = this.objectHeight;

                push();   
                translate(i, j);       
                ellipse(0,0,i/2,i/2);     
                pop();
            
        } else if (this.shapeVariant === 7) {
          
                let temp = this.dim/2;
                 

                push();
                translate(i, j);      
  
                beginShape();
                vertex(temp,temp); 
                vertex(0,0);  
                vertex(-temp,temp);
                endShape(CLOSE); 
               
                pop();
            
        }   else if (this.shapeVariant === 8) {

            let temp = this.dim*2;            
            push();      
            translate(i, j);           
            arc(-(temp/4),-(temp/4),temp,temp,radians(0),radians(90),PIE);
            pop();  
        } else if (this.shapeVariant === 9){
            let temp = this.dim/2;      
            push();
            translate(i ,j);      
            beginShape();       
            vertex(0,-temp);   
            vertex(temp,0); 
            vertex(0,temp);  
            vertex(-temp,0);   
            endShape(CLOSE);
           
            pop();
        }  else if (this.shapeVariant === 10){
            let temp = this.dim/2;      
            push();
            translate(i ,j);      
            line(-temp,-temp,temp,-temp);
            line(-temp,0,temp,0);
            line(-temp,+temp,temp,+temp);
           
            pop();
        }
    

    }
    }
  
        pop();
    }

}

// function windowResized() {
//     initialiseShapes();
//     resizeCanvas(windowWidth, windowHeight);
// }


function keyPressed() {
    if (keyCode === 83) {
        record = true;
        console.log("hup");
    }


    if (keyCode === 82) {
        for (let i = 0; i < shape.length; i++) {
            shape[i].update();
        }
    }

}


function initialiseShapes() {
    shape = [];
    for (let i = 0; i < totalShapes; i++) {
        shape[i] = new Shapes();
    }
}

function mapRange(value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}