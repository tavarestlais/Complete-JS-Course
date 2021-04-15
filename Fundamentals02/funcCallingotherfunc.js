'use strict';

function cutMachine(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutMachine(apples);
    const orangePieces = cutMachine(oranges);

    console.log(apples, oranges);
    const juice = `Juice with  ${applePieces} apple pieces 🍎 and ${orangePieces} orange pieces 🍊`;
    return juice;
}

console.log(fruitProcessor(2, 3));