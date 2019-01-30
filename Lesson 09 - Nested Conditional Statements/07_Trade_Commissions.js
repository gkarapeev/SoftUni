function tradeCommissions(input) {

    let city = input[0];
    let sales = Number(input[1]);


    rangeA = (sales >= 0 && sales <= 500);                          // Setting up the criteria for the different ranges
    rangeB = (sales > 500 && sales <= 1000);
    rangeC = (sales > 1000 && sales <= 10000);
    rangeD = (sales > 10000);


    let comIndex;

            
    if (rangeA) {                                                   // Obtaining the correct index of the commission multiplier
        comIndex = 0;
    } else if (rangeB) {
        comIndex = 1;
    } else if (rangeC) {
        comIndex = 2;
    } else if (rangeD) {
        comIndex = 3;
    } else {
        console.log("error");
        return;                                                     // Code will stop here if input for sales is invalid
    }

    
    let sofiaMultipliers = [0.05, 0.07, 0.08, 0.12];                // Initializing all the possible sets of multipliers
    let varnaMultipliers = [0.045, 0.075, 0.1, 0.13];
    let plovdivMultipliers = [0.055, 0.08, 0.12, 0.145];
    let activeMultipliers;


    switch (city) {                                                 // Obtaining the correct array for the commission multiplier
        
        case "Sofia":
            activeMultipliers = sofiaMultipliers;
        break;

        case "Varna":
            activeMultipliers = varnaMultipliers;
        break;

        case "Plovdiv":
            activeMultipliers = plovdivMultipliers;
        break;

        default:
            console.log("error");
            return;                                                 // Code will stop here if input for city is invalid
        break;
    }
    

    let multiplier = activeMultipliers[comIndex];                   // Calculations
    let commission = sales * multiplier;


    console.log(commission.toFixed(2));                             // Output

}

tradeCommissions(["Kaspichan", "-50"]);