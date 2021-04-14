//Body Mass Index;
//MARK
const massMark = 78;
console.log(massMark);

const heightMark = 1.69;
console.log(heightMark);

//JOHN
const massJohn = 92;
console.log(massJohn);

const heightJohn = 1.95;
console.log(heightJohn)


//CALCS
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
//console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})!`);
} else {
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`);
};


