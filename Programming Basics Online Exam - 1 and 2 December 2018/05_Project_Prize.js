function myFunction(input) {

    let partCount = parseInt(input.shift());
    let pointValue = Number(input.shift());
    let totalPoints = 0;

    for (let i = 1; i <= partCount; i++) {

        let bonus = (i % 2 === 0) ? 2 : 1;

        let points = parseInt(input.shift());
        let roundPoints = points * bonus;

        totalPoints += roundPoints;

    }

    let finalPrize = totalPoints * pointValue;
    
    console.log(`The project prize was ${finalPrize.toFixed(2)} lv.`);

}

myFunction(["7", "100.5", "2", "4", "5", "1", "1", "7", "3"]);