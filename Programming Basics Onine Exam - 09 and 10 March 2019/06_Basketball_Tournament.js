function myFunction(input) {

    let totalGames = 0;
    let wins = 0;
    let losses = 0;
    let command = input.shift();
    

    while (command !== "End of tournaments") {

        tournamentName = command;
        let gameCount = parseInt(input.shift());
        totalGames += gameCount;

        for (let i = 1; i <= gameCount; i++) {

            let desiScore = parseInt(input.shift());
            let rivalScore = parseInt(input.shift());
            let scoreDiff = Math.abs(desiScore - rivalScore);

            if (desiScore > rivalScore) {

                wins++;
                console.log(`Game ${i.toFixed(0)} of tournament ${tournamentName}: win with ${scoreDiff.toFixed(0)} points.`);
            } else {

                losses++;
                console.log(`Game ${i.toFixed(0)} of tournament ${tournamentName}: lost with ${scoreDiff.toFixed(0)} points.`);

            }

        }

        command = input.shift();
    }

    let onePercent = totalGames / 100;
    let winPercent = wins / onePercent;
    let lossPercent = losses / onePercent;

    console.log(`${winPercent.toFixed(2)}% matches win`);
    console.log(`${lossPercent.toFixed(2)}% matches lost`);
}

myFunction(["Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34", "83", "98", "66", "45", "End of tournaments"]);
