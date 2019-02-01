function myFunction(input) {




    let examHour = parseInt(input[0]);
    let examMin = parseInt(input[1]);
    let arrivalHour = parseInt(input[2]);
    let arrivalMin = parseInt(input[3]);




    let arrivalState;

    if ((arrivalHour === examHour) && (arrivalMin === examMin)) {
        arrivalState = "On time";

    } else if (arrivalHour < examHour) {
        arrivalState = "Early";

    } else if (arrivalHour > examHour) {
        arrivalState = "Late";

    } else if (arrivalMin < examMin) {
        arrivalState = "Early";

    } else {
        arrivalState = "Late";
    }




    let minDiff;
    let hourDiff;
    let hourOperand;
    let minOperand;

    if (arrivalState === "Early") {

        hourOperand = (examMin < arrivalMin) ? (examHour - 1) : (examHour);               // If arrival mins are more than exam mins, but we're early, we take 1 hour and add 60min
        minOperand = (hourOperand !== examHour) ? (examMin + 60) : (examMin);
        
        minDiff = minOperand - arrivalMin;
        hourDiff = hourOperand - arrivalHour;
        
    } else if (arrivalState === "Late") {

        hourOperand = (arrivalMin < examMin) ? (arrivalHour - 1) : (arrivalHour);               // Same shit as above, but reversed
        minOperand = (hourOperand !== arrivalHour) ? (arrivalMin + 60) : (arrivalMin);

        hourDiff = hourOperand - examHour;
        minDiff = minOperand - examMin;
    }    




    let preposition = (arrivalState === "Early") ? "before" : "after";
    let displayMin = (minDiff.toString.length == 0) ? ("0" + minDiff) : (minDiff);

    let msgLong = `${hourDiff}:${displayMin} hours ${preposition} the start`;
    let msgShort = `${displayMin} minutes ${preposition} the start`;

    let message = (hourDiff !== 0) ? (msgLong) : (msgShort);

    if (arrivalState === "On time") {

        console.log("On time");
        return;
    
    } else if (arrivalState === "Early") {

        if (minDiff <= 20) {
            console.log("On time");

        } else {
            console.log("Early");
        }
        
        console.log(message);

    } else {
        console.log("Late");
        console.log(message);
    }

}

//myFunction(["14", "00", "14", "00"]);
//myFunction(["9", "00", "8", "30"]);
myFunction(["9", "00", "8", "51"]);