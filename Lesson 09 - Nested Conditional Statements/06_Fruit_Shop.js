function fruitShop(input) {

    let item = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    

    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let dayIndex = week.indexOf(day);
    let isWeek = (dayIndex >= 0) && (dayIndex <= 4);
    let isWeekend = (dayIndex == 5) || (dayIndex == 6);
    let dayIsValid = (isWeek) || (isWeekend);

    let priceListWeekdays = [2.50, 1.20, 0.85, 1.45, 2.70, 5.50, 3.85];
    let priceListWeekends = [2.70, 1.25, 0.90, 1.60, 3.00, 5.60, 4.20];
    let pricelist = (isWeek) ? priceListWeekdays : priceListWeekends;


    let fruitList = ["banana", "apple", "orange", "grapefruit", "kiwi", "pineapple", "grapes"];
    let itemIndex = fruitList.indexOf(item);
    let price = pricelist[itemIndex] * quantity;
    let fruitIsValid = itemIndex !== (-1);


    if (dayIsValid && fruitIsValid) {
        console.log(price.toFixed(2));
    
    } else {
        console.log("error");

    }
}

fruitShop(["apple", "Tuesday", "2"]);