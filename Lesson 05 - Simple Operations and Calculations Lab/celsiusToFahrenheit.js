function tempConvert(input){



    let celsiusTemp = Number(input[0]);
    let fahrenheitTemp = (celsiusTemp * 1.8) + 32;
    
    console.log(fahrenheitTemp.toFixed(2));
        
    }
    
    tempConvert(['-5.5','163']);

    //°F = °C × 1,8 + 32