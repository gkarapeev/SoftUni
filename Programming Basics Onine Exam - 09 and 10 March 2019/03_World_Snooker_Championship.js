function myFunction(input) {

    let contestStage = input[0];
    let ticketType = input[1];
    let ticketCount = parseInt(input[2]);
    let trophyPhoto = (input[3] === "Y") ? true : false;
    let ticketPrice;

    if (contestStage === "Quarter final") {

        switch (ticketType) {
            case "Standard":
                ticketPrice = 55.5;
                break;
            
            case "Premium":
                ticketPrice = 105.2;
                break;

            case "VIP":
                ticketPrice = 118.9;
                break;

            default:
            break;
        }



    } else if (contestStage === "Semi final") {

        switch (ticketType) {
            case "Standard":
                ticketPrice = 75.88;
                break;
            
            case "Premium":
                ticketPrice = 125.22;
                break;

            case "VIP":
                ticketPrice = 300.4;
                break;

            default:
            break;
        }



    } else if (contestStage === "Final") {

        switch (ticketType) {
            case "Standard":
                ticketPrice = 110.1;
                break;
            
            case "Premium":
                ticketPrice = 160.66;
                break;

            case "VIP":
                ticketPrice = 400;
                break;

            default:
            break;
        }
    }

    let ticketCostsRaw = ticketCount * ticketPrice;
    let photoPrice = 40;
    let finalCosts;

    if (ticketCostsRaw > 4000) {
        finalCosts = ticketCostsRaw * 0.75;
        photoPrice = 0;
        
    } else if (ticketCostsRaw > 2500) {
        finalCosts = ticketCostsRaw * 0.9;

    } else {
        finalCosts = ticketCostsRaw;
    }

    let trophyPhotoCost = ticketCount * photoPrice;

    if (!trophyPhoto) {
        trophyPhotoCost = 0;
    }

    let grandTotal = finalCosts + trophyPhotoCost;

console.log(grandTotal.toFixed(2));

}

// myFunction(["Final", "Premium", "25", "Y"]);
myFunction(["Quarter final", "Standard", "11", "N"]);
// myFunction(["Semi final", "VIP", "9", "Y"]);
// myFunction(["Semi final", "VIP", "0", "N"]);
