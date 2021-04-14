const age = 18;

if (age === 18) console.log("You just became an adult 🙂 (strict)");

if (age == 18) console.log("You just became an adult 🙂 (loose)");

const favouriteNumber = Number(prompt("What's your favourite number?")); //number convert the string typed into a number
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber == 23) { //faz coersão de tipo
    console.log("NICE, 23 is equal to 23");
} else if (favouriteNumber === 7) {
    console.log("7 is a Lucky number");
} else {
    console.log("Number is not 23 or 7");
}

if (favouriteNumber !== 23) console.log('Why not 23?')
