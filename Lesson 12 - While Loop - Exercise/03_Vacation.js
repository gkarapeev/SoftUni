function myFunction(input) {

    let holidayCost = Number(input[0]);
    let savings = Number(input[1]);


    let currentDay = parseInt(1);
    let currentAction;
    let currentAmount;

    let spendingDays = 0;


    function spend(amount) {
        savings -= amount;
    }

    function save(amount) {
        savings += amount;
    }

    function areEnough (amount) {
        return amount >= holidayCost;
    }




    while (!areEnough(savings)) {

        currentAction = input[currentDay * 2];
        currentAmount = Number(input[(currentDay * 2) + 1]);


        if (currentAction === "spend") {
            spend(currentAmount);

            if(savings < 0) {
                savings = 0;
            }

            spendingDays++;

        } else {
            save(currentAmount);

            spendingDays = 0;

        }


        if (spendingDays > 4) {
            console.log(`You can't save the money.`);
            console.log(currentDay);
            return;
        }

        currentDay++;

    }



    console.log(`You saved the money for ${currentDay - 1} days.`);

}



// myFunction(["2000", "2000", "spend", "1200", "save", "2000", ]);
// myFunction(["2000", "1000", "spend", "1200", "save", "2000", ]);
// myFunction(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
myFunction(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);