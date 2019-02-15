function myFunction(input) {


    let country = input[0];
    let price = Number(input[1]);
    let savings = Number(0);
    let i = 2;
    let command = input[i];



    while ((command !== "End") && (i-2) < input.length) {

        if (Number(command)) {

            savings += Number(command);

            if (savings >= price) {

                console.log(`Going to ${country}!`);
                savings = 0;

            }


        } else {

            country = command;
            i += 1;
            price = Number(input[i]);

        }

        i ++;
        command = input[i];

    }

}

// myFunction(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
myFunction(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);