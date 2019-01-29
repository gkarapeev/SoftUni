function bonusPoints(userNumber) {

    let input = Number(userNumber[0]);
    let bonus;
    let extraBonus = 0;
    let totalBonus;
    let result;
   

    switch (true) {

        case (input <= 100):
            bonus = 5;
        break;

        case (input > 100 && input <= 1000):
            bonus = input * 0.2;
        break;

        case (input > 1000):
            bonus = input * 0.1;
        break;

    }

    switch (true) {

        case (input % 2 == 0):
            extraBonus = 1;
        break;

        case (input % 5 == 0):
            extraBonus = 2;
        break;

    }

    totalBonus = bonus + extraBonus;
    result = input + totalBonus;

    console.log(totalBonus);
    console.log(result);
}


bonusPoints(["2703"]);