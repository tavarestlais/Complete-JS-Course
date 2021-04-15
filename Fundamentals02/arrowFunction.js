'use strict';

//ARROW FUNCTION

const calcAge = birthYear => 2021 - birthYear;  //set the variable to the function
const age = calcAge(1996);
console.log(age);

//ANOTHER ARROW FUNCTION

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement;      //precisa do return qnd é mais do que uma linha de código
    return `${firstName} retires in ${retirement}`
}
console.log(yearsUntilRetirement(1995, 'Laís'));
console.log(yearsUntilRetirement(1989, 'Luxanna'));