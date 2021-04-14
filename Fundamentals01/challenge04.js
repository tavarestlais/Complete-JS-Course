const billValue = 430;  //Test for bill values 275, 40 and 430

//billValue >= 50 && billValue <= 300 //tip 15%
//else 20%

//let tip;

//if (billValue >= 50 && billValue <= 300) {
//   tip = billValue * 1.15;
//} else {
//   tip = billValue * 1.20;
//}
//console.log(tip);


let tip = billValue >= 50 && billValue <= 300 ? (billValue * 0.15) : (billValue * 0.20);
console.log(tip);

let finalValue = billValue + tip;

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value is ${finalValue}`);