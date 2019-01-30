function myFunction(input) {

    let x1 = parseFloat(input[0]);
    let y1 = parseFloat(input[1]);
    let x2 = parseFloat(input[2]);
    let y2 = parseFloat(input[3]);
    let x = parseFloat(input[4]);
    let y = parseFloat(input[5]);


    let xInside = (x > x1 && x < x2);
    let yInside = (y > y1 && y < y2);
    let isInside = (xInside && yInside);


    let xOnBorder = (x == x1 || x == x2) && (y >= y1 && y <= y2);
    let yOnBorder = (y == y1 || y == y2) && (x >= x1 && x <=x2);
    let isOnBorder = (xOnBorder || yOnBorder);


    let message = "";


    if (isOnBorder) {

        message = "Border";
    
    } else {

        message = "Inside / Outside";
    
    }


    console.log(message);

}

myFunction(["2", "-3", "12", "3", "2", "3"]);
//Solved for 32 minutes