function circle(input){


    let r = Number(input[0]);
    
    let area = Math.PI * Math.pow(r,2);
    let circumference = 2 * Math.PI * r;
    
    
    console.log(area.toFixed(2));
    console.log(circumference.toFixed(2));
    
}

circle(['35.875']);