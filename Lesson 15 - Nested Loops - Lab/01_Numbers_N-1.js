function myFunction(input) {

    let n = parseInt(input[0]);

    for (let i = n; i >= 1; i--) {
        console.log(n);
        n--;
    }

    if (n === 0) {
        console.log(0);
    }

}

myFunction(["0"]);