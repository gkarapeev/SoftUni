function threeBros(input) {

    let sonOneTime = Number(input[0]);
    let sonTwoTime = Number(input[1]);
    let sonThreeTime = Number(input[2]);

    let timeLimit = Number(input[3]);

    let son1Rate = 1/sonOneTime;
    let son2Rate = 1/sonTwoTime;
    let son3Rate = 1/sonThreeTime;

    let togetherRate = son1Rate + son2Rate + son3Rate;

    let timeNeeded = 1 / togetherRate;

    let finalTime = timeNeeded * 1.15;

    console.log(`Cleaning time: ${finalTime.toFixed(2)}`);

    if (finalTime <= timeLimit){
        console.log(`Yes, there is a surprise - time left -> ${Math.floor(timeLimit - finalTime)} hours.`);
    } else {
        console.log(`No, there isn't a surprise - shortage of time -> ${Math.ceil(finalTime - timeLimit)} hours.`);
    }

}

threeBros(["3.2", "2.5", "1.24", "0.5"]);