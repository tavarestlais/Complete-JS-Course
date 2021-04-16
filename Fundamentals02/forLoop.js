for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifiting weight repetition ${rep}🏋 `)
}

//ARRAY, BREAKING AND CONTINUING
const fiora = [
    'Fiora',
    'Laurent',
    2021 - 1989,
    'Duelist',
    ['Lucian', 'Riven'],
    true
];

const types = [];

for (let i = 0; i < fiora.length; i++) {
    console.log(fiora[i], typeof fiora[i]);

    //FILLING TYPES ARRAY
    //types[i] = typeof fiora[i];

    types.push(typeof fiora[i]);
};

console.log(types);

const years = [1991, 1989, 2002, 2009, 1976];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);

//CONTINUE AND BREAK
console.log('----------ONLY STRINGS')
for (let i = 0; i < fiora.length; i++) {
    if (typeof fiora[i] !== 'string') continue;
    console.log(fiora[i], typeof fiora[i]);
};
console.log('----------BREAK WITH NUMBERS')
for (let i = 0; i < fiora.length; i++) {
    if (typeof fiora[i] === 'number') break;
    console.log(fiora[i], typeof fiora[i]);
}

