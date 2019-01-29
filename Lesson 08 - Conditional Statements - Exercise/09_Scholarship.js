function scholarshipCheck(input) {
    let income = Number(input[0]);
    let gradeAvg = Number(input[1]);
    let minWage = Number(input[2]);


    let bursaryMinGrade = 4.5;
    let scholarshipMinGrade = 5.5;


    let canGetBursary = income < minWage && gradeAvg > bursaryMinGrade;
    let canGetScholarship = gradeAvg >= scholarshipMinGrade;


    let bursary = minWage * 0.35;
    let scholarship = gradeAvg * 25;


    let textNothing = "You cannot get a scholarship!";
    let textBursary = `You get a Social scholarship ${Math.floor(bursary)} BGN`;
    let textScholarship = `You get a scholarship for excellent results ${Math.floor(scholarship)} BGN`;

    let message = "";

    if (canGetScholarship) {

        if (scholarship >= bursary) {

            message = textScholarship;

        } else if (!canGetBursary) {

            message = textScholarship;

        }        

    } else if (canGetBursary) {

        message = textBursary;

    } else {
        message = textNothing;
    }

    console.log(message);
}

scholarshipCheck(["480.00", "4.60", "450.00"]);
scholarshipCheck(["300.00", "5.65", "420.00"]);