'use script';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//FOR OF FUNCTION
//for(const movement of movements){
for(const [i, movement] of movements.entries())
    if(movement > 0){
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    }else{
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    };

console.log('-----------------------------------');

//FOR EACH FUNCTION
movements.forEach(function(movement, i, arr){
    if(movement > 0){
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    }else{
        console.log(`Movement ${i + 1}:  You withdrew ${Math.abs(movement)}`);
    }
});
  