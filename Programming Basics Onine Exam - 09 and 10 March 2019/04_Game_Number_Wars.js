function myFunction(input) {

    let score1 = 0;
    let score2 = 0;

    let name1 = input.shift();
    let name2 = input.shift();

    // if error, check if first command is "End of game"

    let card1 = input.shift();
    let card2 = input.shift();

    let command = ((card1 !== "End of game") || (card2 !== "End of game")) ? "play" : "end";

    while (command !== "end") {

        card1 = parseInt(card1);
        card2 = parseInt(card2);

        if (card1 > card2) {
            score1 += card1 - card2;
        } else if (card2 > card1) {
            score2 += card2 - card1;
        } else {

            console.log("Number wars!");

            card1 = parseInt(input.shift());
            card2 = parseInt(input.shift());

            if (card1 > card2) {
                //score1 += card1 - card2;
                console.log(`${name1} is winner with ${score1} points`);
                return;
            } else if (card2 > card1) {
                //score2 += card2 - card1;
                console.log(`${name2} is winner with ${score2} points`);
                return;
            }
        }



        card1 = input.shift();
        card2 = input.shift();
        command = ((card1 === "End of game") || (card2 === "End of game")) ? "end" : "play";
    
    }

    console.log(`${name1} has ${score1} points`);
    console.log(`${name2} has ${score2} points`);

}

// myFunction(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
myFunction(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]);