function getTitle(input) {

    let age = Number(input[0]);
    let gender = input[1];

    let message = "";

    if (age >=16) {

        switch (gender) {

            case "m" :
                message = "Mr.";
            break;

            case "f":
                message = "Ms.";
            break;
        }

    } else {

        switch (gender) {

            case "m" :
                message = "Master";
            break;

            case "f":
                message = "Miss";
            break;
        }
    }

    console.log(message);

}

getTitle(["12", "f"]);