'use script';

const flight = 'LH234';
const fiora = {
    name: 'Fiora Laurent',
    passport: 472397772422
}

const checkIn = function(flightNum, passenger){
    flightNum = 'FR678';
    passenger.name = 'Sra. ' + passenger.name;

    if (passenger.passport === 472397772422){
        alert('Check in');
    }else{
        alert('Wrong Passport!');
    }
}

checkIn(flight, fiora);
console.log(flight);
console.log(fiora);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*100000000000);
}

newPassport(fiora);