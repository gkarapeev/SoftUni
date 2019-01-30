function myFunction(input) {

    let budget = parseFloat(input[0]);
    let season = input[1];


    let destination;
    let expense;
    let lodging = (season === "summer") ? "Camp" : "Hotel";


    if (budget <= 100) {

        destination = "Bulgaria";

        expense = (season === "summer") ? (expense = budget * 0.3) : (expense = budget * 0.7);

    } else if (budget <= 1000) {

        destination = "Balkans";

        expense = (season === "summer") ? (expense = budget * 0.4) : (expense = budget * 0.8);

    } else {

        destination = "Europe";

        expense = budget * 0.9;

        lodging = "Hotel";
    }


    console.log(`Somewhere in ${destination}`);
    console.log(`${lodging} - ${expense.toFixed(2)}`);

}

myFunction(["1500", "summer"]);
// Solved on January 30 for 30min 04sec!