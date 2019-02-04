function myFunction(input) {

    let index = parseInt(0);



    while (input[index] < 1 || input[index] > 100) {
        console.log("Invalid number!");
        index++;
    }

    console.log(`The number is: ${input[index]}`);
}

myFunction(["305", "105", "0", "77", "35"]);