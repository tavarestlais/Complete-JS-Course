'use strict'

//LECTURE 01
function describeCountry(country, population, capitalCity) {
    //console.log(country, population, capitalCity);
    const infos = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return infos;
}

const countryInfo01 = describeCountry('Brazil', 211, 'Brasilia');
console.log(countryInfo01);

const countryInfo02 = describeCountry('Canada', 37, 'Ottawa');
console.log(countryInfo02);

const countryInfo03 = describeCountry('New Zealand', 4, 'Wellington');
console.log(countryInfo03);

//LECTURE 02

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
const anotherPercentage = percentageOfWorld2(100);
console.log(`Testing ${anotherPercentage}`);

const percentage01 = percentageOfWorld1(211);
const percentage02 = percentageOfWorld1(37);
const percentage03 = percentageOfWorld1(4);
console.log(`Brazil has ${percentage01} % of the world population
Canada has ${percentage02} % of the world population
New Zealand has ${percentage03} % of the world population`);

//LECTURE 03

const otherPercentage = percentageOfWorld3 => (percentageOfWorld3 / 7900) * 100;
const calculation = otherPercentage(211);
console.log(`Another exercise, but this time, the calc is ${calculation}`);

//LECTURE 04

function describePopulation(country, population) {
    const percentageCalc = percentageOfWorld1(population);
    //console.log(percentageCalc);

    const description = `${country} has ${population} million people, which is about ${percentageCalc}% of the world.`;
    return description;
}
console.log(describePopulation('Brazil', 211));
console.log(describePopulation('India', 1366));
console.log(describePopulation('Japan', 126));

//INTRODUCTIONS TO ARRAY - LECTURE

const populations = [221, 1366, 126, 37]; //brazil, india, Japan and Canada
console.log(populations.length);
console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3])];
console.log(percentages);

const neighbours = ['Bolivia', 'Paraguay', 'Uruguay', 'Argentina', 'Peru',];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours)

if (neighbours.includes('Germany')) {
    console.log(`Probably a central European country 😊`);
} else {
    console.log(`Probably not a central European country 😊`);
}

neighbours[neighbours.indexOf('Bolivia')] = 'Republic of Bolivia';
console.log(neighbours);

const myCountry = {
    country: 'Brazil',
    capital: 'Brasilia',
    language: 'Portuguese',
    population: 211,
    neighbours: ['Bolivia', 'Paraguay', 'Uruguay', 'Argentina', 'Peru',],

    describe: function () {
        return `${this.country}, which the capital is ${this.capital}, has ${this.population} million people speaking ${this.language}. Some of the neighbours of ${this.country} are ${this.neighbours}.`;
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }

}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbours and a capital called ${myCountry.capital}`);

//INCREASE USING DOT NOTATION
myCountry.population += 2;
console.log(myCountry.population);

//INCREASE USING BRACKETS NOTATION
myCountry['population'] -= 2;
console.log(myCountry.population);

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry);

//LOOP
for (let vote = 1; vote <= 5; vote++) { //it can be any number you want
    console.log(`'Voter number ${vote} is currently voting`);
}

//LECTURE: Looping Arrays, Breaking and Continuing
const populationsLoop = [221, 1366, 126, 37]; //brazil, india, Japan and Canada


const percentageLoop = [];

for (let i = 0; i < populationsLoop.length; i++) {
    const perc = percentageOfWorld1(populationsLoop[i]);
    percentageLoop.push(perc);
}

console.log(percentageLoop);

//LECTURE  Looping Backwards and Loops in Loops

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']];

console.log(listOfNeighbours);

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbours: ${listOfNeighbours[i][y]}`);
    }
}
