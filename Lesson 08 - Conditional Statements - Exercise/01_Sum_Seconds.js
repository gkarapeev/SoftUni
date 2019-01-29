function sumSeconds(timeInput){

    let timeA = Number(timeInput[0]);
    let timeB = Number(timeInput[1]);
    let timeC = Number(timeInput[2]);

    let timeTotal = timeA + timeB + timeC;

    let secondsRaw = timeTotal % 60;
    let seconds = Math.trunc(secondsRaw);
    let minutesRaw = timeTotal / 60;
    let minutes = Math.trunc(minutesRaw);

    let secondsInString = seconds.toString();
    let digits = secondsInString.length;

    if (digits == 1) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}


sumSeconds(["50", "50", "49"]);

console.log(17 === "17");