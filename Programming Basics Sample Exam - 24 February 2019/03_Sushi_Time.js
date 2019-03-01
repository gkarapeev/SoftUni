function myFunction(input) {

    let type = input[0];
    let restaurant = input[1];
    let mealCount = input[2];
    let order = input[3];
    let mealPrice;
    let venueValid = true;

    if (restaurant === "Sushi Zone") {
        switch (type) {
            case "sashimi":
                mealPrice = 4.99;
                break;
            case "maki":
                mealPrice = 5.29;
                break;
            case "uramaki":
                mealPrice = 5.99;
                break;
            case "temaki":
                mealPrice = 4.29;
                break;
            default:
            break;
        }
    } else if (restaurant === "Sushi Time") {
        switch (type) {
            case "sashimi":
                mealPrice = 5.49;
                break;
            case "maki":
                mealPrice = 4.69;
                break;
            case "uramaki":
                mealPrice = 4.49;
                break;
            case "temaki":
                mealPrice = 5.19;
                break;
            default:
            break;
        }
    } else if (restaurant === "Sushi Bar") {
        switch (type) {
            case "sashimi":
                mealPrice = 5.25;
                break;
            case "maki":
                mealPrice = 5.55;
                break;
            case "uramaki":
                mealPrice = 6.25;
                break;
            case "temaki":
                mealPrice = 4.75;
                break;
            default:
            break;
        }
    } else if (restaurant === "Asian Pub") {
        switch (type) {
            case "sashimi":
                mealPrice = 4.5;
                break;
            case "maki":
                mealPrice = 4.8;
                break;
            case "uramaki":
                mealPrice = 5.5;
                break;
            case "temaki":
                mealPrice = 5.5;
                break;
            default:
            break;
        }
    } else {
        venueValid = false;
    }


    if (venueValid !== true) {
        console.log(`${restaurant} is invalid restaurant!`);
        return;
    }

    let costs = mealCount * mealPrice;
    let extra = (order === "Y") ? 1.2 : 1;
    let totalPrice = costs * extra; 

    console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);

}

myFunction(["maki", "Sushi Zone", "4", "Y"]);
