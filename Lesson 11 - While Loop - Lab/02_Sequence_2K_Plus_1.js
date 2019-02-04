function myFunction(input) {

    let entry = parseInt(input[0]);
    let x = 1;

    while (x <= entry) {
        console.log(x);
        x = x * 2 + 1;
    }
}

// myFunction(["1"]);
// myFunction(["3"]);
// myFunction(["7"]);
// myFunction(["8"]);
// myFunction(["17"]);
// myFunction(["2000"]);