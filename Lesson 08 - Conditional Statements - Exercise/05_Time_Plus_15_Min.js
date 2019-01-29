function timePlus15(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    minutes += 15;

    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }

    if (hours >= 24) {
        hours -= 24;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }

}

timePlus15(["12", "49"]);