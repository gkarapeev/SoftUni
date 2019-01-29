function smallShop(input) {

    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let sofiaPrices = [0.5, 0.8, 1.2, 1.45, 1.6];
    let plovdivPrices = [0.4, 0.7, 1.15, 1.3, 1.5];
    let varnaPrices = [0.45, 0.7, 1.1, 1.35, 1.55];

    let productIndexes = ["coffee", "water", "beer", "sweets", "peanuts"];

    let priceList = [];

    switch (city) {

        case "Sofia":
            priceList = sofiaPrices;
        break;
        
        case "Plovdiv":
            priceList = plovdivPrices;
        break;
        
        case "Varna":
            priceList = varnaPrices;
        break;
        
        default:
        break;        
    }


    let index = productIndexes.indexOf(product);
    let price = priceList[index];
    

    let totalPrice = price * quantity;

    console.log(totalPrice);

}

// smallShop(["coffee", "Varna", "2"]);
// smallShop(["peanuts", "Plovdiv", "1"]);
// smallShop(["beer", "Sofia", "6"]);
// smallShop(["water", "Plovdiv", "3"]);