function dance(input) {

    let stepsTotal = Number(input[0]);
    let dancers = Number(input[1]);
    let days = Number(input[2]);

    // GROUP CALCULATIONS
    let dailyStepsGroup = stepsTotal / days;                                    // Number of steps for the group to learn per day
    let dailyPercentGroup = Math.ceil((dailyStepsGroup / stepsTotal) * 100);    // Percent of the total step count that the group has to learn per day


    // INDIVIDUAL DANCER CALCULATIONS
    let dailyStepsDancer = dailyStepsGroup / dancers;                           // The number of steps per day that each dancer has to learn
    let dailyPercentDancer = dailyPercentGroup / dancers;                       // Percent of the total step count that each dancer has to learn per day: VARIANT 1
//  let dailyPercentDancer = ((dailyStepsDancer / stepsTotal) * 100);           // Percent of the total step count that each dancer has to learn per day: VARIANT 2
    
    // Pri VARIANT 2 daje ne e qsno pri koi deseti4en znak trqbva da zakruglim nagore, za6toto 0.48 < 1. Ako zakruglim tova nagore, stava 1%, koeto e greshen otgovor.
    // I v dvata varianta, spazvame uslovieto: pri iz4islqvane na procenta, zakruglqme nagore.

    // OUTPUT
    let dailyCapacityGroup = 13;
    
    if (dailyPercentGroup <= dailyCapacityGroup) {
        console.log(`Yes, they will succeed in that goal! ${dailyPercentDancer.toFixed(2)}%.`);
    } else {
        console.log(`No, they will not succeed in that goal! Required ${dailyPercentDancer.toFixed(2)}% steps to be learned per day.`);
    }
}


//dance(["10464", "20", "20"]);
dance(["55555", "30", "7"]);


