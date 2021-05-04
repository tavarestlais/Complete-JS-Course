'use script';

const lufthansa = {
    airline:'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}, name`});
    },
};

lufthansa.book(239, 'Fiora Laurent');
lufthansa.book(543, 'Sarah Fortune');
console.log(lufthansa);

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//DOES NOT WORK
//book(23, 'Sarah Fortune');

//CALL METHOD

book.call(eurowings, 23, 'Ashley Willord');
console.log(eurowings);

book.call(lufthansa, 423, 'Jenny Willson');
console.log(lufthansa);

//APPLY METHOD
const flightData = [525, 'George Silver'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData);

//BIND METHOD

const bookEW = book.bind(eurowings);        //cria uma variavel para armazenar o this
bookEW(42, 'Janne Villanueva')  //invoca a função atribuida no this com os parâmetros passados

const bookLH = book.bind(lufthansa);

const bookLH123 = book.bind(lufthansa, 123);
bookLH123('Hanna Montana');

//WITH EVENT LISTNERS

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

//MINI CHALLENGE
//As Arrow function
    const taxRate = rate =>  value => value + value * rate;   //function that recieves the rate

    /*or as normal function
    const addTaxRate = function(rate){
        return function (value){
            return value + value * rate;
        }
    }
    */

    const addVAT2 = taxRate(0.23);

console.log(addVAT(100));
console.log(addVAT(23));