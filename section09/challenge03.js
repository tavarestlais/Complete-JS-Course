'use script';

const gameEvents = new Map([
    //minute that the event ocurrs and the events themselfs
    //because it's a Map, duplicated events will not ocurr
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
  
  //time 90 minutes + extra time
  //console.log(gameEvents.values());

  const events = [...new Set(gameEvents.values())];

  gameEvents.delete(64);

const time = [...gameEvents.keys()].pop;
console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);

for(const [min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND'
    console.log(`[${half} HALF] ${min}: ${event}`)
}
//B and E are middle seats

const checkMiddleSeat = function(seat){

}

ckeckMiddleSeat('11A')