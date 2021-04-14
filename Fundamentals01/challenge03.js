const teamDolphinsAverage = (100 + 110 + 110) / 3;
const teamKoalasAverage = (100 + 110 + 110) / 3.
console.log(`Team Dolphins Average: ${teamDolphinsAverage}
Team Koalas Average ${teamKoalasAverage}`);


//if (teamDolphinsAverage === teamKoalasAverage) {
//    console.log("IT'S A DRAW!");
//} else if (teamDolphinsAverage > teamKoalasAverage) {
// console.log(`Team Dolphins WINS with ${teamDolphinsAverage} points! 🏆 `);
//} else {
//  console.log(`Team Koalas WINS with ${teamKoalasAverage} points! 🏆`)
//}

const minScore = 100;

if (teamDolphinsAverage >= minScore && teamDolphinsAverage > teamKoalasAverage) { // TEAM DOLPHINS WINS
    console.log(`Team Dolphins WINS with ${teamDolphinsAverage} points! 🏆 `);
} else if (teamKoalasAverage >= minScore && teamKoalasAverage > teamDolphinsAverage) { // TEAM KOALAS WINS
    console.log(`Team Koalas WINS with ${teamKoalasAverage} points! 🏆`);
} else if (teamDolphinsAverage >= minScore && teamKoalasAverage >= minScore && teamDolphinsAverage === teamKoalasAverage) { //DRAW
    console.log("IT'S A DRAW!");
} else {
    console.log(`None of the Teams reached ${minScore} points`);
}
