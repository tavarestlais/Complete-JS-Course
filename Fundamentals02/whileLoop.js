//for (let rep = 1; rep <= 10; rep++) {
//    console.log(`Lifiting weight repetition ${rep}🏋`);
//}

//console.log('--------------DIVISION')

//let rep = 1;
//while (rep <= 10) {   //MORE VERSATILE  
//    console.log(`Lifiting weight repetition ${rep}🏋`);
//    rep++;
//}

//DICE

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice} 🎲`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`You rolled a ${dice} 🎲 !! The Loop stoped!`);
}