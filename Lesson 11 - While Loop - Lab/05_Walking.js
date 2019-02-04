function myFunction(stepData) {

    let i = Number(0);
    let steps = 0;


    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }


    while (isNumeric(stepData[i])) {
        steps += Number(stepData[i]);
        i++;
    }


    if (stepData.length > i) {
        let extraSteps = Number(stepData[i + 1]);
        steps += extraSteps;
    }



    if (steps >= 10000) {
        console.log(`Goal reached! Good job!`);
    } else {
        console.log(`${Number(10000) - steps} more steps to reach goal.`);
    }
}

// myFunction(["1000", "1500", "2000", "6500"]);
myFunction(["1500", "300", "2500", "3000", "Going Home", "200"]);
// myFunction(["Elem_idx___0", "Elem_idx___1", "Elem_idx___2", "Elem_idx___3", "Elem_idx___4", "Elem_idx___5", ]);