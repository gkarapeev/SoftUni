function orderTotal(orderInfo) {


    let n = Number(orderInfo[0]);                           // Acquiring the amount of items of each kind in the order
    let tableX = Number(orderInfo[1]);                      // Acquiring the table width in metres
    let tableY = Number(orderInfo[2]);                      // Acquiring the table height in metres

    let extra = Number(0.3);                                // Setting the amount of fabric hanging out of each side of the table in metres

    let clothX = tableX + (2 * extra);                      // Deriving the width of the tablecloth in metres
    let clothY = tableY + (2 * extra);                      // Deriving the height of the tablecloth in metres
    let clothS = clothX * clothY;                           // Deriving the area of the cloth in metres squared

    let squareX = tableX / 2;                               // Deriving the square width in metres
    let squareS = squareX ** 2;                             // Deriving the square area in metres squared

    let totalClothS = clothS * n;                           // Deriving the total area of the tablecloths in metres squared
    let totalSquareS = squareS * n;                         // Deriving the total area of the squares in metres squared

    let usdToBgn = Number(1.85);                            // Setting the excnahge rate
 
    let clothPriceUSD = Number(7);                          // Setting the cloth price per meter squared in USD
    let clothPriceBGN = clothPriceUSD * usdToBgn;           // Deriving the cloth price per meter squared in BGN

    let squarePriceUSD = Number(9);
    let squarePriceBGN = squarePriceUSD * usdToBgn;         // Deriving the square price per meter squared in BGN

    let orderPriceUSD = (totalClothS * clothPriceUSD) + (totalSquareS * squarePriceUSD);            // Deriving the final order cost in USD
    let orderPriceBGN = (totalClothS * clothPriceBGN) + (totalSquareS * squarePriceBGN);            // Deriving the final order cost in BGN



    console.log(`${orderPriceUSD.toFixed(2)} USD`);
    console.log(`${orderPriceBGN.toFixed(2)} BGN`);


}

orderTotal(['5', '1.00', '0.50']);