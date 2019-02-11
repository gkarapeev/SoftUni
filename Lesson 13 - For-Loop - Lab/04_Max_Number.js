function myFunction(input) {

    let numberCount = parseInt(input.shift()); // So we've now removed the first value from the array and all that's left are the numbers we want to compare



    // Solution A: Using Math.max in combination with the "spread" operator. The "..." aka "spread" operator breaks down the array into a list of its individual values
    // let maxValue = Math.max(...input);
    
    
    
    // Solution B1: Reduce method, Long version

    // let minValue = Number.MIN_SAFE_INTEGER;
    // let maxValue = input.reduce(function (acc, val) {
    //         let c = (Number(val) > Number(acc)) ? Number(val) : Number(acc);
    //         return c;
           
    //     },
    
    //     minValue
    // );



    // Solution B2: Reduce method, ES6 Arrow function syntax

    let minValue = Number.MIN_SAFE_INTEGER;
    let maxValue = input.reduce((acc, val) => c = (Number(val) > Number(acc)) ? Number(val) : Number(acc), minValue);


    console.log(maxValue);
}

myFunction(["2", "100", "99", "0", "3"]);