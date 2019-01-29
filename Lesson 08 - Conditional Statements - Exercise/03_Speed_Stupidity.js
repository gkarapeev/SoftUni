function retarded (userSpeed) {

    let speed = Number(userSpeed[0]);
    let message;

    switch (true) {

        case (speed <= 10):
            message = "slow";
        break;

        case (speed > 10 && speed <= 50):
            message = "average";
        break;

        case (speed > 50 && speed <= 150):
            message = "fast";
        break;

        case (speed > 150 && speed <= 1000):
            message = "ultra fast";
        break;

        default:
            message = "extremely fast";
        break;

    }

    console.log(message);

}

retarded(['2.14']);