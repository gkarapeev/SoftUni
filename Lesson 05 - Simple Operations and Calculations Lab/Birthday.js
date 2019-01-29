function bDay(bDayData) {

    let percentDryVolume = Number(bDayData[3]);

    let percentWater = 1 - (percentDryVolume * 0.01);

    function arrayMultiply(entry, valuesToMultiply) {      // A function that multiplies the first N items in an array

        let result = 1;

        for (i = 0; i < valuesToMultiply; i++) {
            result *= entry[i];
        }

        return result;

    }

    let tankVolume = arrayMultiply(bDayData, 3);           // Volume of tank in cubic centimetres
    let tankVolumeLitres = tankVolume * 0.001;             // Volume of tank in litres

    let waterNeeded = percentWater * tankVolumeLitres;

    console.log(waterNeeded.toFixed(3));

}



bDay(['10', '10', '10', '25']);