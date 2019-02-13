function myFunction(rawInput) {

    let input = rawInput.map(x => Number(x));
    let pairs = input[0];



    let pairValue;
    let prevValue;
    let maxDiff = 0;



    for ( let i = 1; i <= pairs; i++) {

        let valueA = input[(2 * i) - 1];
        let valueB = input[2 * i];
        pairValue = valueA + valueB;

        if (pairValue !== prevValue) {
            let currentDiff = Math.abs(pairValue - prevValue);
            maxDiff = (currentDiff > maxDiff) ? currentDiff: maxDiff;
        }
        
        prevValue = pairValue;


    }



    if (maxDiff === 0) {
        console.log(`Yes, value=${pairValue}`);

    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }

}

// myFunction(["3", "1", "2", "0", "3", "4", "-1"]);
// myFunction(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
myFunction(["2", "-1", "0", "0", "-1"]);