function myFunction(input) {

    let comboID = parseInt(input[0]);



    let seat = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
    let row = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let entrance = ["A", "B", "C"];
    let sector = ["f", "e", "d", "c", "b", "a"];
    let stadium = ["B", "D", "F", "H", "J", "L"];

    console.log(`${stadium} ${sector} ${entrance} ${row} ${seat}`);
 
}

myFunction(["7589"]);
