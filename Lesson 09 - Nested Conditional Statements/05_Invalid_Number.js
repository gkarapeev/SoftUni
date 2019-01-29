function invalidNumber(input) {

    let number = parseInt(input[0]);


    let cond1 = (number >= 100);
    let cond2 = (number <= 200);
    let cond3 = (number === 0);


    let isValid = ((cond1 && cond2) || (cond3));


    if (!isValid) {
        console.log("Invalid");
    }

}

invalidNumber(["0"]);


// Check for 75, 150, 220, 199, -1, 100, 200, 0