function fruitAndVeg(input) {

    let food = input[0];

    let fruitList = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
    let vegList = ["tomato", "cucumber", "pepper", "carrot"];

    let isFruit = fruitList.indexOf(food) != -1;        // If indexOf returns "-1", then the item was not present in the array, so if we get anything different, then YES, the item was present in the list
    let isVeg = vegList.indexOf(food) != -1;            // If indexOf returns "-1", then the item was not present in the array, so if we get anything different, then YES, the item was present in the list

    let isKnown = isFruit || isVeg;
    
    let foodType = "";

    if (isKnown) {

        foodType = (isVeg) ? "vegetable" : "fruit";

    } else {

        foodType = "unknown";

    }

    console.log(foodType);
}

fruitAndVeg(["banana"]);
fruitAndVeg(["apple"]);
fruitAndVeg(["tomato"]);
fruitAndVeg(["dick"]);
fruitAndVeg(["water"]);