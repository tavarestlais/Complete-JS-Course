'use script';

const game = {
    team1: 'Bayen Minich',
    team2: 'Borussia Dortmund',
    players:[
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimnchi',
        'Gortzka',
        'Comam',
        'Muller',
        'Gnar',
        'Lewandowski',
    ],
    [
        'Burki',
        'Shultz',
        'Hummens',
        'Akanji',
        'Hamiki',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
    ],
    score: '4:0',
    scored:['Lewandowski', 'Gnar', 'Lewandowski', 'Hummens'],
    date: 'Nov 9th 2021',
    odds:{
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}
/* 
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const {odds:{team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function(...players){
    console.log(`${players.length} goals were scored`)
}
/* 
printGoals('Davies', 'Muller' ,'Lewandowski','Kimnchi');
printGoals('Davis', 'Muller') */

/* printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
 */

for(const [i, player] of game.scored.entries());
    console.log(`Goal ${i + 1} : ${player}`);

const odds = Object.values(game.odds);
let average = 0;

for(const odd of odds); 
average += odd;
average /= odds.length;
console.log(average);

for(const [team, odd] of Object.entries(game.odds));
console.log(team, odd);