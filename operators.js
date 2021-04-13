//Math Operators
const now = 2021;
const ageAhri = now - 1996;
const ageLux = now - 2000;
console.log(ageAhri, ageLux);

console.log(ageAhri * 2, ageAhri / 10, 2 ** 3);
//2**3 é igual 2x2x2=8

const firstName = 'Luxanna';
const lastName = 'SteamGuard';
console.log(firstName + ' ' + lastName);

//Assignments operators

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//Comparison operators
// > < >= <=
console.log(ageAhri > ageLux);
console.log(ageLux >= 18);

const isFullAge = ageLux >= 18;


//Operator precedence

const now = 2020;
console.log(now - 1996 > now - 2002);

//console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 20 - 5;
console.log(x, y);


