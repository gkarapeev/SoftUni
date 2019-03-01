function myFunction(input) {

    let shipWidth = Number(input[0]);
    let shipLength = Number(input[1]);
    let shipHeight = Number(input[2]);
    let avgHeight = Number(input[3]);

    let roomWidth = 2;
    let roomLength = 2;
    let roomHeight = avgHeight + 0.4;

    let shipVolume = shipWidth * shipLength * shipHeight;
    let roomVolume = roomWidth * roomLength * roomHeight;
    let roomCount = Math.floor(shipVolume / roomVolume);

    if (roomCount < 3) {
        console.log("The spacecraft is too small.")
    } else if (roomCount > 10) {
        console.log("The spacecraft is too big.")
    } else {
        console.log(`The spacecraft holds ${roomCount} astronauts.`);
    }
}

myFunction(["3.5", "4", "5", "1.7"]);
