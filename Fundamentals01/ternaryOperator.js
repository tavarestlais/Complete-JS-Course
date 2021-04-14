const age = 21;

//Ternary Operator
age >= 18 ? console.log('I like to drink wine 🍷') :
    console.log('I like to drink milk 🥛');

const drink = age >= 18 ? ' Wine 🍷' : 'Milk 🥛';
console.log(drink);

//ELSE STATEMENT
let drink2;
if (age >= 18) {
    drink2 = ' Wine 🍷';
} else {
    drink2 = 'Milk 🥛';
}
console.log(drink2);

//TEMPLATE LITERALS
console.log(`I like to drink ${age >= 18 ? `'wine 🍷'` : 'milk 🥛'}`);