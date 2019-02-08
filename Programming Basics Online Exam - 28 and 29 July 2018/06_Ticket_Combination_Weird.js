function myFunction(input) {

    let comboID = parseInt(input[0]);



    let ones = comboID % 10;
    let tens = Math.trunc(comboID / 10);
    let hundreds = Math.trunc(comboID / 100);
    let thousands = Math.trunc(comboID / 1000);



    let digitFive = (ones === 0) ? 1 : 11 - ones;
    let digitFour = parseInt(tens.toString()[tens.toString().length - 1]) + 1;
    let digitThree = String.fromCharCode((hundreds % 3) + 65);
    let digitTwo = String.fromCharCode(102 - (parseInt(thousands.toString()[thousands.toString().length - 1])) % 6);


    let digitOne = String.fromCharCode(66 + (Math.trunc((comboID / 1800) % 6) * 2));



    let digitOneValue = digitOne.charCodeAt();
    let digitTwoValue = digitTwo.charCodeAt();
    let digitThreeValue = digitThree.charCodeAt();

    let totalPrice = digitOneValue + digitTwoValue + digitThreeValue + digitFour + digitFive;

    console.log(`Ticket combination: ${digitOne}${digitTwo}${digitThree}${digitFour}${digitFive}`);
    console.log(`Prize: ${totalPrice.toFixed(0)} lv.`);



    // HAHAHAHAHAHA TVA IZOBSHTO NE BI TRQBVALO DA RABOTI, A RABOTI !!! xD
    // Mai prosto stava 1 film, v koito tretiq i 4etvartiq simvol vzaimno se dopalvat kato broi cifri i se napasvat i nqkak si prodaljava da ba4ka, a ne bi trqbvalo!!! :D
    // Ne, znae6 li 6to raboti? Raboti zaradi teq "%3" i "%6" nakraq, za6toto tova izobshto ne sa stotici i hilqdni, a nekvi drugi laina sas saotvetno po 3 i po 6 cifri v broinata si sistema.
    // Phahahaha tva zaraboti. Bahti ciganiqta. :D :D :D Nqkoi pat 6te go napravq po-normalno.
}

myFunction(["17"]);