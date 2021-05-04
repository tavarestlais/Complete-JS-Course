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