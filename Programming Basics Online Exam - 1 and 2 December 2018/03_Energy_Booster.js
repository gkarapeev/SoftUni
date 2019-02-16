function myFunction(input) {

    let fruit = input[0];
    let setType = input[1];
    let setCount = parseInt(input[2]);
    let itemCount;
    let price;


    switch (setType) {

        case "small":
            watermelonPrice = 56;
            mangoPrice = 36.66;
            pineapplePrice = 42.1;
            raspberryPrice = 20;

            itemCount = 2;
        break;

        case "big":
            watermelonPrice = 28.7;
            mangoPrice = 19.6;
            pineapplePrice = 24.8;
            raspberryPrice = 15.2;

            itemCount = 5;
        break;

        default:
        break;
    }


    switch (fruit) {

        case "Watermelon":
            price = watermelonPrice;
        break;
        
        case "Mango":
            price = mangoPrice;
        break;

        case "Pineapple":
            price = pineapplePrice;
        break;

        case "Raspberry":
            price = raspberryPrice;
        break;

        default:
        break;
    }


    let totalCosts = itemCount * price * setCount;

    let discount = 1;

    if ((totalCosts >= 400) && (totalCosts <= 1000)) {
        discount = 0.85;

    }
    
    if (totalCosts > 1000) {
        discount = 0.5;
    }


    let discountedPrice = totalCosts * discount;


    console.log(`${discountedPrice.toFixed(2)} lv.`);

}

myFunction(["Pineapple", "small", "1"]);