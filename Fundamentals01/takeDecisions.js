const age = 15;
//const isOldEnough = age >= 18;


//Control Structure
if (age >= 18) { //if isOldEnough is true, than, execute this block
    console.log('Sarah can start drive license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah cant start drive license 😿. Wait another ${yearsLeft} year(s).`);
};

const birthYear = 2001;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);