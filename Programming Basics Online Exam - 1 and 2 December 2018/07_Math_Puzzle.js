function myFunction(input) {

    let number = parseInt(input.shift());

    let sum;
    let product;
    let additions = 0;
    let multiplicaitons = 0;



    for (let a = 1; a <= 30; a++) {

        for (let b = 1; b <= 30; b++) {

            for (let c = 1; c <= 30; c++) {



                // ADDITION
                if (a < b && b < c) {
                    sum = a + b + c;

                    if (sum === number){
                        console.log(`${a} + ${b} + ${c} = ${sum}`);
                        additions ++;
                    }
                } 





                // MULTIPLICATION
                if (a > b && b > c) {
                    product = a * b * c;

                    if (product === number){
                        console.log(`${a} * ${b} * ${c} = ${product}`);
                        multiplicaitons ++;
                    }
                }

            }

        }

    }


    if (additions === 0 && multiplicaitons === 0) {
        console.log("No!");
    }

}

myFunction(["12"]);