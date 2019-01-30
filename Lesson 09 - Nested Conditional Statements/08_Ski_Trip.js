function skiTrip(input) {

    let days = parseInt(input[0]);
    let nights = days - 1;

    let roomType = input[1];
    let experience = input[2];


    let discountIndex;


    if (nights < 10) {                                                  // Setting the correct discount index from the discount list

        discountIndex = 0;

    } else if (nights <= 15) {

        discountIndex = 1;

    } else {

        discountIndex = 2;

    }


    let singlePrice = 18;                                               // Setting the base prices for all the room types
    let apartmentPrice = 25;
    let presidenttPrice = 35;
    let price;


    let discountsApartment = [0.7, 0.65, 0.5];                          // Initializing the discount options
    let discountsPresident = [0.9, 0.85, 0.8];
    let discountList;
    let discountMultiplier;

    
    let positiveMultiplier = 1.25;                                      // Applying the price change with respect to the positive/negative experience 
    let negativeMultiplier = 0.9;
    let experienceMultiplier = (experience === "positive") ? positiveMultiplier : negativeMultiplier;


    if (roomType === "room for one person") {                           // Obtaining the correct values with respect to the user input

        discountMultiplier = 1;
        price = singlePrice;

    } else if (roomType === "apartment") {

        discountList = discountsApartment;
        discountMultiplier = discountList[discountIndex];
        price = apartmentPrice;

    } else if (roomType === "president apartment") {

        discountList = discountsPresident;
        discountMultiplier = discountList[discountIndex];
        price = presidenttPrice;

    }


    let rawPrice = nights * price;                                      // Calculating the final price
    let discountedPrice = rawPrice * discountMultiplier;
    let finalPrice = discountedPrice * experienceMultiplier;


    console.log(finalPrice.toFixed(2));
    
}

skiTrip(["30", "president apartment", "negative"])