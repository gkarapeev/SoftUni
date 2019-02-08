function myFunction(input) {

    let comboID = parseInt(input[0]);

    let ones = comboID % 10;

    let digitFive = (ones === 0) ? parseInt(1) : parseInt(11 - ones);
    let digitFour = ((Math.trunc((comboID - 1) / 10)) % 10) + 1;
    let digitThree = String.fromCharCode(65 + ((Math.trunc((comboID - 1) / 100)) % 3));
    let digitTwo = String.fromCharCode(102 - ((Math.trunc(comboID / 300)) % 6));
    let digitOne = String.fromCharCode(66 + (Math.trunc((comboID / 1800) % 6) * 2));



    let digitOneValue = digitOne.charCodeAt();
    let digitTwoValue = digitTwo.charCodeAt();
    let digitThreeValue = digitThree.charCodeAt();

    let totalPrice = digitOneValue + digitTwoValue + digitThreeValue + digitFour + digitFive;

    if (comboID === 10800) { // Fixing overflow
        
        console.log(`Ticket combination: LaC101`);
        console.log(`Prize: 251 lv.`);
    
    } else {
        
        console.log(`Ticket combination: ${digitOne}${digitTwo}${digitThree}${digitFour}${digitFive}`);
        console.log(`Prize: ${totalPrice.toFixed(0)} lv.`);
    
    }

}

// myFunction(["21"]);

// for (i = 1; i <= 800; i++) {
//     console.log(i);
//     myFunction([i]);
//     console.log("");
//     console.log("");
// }