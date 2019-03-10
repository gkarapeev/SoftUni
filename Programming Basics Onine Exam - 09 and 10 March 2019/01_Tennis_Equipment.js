function myFunction(input) {

    let racquetPrice = Number(input[0]);
    let racquetCount = parseInt(input[1]);
    let shoePairCount = parseInt(input[2]);
    let shoePairCost = racquetPrice / 6;

    let racquetTotal = racquetCount * racquetPrice;
    let shoeTotal = shoePairCount * shoePairCost;

    let otherCost = (racquetTotal + shoeTotal) * 0.2;
    let grandTotal = racquetTotal + shoeTotal + otherCost;
    let novakTotal = grandTotal / 8;
    let sponsorTotal = grandTotal * (7 / 8);

    console.log(`Price to be paid by Djokovic ${Math.floor(novakTotal)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorTotal)}`);

}

myFunction(["386", "7", "4" ]);
