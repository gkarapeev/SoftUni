function radToDeg(input){


let rad = Number(input[0]);
ratio = 180 / Math.PI;
degrees = rad * ratio;

console.log(degrees.toFixed(0));

}

radToDeg(['3.1416', 'kur']);