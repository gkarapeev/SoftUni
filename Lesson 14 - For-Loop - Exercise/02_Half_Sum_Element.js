function myFunction(rawInput) {

    rawInput.shift();
    let input = rawInput.map(x => Number(x));



    let biggerNum = function(acc, val) {
        let bigger = (val > acc) ? val : acc;
        return bigger;
    }



    let largestNum = input.reduce(biggerNum);



    let sumOfRest = function() {

        let totalSum = input.reduce((acc, val) => acc + val);
        return totalSum - largestNum;
    }



    if (largestNum === sumOfRest()) {

        console.log("Yes");
        console.log("Sum = " + largestNum);

    } else {

        console.log("No");
        console.log("Diff = " + Math.abs(largestNum - sumOfRest()));
    }

}

// myFunction(["7", "3", "4", "1", "1", "2", "12", "1"]);
// myFunction(["4", "6", "1", "2", "3"]);
// myFunction(["3", "1", "1", "10"]);
// myFunction(["3", "5", "5", "1"]);
// myFunction(["3", "1", "1", "1"]);