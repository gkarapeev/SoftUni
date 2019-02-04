function myFunction(input) {

    let transactionCount = parseInt(input[0]);
    let accountTotal = parseInt(0);



    for ( i = 1; i <= transactionCount; i++) {

        if ( input[i] < 0) {

            console.log("Invalid operation!");
            break;
        }

        
        accountTotal = accountTotal + Number(input[i]);
        console.log(`Increase: ${Number(input[i]).toFixed(2)}`);
    }

    console.log(`Total: ${accountTotal.toFixed(2)}`);

}

// myFunction(["3", "5.51", "69.42", "100"]);
myFunction(["5", "120", "45.55", "-150"]);