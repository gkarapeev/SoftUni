function myFunction(input) {

    let degrees = parseInt(input[0]);
    let timeOfDay = input[1];


    let lowTempMsg = [["Sweatshirt", "Sneakers"], ["Shirt", "Moccasins"], ["Shirt", "Moccasins"]];
    let mediumTempMsg = [["Shirt", "Moccasins"], ["T-Shirt", "Sandals"], ["Shirt", "Moccasins"]];
    let highTempMsg = [["T-Shirt", "Sandals"], ["Swim Suit", "Barefoot"], ["Shirt", "Moccasins"]];


    let messages = [];


    if (degrees >= 10 && degrees <= 18) {

        messages = lowTempMsg;

    } else if (degrees > 18 && degrees <= 24) {

        messages = mediumTempMsg;

    } else if (degrees >= 25) {

        messages = highTempMsg;

    }


    let timeID;


    switch (timeOfDay) {

        case "Morning":
            timeID = 0;
        break;
        
        case "Afternoon":
            timeID = 1;
        break;

        case "Evening":
            timeID = 2;
        break;

    }


    let outfit = messages[timeID][0];
    let shoes = messages[timeID][1];


    let outputMsg = `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`;


    console.log(outputMsg);
}

myFunction(["22", "Afternoon"]);
// Solved on January 30 for 29:24 min