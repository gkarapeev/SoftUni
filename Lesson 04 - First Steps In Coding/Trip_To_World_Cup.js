function worldCup(input){



let outboundPrice = Number(input[0]);                                    // User input
let inboundPrice = Number(input[1]);
let gamePrice = Number(input[2]);
let gameCount = Number(input[3]);
let discountPercent = Number(input[4]);



let peopleCount = Number(6);



let flightCostP = outboundPrice + inboundPrice;                          // Flight cost per person
let discount = flightCostP * discountPercent * 0.01;                     // The amount of money being discounted from flightCostP
let flightCostPDiscounted = flightCostP - discount;                      // Total flight costs per person including the discount



let gameCostP = gamePrice * gameCount;                                   // Total game costs per person



let costPerPerson = flightCostPDiscounted + gameCostP;                   // Total costs per person
let grandTotal = peopleCount * costPerPerson;                            // Total cash spent by the whole group


console.log(`Total sum: ${grandTotal.toFixed(2)} lv.`);
console.log(`Each friend has to pay ${costPerPerson.toFixed(2)} lv.`);


// console.log("outboundPrice: " + outboundPrice);                       // Variable checks
// console.log("inboundPrice: " + inboundPrice);
// console.log("gamePrice: " + gamePrice);
// console.log("gameCount: " + gameCount);
// console.log("discountPercent: " + discountPercent);
// console.log("discount: " + discount);
// console.log("peopleCount: " + peopleCount);
// console.log("flightCostP: " + flightCostP);
// console.log("flightCostPDiscounted: " + flightCostPDiscounted);
// console.log("costPerPerson: " + costPerPerson);
// console.log("grandTotal: " + grandTotal);


}



worldCup([175, 280, 125, 5, 15]);