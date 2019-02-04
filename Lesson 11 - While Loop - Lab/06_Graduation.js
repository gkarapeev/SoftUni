function myFunction(input) {

    let studentName = input.shift();

    let currentGrade;
    let i = 0;
    let gradeSum = Number(0);


    while (i <= 11) {

        currentGrade = Number(input.shift());

        if (currentGrade >= 4) {
            gradeSum += currentGrade;
            i++
        }

    }


    let gradeAvg = gradeSum / 12;

    console.log(`${studentName} graduated. Average grade: ${gradeAvg.toFixed(2)}`);

}

myFunction(["Pesho", "4", "5.5", "6", "5.43", "4.5", "3", "6", "5.55", "5", "6", "6", "5.43", "5", "6"]);
// myFunction(["Ani", "4", "5.5", "6", "5.43", "4.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);