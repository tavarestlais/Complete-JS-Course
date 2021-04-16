
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populationsLoop = [221, 1366, 126, 37]; //brazil, india, Japan and Canada

const percentages3 = [];

let i = 0;
while (i < populationsLoop.length) {
    const perc = percentageOfWorld1(populationsLoop[i]);
    percentages3.push(perc);
    i++
}
console.log(percentages3);

//Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
//but this time using a while loop (call the array 'percentages3')
//2. Reflect on what solution you like better for this task: the for loop or the while
//loop?