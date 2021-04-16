'use strict'
const friend01 = 'Lilia';
const friend02 = 'Samira';
const friend03 = 'Victor';

const friends = ['Seraphine', 'Zoe', 'Taliyah'];
console.log(friends);

const years = new Array(1996, 2002, 1994, 1987, 2020);  //it's a array function

console.log(friends[2]); //arrays starts at 0
console.log(friends[1]);
console.log(friends[0]);

console.log(friends.length);    //exact amount of elements in the array, zero doesnt matter, starts from 1, in ths example, length is 3
console.log(friends[friends.length - 1]);

friends[2] = 'Lucian';  //chance the array, manipulating the array
console.log(friends[2]);

const lux = ['Lux', 'SteamGuard', 2021 - 1996];

const lastName = 'Laurent';
const fiora = ['Fiora', lastName, 28, 'Teacher'];
console.log(fiora);

//exercise
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);
console.log(age1, age2, age3, age4, age5);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3])];
console.log(ages);