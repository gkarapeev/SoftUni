function myFunction(input) {

    let budget = parseInt(input[0]);

    let nextWord = input[1];

    function obtainValue(word) {                                // A function that will calculate the sum of the ASCII values of all letters from a given word

        //digits.length = 0;                                    // Difference between array = [], and array.length = 0; https://www.jstips.co/en/javascript/two-ways-to-empty-an-array/

        let digits = [];                                        // The digits array will hold the individual values of each letter from a word

        for (x = 0; x < word.length; x++) {            // Filling the digits array with the necessary values

            let letterValue = word.charCodeAt(x);
            digits.push(letterValue);
        }

        return digits.reduce((acc, val) => acc + val);          // Adding up all the values from the current word and returning the sum

    }

    let nextWordValue;

    let i = 1;                                                  // Setting an initial value for i, which counts which word from the input array we will be looking at

    while (nextWord !== "Stop" && i <= input.length) {

    
        let nextWordValue = obtainValue(nextWord);              // Getting the value of the next word

        budget -= nextWordValue;                                // Substracting that from the budget

        if (budget < 0) {                                       // Checking if any money is left
            console.log("Not enough money!");
            return;
        }

        console.log("Item successfully purchased!");

        i++;
        nextWord = input[i];

    }

    console.log(`Money left: ${budget}`);
}

myFunction(["3000", "star", "Christmas tree", "tinsel", "Tree stand"]);
myFunction(["5000", "Christmas lights", "wreath", "Stop"]);