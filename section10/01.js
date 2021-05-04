'use strict';

const bookings = [];

const createBooking = function(flightNum, numPassangers = 1, price = 199.99 * numPassangers){

    /* numPassangers = numPassangers || 1; //default value, to buy a air ticket we presume it's at least 1 ticket
    price = price || 199.99; */

    const booking = {
        flightNum,  
        numPassangers,
        price
    };
    console.log(booking);
    bookings.push(booking);  
}

createBooking('LH123');