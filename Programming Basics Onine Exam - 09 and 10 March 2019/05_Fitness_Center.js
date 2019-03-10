function myFunction(input) {

    let guestCount = parseInt(input.shift());
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let shake = 0;
    let bar = 0;
    let supplement = 0;
    let workout = 0;

    for (let i = 1; i <= guestCount; i++) {

        let command = input.shift();

        switch (command) {
            case "Back":
                back++;
                workout++;
                break;

            case "Chest":
                chest++;
                workout++;
                break;

            case "Legs":
                legs++;
                workout++;
                break;

            case "Abs":
                abs++;
                workout++;
                break;

            case "Protein shake":
                shake++;
                supplement++;
                break;
            
            case "Protein bar":
                bar++;
                supplement++;
                break;

            default:
            break;
        }
    }

    let onePercent = guestCount / 100;
    let supplementPercent = supplement / onePercent; 
    let workoutPercent = workout / onePercent;

    console.log(``);
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${shake} - protein shake`);
    console.log(`${bar} - protein bar`);
    console.log(`${workoutPercent.toFixed(2)}% - work out`);
    console.log(`${supplementPercent.toFixed(2)}% - protein`);


}

// myFunction(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"]);
myFunction(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"]);
