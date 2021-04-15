'use strict'

//FUNCTION DECLARATIONS
function calcAge01(birthYear) {
    return 2021 - birthYear;
}

const age01 = calcAge01(prompt("What's your birth year?"));
//console.log(age01);

//FUNCTION EXPRESSION
const calcAge02 = function (birthYear) {  //função sem nome (anonymous function)
    return 2021 - birthYear;
}
const age02 = calcAge02(prompt("What's your birth year?"));
console.log(age01, age02)

