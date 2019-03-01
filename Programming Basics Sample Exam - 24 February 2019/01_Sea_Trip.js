function myFunction(input) {

    let dailyFoodExpense = Number(input[0]);
    let dailySouvenirExpense = Number(input[1]);
    let dailyHotelExpense = Number(input[2]);
    let days = 3;
    let distance = 210;
    let fuelPrice = (1.85 * 7); // for every 100km

    let oneWayFuelExpense = (distance / 100) * fuelPrice;
    let totalFuelExpenses = oneWayFuelExpense * 2;

    let totalSouvenirExpenses = dailySouvenirExpense * days;
    let totalFoodExpenses = dailyFoodExpense * days;

    let dayOneLodging = (dailyHotelExpense/100) * 90;
    let dayTwoLodging = (dailyHotelExpense/100) * 85;
    let dayThreeLodging = (dailyHotelExpense/100) * 80;
    let totalLodgingExpenses = dayOneLodging + dayTwoLodging + dayThreeLodging;

    let totalCosts = totalFuelExpenses + totalSouvenirExpenses + totalFoodExpenses + totalLodgingExpenses;
    console.log(`Money needed: ${totalCosts.toFixed(2)}`);
}

myFunction(["50", "50", "120"]);
