function myFunction(input) {

let dayCount = 1;
let goal = 3484;
let distance = 0;
let hasClimbed = false;

    while (!hasClimbed) {

        let command = input.shift();

        if (command === "Yes") {
            dayCount++;


        } else if (command === "END") {
            console.log(`Failed!`);
            console.log(`${distance + 5364}`);
            return;
        }


        let thisTrip = parseInt(input.shift());

        
        distance += thisTrip;
        hasClimbed = (distance >= goal);

        if (dayCount > 5) {
            console.log(`Failed!`);
            console.log(`${distance + 5364 - thisTrip}`);
            return;
        }
    }


    
    console.log(`Goal reached for ${dayCount} days!`);

}

// myFunction(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
myFunction(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);
// myFunction(["Yes", "700", "END"]);
// myFunction(["END"]);