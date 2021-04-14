const country = 'Brazil';
console.log(country);

const continent = 'South America';
console.log(continent);

let population = 211000000;
console.log(population);

const isIsland = false;
console.log(isIsland);

const language = 'portuguese';
console.log(language);

const halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

const finlandPopulation = 6000000;

console.log(population > finlandPopulation);

const averagePopulation = 33000000;

console.log(population >= averagePopulation);

let description
console.log(country + ' is in ' + continent + ', and its ' + population + ' people speaking ' + language);

const newDescription = `${country} is in ${continent}, and there is ${population} people speaking ${language}`;

if (population >= averagePopulation) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}s population is ${averagePopulation - population} below average`);
};

const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders')
}

if (language == 'english' && population < 50000000 && !isIsland) {
    console.log(`Sarah, you should live in ${country}`);
} else {
    console.log(`Sarah, ${country} does not meet your criteria ☹ `);
}

switch (language) {
    case 'chinese':
    case 'mandarim':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('4th place');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too 😊');
}

population >= averagePopulation ? console.log(`${country} population is above average`) :
    console.log(`${country} population is below average`);