function usdToBgn(input){


let usd = Number(input[0]);
let ratio = 1.79549;

let bgn = usd * ratio;

console.log(bgn.toFixed(2));


}