//LOOP BACKWARDS
const fiora = [
    'Fiora',
    'Laurent',
    2021 - 1989,
    'Duelist',
    ['Lucian', 'Riven'],
    true
];

for (let i = fiora.length - 1; i >= 0; i--) {
    console.log(fiora[i]);
}

//LOOP INSIDE A LOOP
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------STARTING EXERCISE ${exercise}🏋 `);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weigth repetition ${rep} 🏋️‍♀️`);
    }
}
