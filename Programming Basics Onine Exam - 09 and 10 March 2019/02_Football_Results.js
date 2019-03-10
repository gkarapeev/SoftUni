function myFunction(input) {

    let score1 = input[0];
    let score2 = input[1];
    let score3 = input[2];

    let wins = 0;
    let losses = 0;
    let draws = 0;

    if (parseInt(score1[0]) > parseInt(score1[2])) {
        wins ++;
    } else if (parseInt(score1[0]) < parseInt(score1[2])) {
        losses ++;
    } else if (parseInt(score1[0]) === parseInt(score1[2])) {
        draws ++;
    }

    if (parseInt(score2[0]) > parseInt(score2[2])) {
        wins ++;
    } else if (parseInt(score2[0]) < parseInt(score2[2])) {
        losses ++;
    } else if (parseInt(score2[0]) === parseInt(score2[2])) {
        draws ++;
    }

    if (parseInt(score3[0]) > parseInt(score3[2])) {
        wins ++;
    } else if (parseInt(score3[0]) < parseInt(score3[2])) {
        losses ++;
    } else if (parseInt(score3[0]) === parseInt(score3[2])) {
        draws ++;
    }


    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws} games.`);
}

myFunction(["4:2", "0:3", "1:0"]);
