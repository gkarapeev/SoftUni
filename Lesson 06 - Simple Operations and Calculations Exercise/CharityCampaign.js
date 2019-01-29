function charityCampaign(charityData){

let days = Number(charityData[0]);
let chefs = Number(charityData[1]);

let cakes = Number(charityData[2]);
let waffles = Number(charityData[3]);
let pancakes = Number(charityData[4]);

let cakePrice = Number(45);
let wafflePrice = Number(5.8);
let pancakePrice = Number(3.2);

let cakeDailyIncome = cakes * cakePrice;
let waffleDailyIncome = waffles * wafflePrice;
let pancakeDailyIncome = pancakes * pancakePrice;

let dailyIncome = cakeDailyIncome + waffleDailyIncome + pancakeDailyIncome;
let totalIncome = days * chefs * dailyIncome;
let expense = totalIncome / 8;
let netIncome = totalIncome - expense;

console.log(netIncome.toFixed(2));

}

charityCampaign(['20', '8', '14', '30', '16']);