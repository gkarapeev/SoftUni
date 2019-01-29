function rectAreaPerimeter(input) {


    let x1 = Number(input[0]);                                          // Corner 1
    let y1 = Number(input[1]);

    let x2 = Number(input[2]);                                          // Corner 4
    let y2 = Number(input[3]);

    let height = Math.abs(y1 - y2);
    let width = Math.abs(x1 - x2);

    let area = height * width;
    let perimeter = 2 * (height+width);



    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));



    // console.log(`x1 = ${x1}`);
        // console.log(`y1 = ${y1}`);
        // console.log(`x2 = ${x2}`);
        // console.log(`y2 = ${y2}`);
        // console.log(`height = ${height}`);
        // console.log(`width = ${width}`);

}


rectAreaPerimeter(['20', '40', '40', '30']);