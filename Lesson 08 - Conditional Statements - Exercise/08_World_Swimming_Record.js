function swimmingRecord(input) {

    let currentRecord = Number(input[0]);       // in seconds
    let distance = Number(input[1]);            // in metres
    let pace = Number(input[2]);                // seconds per metre


    let slowDowns = distance / 15;                  // in number of times
    let xtraTime = Math.floor(slowDowns) * 12.5;    // in seconds
    let combinedTime = distance * pace;

    let ivanTime = combinedTime + xtraTime;    // in seconds
    let shortage = currentRecord - ivanTime;        // in seconds


    if (ivanTime < currentRecord) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    } else {
    console.log(`No, he failed! He was ${Math.abs(shortage).toFixed(2)} seconds slower.`);
    }
}


swimmingRecord(["10464", "1500", "20"]);

swimmingRecord(["55555.67", "3017", "5.03"]);