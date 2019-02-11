function myFunction(input) {

    let dumpThisShit = parseInt(input.shift()); // Dumping the first number because we don't need it

    let maxValue = input.reduce((acc, val) => c = (Number(acc) > Number(val)) ? Number(val) : Number(acc), Number.MAX_SAFE_INTEGER); // Too long to explain. Look at the comments of 04_Max_Number

    console.log(maxValue);
}