function pointRect(input) {

    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);


    let xInside = (x1 <= x) && (x <= x2);
    let yInside = (y1 <= y) && (y <= y2);

    
    let location = (xInside && yInside) ? "Inside" : "Outside";


    console.log(location);

}

pointRect(["2", "-3", "12", "3", "8", "1"]);
pointRect(["2", "-3", "12", "3", "11", "-3.5"]);
pointRect(["-1", "-3", "4", "1", "0.5", "1"]);
pointRect(["-1", "-3", "4", "1", "-1.2", "1.4"]);