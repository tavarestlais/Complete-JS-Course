'use strict'

//ARROW FUNCTION
const calcAverage = (score01, score02, score03) => (score01 + score02 + score03) / 3;


let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);
console.log(averageDolphins, averageKoalas);


//check the results
const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
        return
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
        return
    } else if (avgDolphins == avgKoalas) {
        console.log(`ITS A DRAW!`);
        return
    } else {
        console.log(`NONE OF THE TEAMS WON`)
    }
}

checkWinner(averageDolphins, averageKoalas);

//test 02

averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);

checkWinner(averageDolphins, averageKoalas);

//test 03

averageDolphins = calcAverage(78, 58, 90);
averageKoalas = calcAverage(78, 58, 90);

checkWinner(averageDolphins, averageKoalas);