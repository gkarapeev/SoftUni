function kuraMiYanko(input){



let sectorCount = Number(input[0]);                                                    // User input
let stadiumCapacity = Number(input[1]);
let ticketPrice = Number(input[2]);



let sectorCapacity = stadiumCapacity / sectorCount;                                    // Calculations
let sectorIncome = sectorCapacity * ticketPrice;
let totalIncome = sectorIncome * sectorCount;
let charityMoney = (totalIncome - (0.75 * sectorIncome))/8;



console.log("Total income - " + totalIncome.toFixed(2) + " BGN");                      // Output
console.log("Money for charity - " + charityMoney.toFixed(2) + " BGN");



// console.log("Sector count: " + sectorCount);                                        // Just testing variable values
// console.log("Stadium capacity: " + stadiumCapacity);
// console.log("Ticket price: " + ticketPrice);
// console.log("Sector capacity: " + sectorCapacity);
// console.log("Sector income: " + sectorIncome);



}



kuraMiYanko([4, 200, 13]);