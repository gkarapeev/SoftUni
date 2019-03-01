function myFunction(input) {

    let artistPrice = parseInt(input.shift());
    let command = input.shift();
    let moneyCollected = 0;
    let totalGuestCount = 0;

    while (command !== "The restaurant is full") {
        let groupSize = parseInt(command);
        let charge;
        let groupCost;

        if (groupSize < 5) {
            charge = 100;
        } else {
            charge = 70;
        }

        groupCost = groupSize * charge;
        moneyCollected += groupCost;
        totalGuestCount += groupSize;

        command = input.shift();
    }

    if (moneyCollected >= artistPrice) {
        console.log(`You have ${totalGuestCount} guests and ${moneyCollected - artistPrice} leva left.`);
    } else {
        console.log(`You have ${totalGuestCount} guests and ${moneyCollected} leva income, but no singer.`);
    }
}

myFunction(["2800", "5", "5", "4", "6", "6", "12", "12", "The restaurant is full"]);
