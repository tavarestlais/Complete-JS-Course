const friends = ['Seraphine', 'Zoe', 'Taliyah'];

//ADD ELEMENTS
friends.push('Lucian');
console.log(friends);

friends.unshift('Lulu');
console.log(friends);

//REMOVE ELEMENTS
friends.pop();  //remove last element of the array. Dont need to pass any information
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

//CONSULT ELEMENT POSITION
console.log(friends.indexOf('Zoe'));
console.log(friends.indexOf('Lulu'));  //if I ask for the position of a element that has already been popped, the value that returns it's -1

//ES6 METHOD - INCLUDES: returns true if the element is in the array or false if it's not.
console.log(friends.includes('Zoe'));
console.log(friends.includes('Lulu'));

if (friends.includes('Lulu')) {
    console.log(`You have a friend called Zoe`);
} else {
    console.log(`Lulu isn't your friend anymore`);
}