function myFunction(input) {

    let penCount = parseInt(input[0]);
    let markerCount = parseInt(input[1]);
    let detergentAmount = Number(input[2]); // in litres
    let percentDiscount = parseInt(input[3]);
    let discountMultiplier = (100 - percentDiscount) / 100;

    let penPrice = 5.8;
    let markerPrice = 7.2;
    let detergentPrice = 1.2; // per litre


    let penCosts = penCount * penPrice;
    let markerCosts = markerCount * markerPrice;
    let detergentCosts = detergentAmount * detergentPrice;


    let totalCosts = penCosts + markerCosts + detergentCosts;
    let discountedCosts = totalCosts * discountMultiplier;


    console.log(discountedCosts.toFixed(3));





}

myFunction(["2", "3", "2.5", "25"]);
myFunction(["4", "2", "5", "13"]);