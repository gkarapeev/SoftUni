function convertMe(inp) {

    let entry = Number(inp[0]);
    let unitIN = inp[1].toString();
    let unitOUT = inp[2].toString();

    let multiplierA;
    let multiplierB;
    let metres;

    switch (true) {             // Converting everything to metres

        case (unitIN == "mm"):
            multiplierA = 1000;
        break;

        case (unitIN == "cm"):
            multiplierA = 100;
        break;

        case (unitIN == "m"):
            multiplierA = 1;
        break;
        
    }

    metres = entry * (1 / multiplierA);

    switch (true) {

        case (unitOUT == "mm"):
            multiplierB = 1000;
        break;
        
        case (unitOUT == "cm"):
            multiplierB = 100;
        break;
        
        case (unitOUT == "m"):
            multiplierB = 1;
        break;

    }

    let output = metres * multiplierB;

    console.log(output.toFixed(3));

}

convertMe(['150', "m", "cm"]);