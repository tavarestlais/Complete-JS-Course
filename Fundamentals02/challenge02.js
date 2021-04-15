const billValue = [125, 555, 44];
console.log(`Bill's Value: ${billValue}`);

//let tip = (billValue >= 50 && billValue <= 300) ? (billValue * 0.15) : (billValue * 0.20);
//console.log(tip);

const calcTip = function (billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.20;
    };
    //OR WITHOUT THE IF/ELSE
    //return billValue >= 50 && bill <= 300 ? billValue * 0.15 : billValue * 0.20;

}

const tips = [calcTip(billValue[0]),
calcTip(billValue[1]),
calcTip(billValue[2])];
console.log(`Tips: ${tips}`);

const total = [(tips[0] + billValue[0]),
(tips[1] + billValue[1]),
(tips[2] + billValue[2]),
];
console.log(`Total: ${total}`);

//let finalValue = billValue + tip;

//console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value is ${finalValue}`);