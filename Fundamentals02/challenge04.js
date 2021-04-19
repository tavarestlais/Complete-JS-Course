'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const total = [];

//FUNCTION
const calcTips = function (bills) {
    if (bills >= 50 && bills <= 300) {
        return bills * 0.15
    } else {
        return bills * 0.20;
    };
}
//LOOP FOR TIPS
//for (let i = 0; i < bills.length; i++) {       //total
//   const tips = calcTips(bills[i]);
//}

//LOOP FOR TOTAL
//for (let i = 0; i < bills.length; i++) {
//   total.push(bills[i] + tips[i]);
//}

//OR

for (let i = 0; i < bills.length; i++) {       //total
    const tip = calcTips(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i])
}


console.log(bills);
console.log(tips);
console.log(total);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //    sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length
}

console.log(calcAverage([2, 4, 6]));
console.log(`Average of all bills:  ${calcAverage(bills)}`);
console.log(`Average of all tips:  ${calcAverage(tips)}`);
console.log(`Average of all totals:  ${calcAverage(total)}`);
