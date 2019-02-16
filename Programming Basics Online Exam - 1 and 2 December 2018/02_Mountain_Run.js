function myFunction(input) {

    let currentRecord = Number(input[0]);                   // in seconds
    let distance = Number(input[1]);                        // in meters
    let climbingSpeed = Number(input[2]);                   // in seconds per meter



    let timeNeeded = distance * climbingSpeed;              // in seconds
    let extratime = Math.trunc(distance / 50) * 30;              // in seconds
    let totalTime = timeNeeded + extratime;                 // in seconds





    let difference = Math.abs(currentRecord - totalTime);





    if (totalTime < currentRecord) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);

    } else {
        console.log(`No! He was ${difference.toFixed(2)} seconds slower.`);
    }

}

// myFunction(["10164", "1400", "25"]);
// myFunction(["5554.36", "1340", "3.23"]);
myFunction(["1377", "389", "3"]);