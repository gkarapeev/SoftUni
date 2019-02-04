function myFunction(input) {

    let maxNum = Number(input[0]);
    let minNum = Number(input[0]);


    for (i = 0; i <= input.length; i++) {

        if (input[i] === "END") {
            break;
        }


        maxNum = (input[i] > maxNum) ? Number(input[i]) : maxNum;
        minNum = (input[i] < minNum) ? Number(input[i]) : minNum;

    }


    console.log(`Max number: ${maxNum}`);
    console.log(`Min number: ${minNum}`);
}

// myFunction(["10", "20", "304", "0", "50", "END"]);
myFunction(["250", "5", "2", "0", "100", "1000", "END"]);