function concatenateData(personInfo){



    let firstName = personInfo[0];
    let lastName = personInfo[1];
    let age = personInfo[2];
    let town = personInfo[3];

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
    

}
    
    
    
concatenateData(['Radost','Zapryanova',26,'Dupnica']);