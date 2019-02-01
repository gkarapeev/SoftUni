function myFunction(input) {

    let examHour = parseInt(input[0]);
    let examMin = parseInt(input[1]);
    let arrivalHour = parseInt(input[2]);
    let arrivalMin = parseInt(input[3]);



    let arrivalTime = (arrivalHour * 60) + arrivalMin;
    let examTime = (examHour * 60) + examMin;
    let difference = examTime - arrivalTime;



    let displayHour = Math.abs(Math.trunc(difference / 60));
    let displayMin = Math.abs(difference % 60);
    let displayMinPadded;



    if (displayMin < 10) {
        displayMinPadded = "0" + displayMin;

    } else {
        displayMinPadded = displayMin;
    }



    let state;
    let adjective;

    if (difference > 0) {
        adjective = "before";
        state = (difference <= 30) ? "On time" : "Early";
    
    } else if (difference === 0) {
        state = "On time";
    
    } else {
        adjective = "after";
        state = "Late";
    }



    console.log(state);



    if ((state === "On time") && (difference === 0)){
        return;

    } else if (Math.abs(difference) >= 60) {
            console.log(`${displayHour}:${displayMinPadded} hours ${adjective} the start`);
        
    } else {
            console.log(`${displayMin} minutes ${adjective} the start`);
    } 



}


myFunction(["14", "00", "13", "55"]);



























// let examHourRaw = input[0];
// let examHourPadding = (examHourRaw.length === 1) ? "0" : "";
// let examHour = examHourPadding + examHourRaw;
// let examMin = input[1];


// let arrivalHourRaw = input[2];
// let arrivalHourPadding = (arrivalHourRaw.length === 1) ? "0" : "";
// let arrivalHour = arrivalHourPadding + arrivalHourRaw;
// let arrivalMin = input[3];

// let arrivalTime = arrivalHour + arrivalMin;
// let examTime = examHour + examMin;