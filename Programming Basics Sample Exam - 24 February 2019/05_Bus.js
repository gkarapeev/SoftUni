function myFunction(input) {

    let initialPassengerCount = parseInt(input.shift());
    let stopCount = parseInt(input.shift());
    let currentPassengers = initialPassengerCount;
    let ticketControl = (stopCount % 2 === 1) ? 2 : 0;

    for (let i = 1; i <= stopCount; i++) {
        let peopleOut = parseInt(input.shift());
        let peopleIn = parseInt(input.shift());

        currentPassengers -= peopleOut;
        currentPassengers += peopleIn;
    }

    currentPassengers += ticketControl;

    console.log(`The final number of passengers is : ${currentPassengers}`);

}

myFunction(["20", "2", "10", "5", "5", "3"]);
