'use strict'
const fiora = {
    firstName: 'Fiora',
    lastName: 'Laurent',
    birthYear: 1989,
    retirement: 65 - 32,
    job: 'Duelist',
    friends: ['Riven', 'Lucian'],
    hasDriversLicense: true,

    //calcAge: function (birthYear) {
    //    return 2021 - birthYear;
    //}

    //calcAge: function () {
    //    return 2021 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2021 - this.birthYear;   //create a new property fiora.age as .this refers to the Object which is fiora
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} ${this.lastName} us a ${this.calcAge()} years old ${this.job}. She will retire in ${this.retirement} years. Her frieds are ${this.friends}. ${this.firstName} has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;

    }
}
//console.log(fiora.calcAge(1991));       //it's not ideal because repeating the code >>> DRY CODE
//console.log(fiora['calcAge'](2002));    //passing ages can make mistakes, it's too repetitive

//console.log(fiora.calcAge());       //o que aparece antes do '.' é o que está chamando o método, logo o this aponta para o objeto

//just do the age calc once and storage the result in the age property
//console.log(fiora.age);

//CHALLENGE
//console.log(`${fiora.firstName} ${fiora.lastName} us a ${fiora.age} years old ${fiora.job}. She will retire in ${fiora.retirement} years. Her frieds are ${fiora.friends}.`);

console.log(fiora.getSummary());

