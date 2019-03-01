function myFunction(input) {

    let entry = input[0];

    let digit1 = parseInt(entry[0]);
    let digit2 = parseInt(entry[1]);
    let digit3 = parseInt(entry[2]);

    for (let k = 1; k <= digit3; k++) {
        for (let j = 1; j <= digit2; j++) {
            for (let i = 1; i <= digit1; i++) {
                console.log(`${k} * ${j} * ${i} = ${i * j * k};`);
            }
        }
    }

}

myFunction(["324"]);
