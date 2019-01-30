function myFunction(input) {

    let flower = input[0];
    let count = parseInt(input[1]);
    let money = parseInt(input[2]);


    let rosePrice = 5;
    let dahliPrice = 3.8;
    let tulipPrice = 2.8;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.5;
    let price;


    switch (flower) {

        case "Roses":
            price = rosePrice;
        break;

        case "Dahlias":
            price = dahliPrice;
        break;

        case "Tulips":
            price = tulipPrice;
        break;

        case "Narcissus":
            price = narcissusPrice;
        break;

        case "Gladiolus":
            price = gladiolusPrice;
        break;

        default:
        break;
    }


    function Order (flowerType, flowerAmount, budgetSize) {         // Defining an absolutely unnecessary object constructor just to show off

        this.type = flowerType;
        this.amount = flowerAmount;
        this.budget = budgetSize;

    }


    let myOrder = new Order(flower, count, money);


    let roseDiscount = (myOrder.type === "Roses" && myOrder.amount > 80);               // Defining the boolean values for the checks
    let dahliaDiscount = (myOrder.type === "Dahlias" && myOrder.amount > 90);
    let tulipDiscount = (myOrder.type === "Tulips" && myOrder.amount > 80);
    let narcissusDiscount = (myOrder.type === "Narcissus" && myOrder.amount < 120);
    let gladiolusDiscount = (myOrder.type === "Gladiolus" && myOrder.amount < 80);


    let multiplier = 1;


    switch (true) {

        case roseDiscount:
            multiplier *= 0.9;
        break;

        case dahliaDiscount:
            multiplier *= 0.85;
        break;
        
        case tulipDiscount:
            multiplier *= 0.85;
        break;
        
        case narcissusDiscount:
            multiplier *= 1.15;
        break;
        
        case gladiolusDiscount:
            multiplier *= 1.2;
        break;
        
        default:
        break;
    }


    let totalPrice = myOrder.amount * price * multiplier;
    let moneyNeeded = totalPrice - money;
    let moneyLeft = money - totalPrice;

    let message;
    msg1 = `Hey, you have a great garden with ${count} ${flower} and ${moneyLeft.toFixed(2)} leva left.`;
    msg2 = `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`;


    if (totalPrice <= money) {

        message = msg1;

    } else {

        message = msg2;

    }


    console.log(message);

}

myFunction(["Tulips", "88", "260"]);
// Solved on January 30 in 53:59 min. Yeah, I went totally stupid with this one. :)