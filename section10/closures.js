'use strict';

const secureBooking = function(){
    let passengerCount = 0;

    return function(){      //essa função retornada vai ser armazenada na variável BOOKER
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
};

const booker = secureBooking();

booker();
booker();
booker();

//mesmo que tivesse uma variável de mesmo nome no escopo global, o closure ainda teria prioridade na função BOOKER 

//MORE CLOSURE EXAMPLES

//EXAMPLE 1

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    };
};

const h = function(){
    const b = 12;
    f = function(){
        console.log(b * 2);
    };
}

g();
f();

//reasign F function
h();
f();

//EXAMPLE 2

const boardPassengers = function(n, wait){
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000); //the time is in miliseconds

    console.log(`Will start boarding in ${wait} seconds`)
};

boardPassengers(180, 3);