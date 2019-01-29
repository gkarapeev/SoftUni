function alcoholCosts(alcoholStats) {


    let whiskeyPrice = Number(alcoholStats[0]);             // in BGN per litre
    let rakiaPrice = whiskeyPrice * 0.5;
    let winePrice = rakiaPrice * 0.6;
    let beerPrice = rakiaPrice * 0.2;

    let beerAmount = Number(alcoholStats[1]);
    let wineAmount = Number(alcoholStats[2]);
    let rakiaAmount = Number(alcoholStats[3]);
    let whiskeyAmount = Number(alcoholStats[4]);

    let beerCosts = beerAmount * beerPrice;
    let wineCosts = wineAmount * winePrice;
    let rakiaCosts = rakiaAmount * rakiaPrice;
    let whiskeyCosts = whiskeyAmount * whiskeyPrice;

    let totalCosts = beerCosts + wineCosts + rakiaCosts + whiskeyCosts;

    console.log(totalCosts.toFixed(2));

}


alcoholCosts(['50', '10', '3.5', '6.5', '1']);