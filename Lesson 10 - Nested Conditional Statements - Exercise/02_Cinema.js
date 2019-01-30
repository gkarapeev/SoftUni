function myFunction(input) {

    let projectionType = input[0];
    let rowCount = parseInt(input[1]);
    let colCount = parseInt(input[2]);


    let premierePrice = 12;
    let normalPrice = 7.5;
    let studentPrice = 5;


    let price;


    switch (projectionType) {

        case "Premiere":
            price = premierePrice;
        break;

        case "Normal":
            price = normalPrice;
        break;

        case "Discount":
            price = studentPrice;
        break;

        default:
        break;

    }


    let seatCount = rowCount * colCount;
    let income = seatCount * price;


    console.log(income.toFixed(2));

}

myFunction(["Premiere", "10", "12"])
// Solved on January 30 for 06:27 min!