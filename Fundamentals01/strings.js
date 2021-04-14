const firstName = 'Ahri';
const job = 'Enchantress';
const birthYear = 1991;
const currentYear = 2020;

const about = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
console.log(about);

const aboutNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(aboutNew);

console.log(`Just a regular string with a back quote...`);

console.log('String \n\
with multiple \n\
lines');

console.log(`String with
multiple
lines`)