//OBJECT LITERAL SYNTAX
const fiora = {     //cada uma das linhas/nomes/keys é uma propriedade
    //propriedade : value,
    firstName: 'Fiora',
    lastName: 'Laurent',
    age: 32,
    retirement: 65 - 32,
    job: 'Duelist',
    friends: ['Riven', 'Lucian']
}
console.log(fiora);
console.log(fiora.lastName);    //this point is a operator that enters the property and gets the value that we specified
console.log(fiora['lastName']);

const nameKey = 'Name';
console.log(fiora['first' + nameKey]);
console.log(fiora['last' + nameKey]);

const interestedIn = prompt(`What do you want to know about Fiora? 
Choose between:
firstName, lastName, age,
retirement, job, friends.`)       //build-in function (recap)
console.log(fiora[interestedIn]);

if (fiora[interestedIn]) {
    alert(fiora[interestedIn]);
} else {
    prompt(`Wrong request!
    Choose between:
    firstName, lastName, age,
    retirement, job, friends.`);
}

fiora.location = 'France';
console.log(fiora);
//CHALLENGE

console.log(`${fiora.firstName} has ${fiora.friends.length} friends and her best friend is called ${fiora.friends[0]}`)