'use strict';

/* console.log(me);
console.log(job);
console.log(birthYear);

var me = 'Fiora';   //are hoisted but with the value undefined
let job = 'Duelist';
const birthYear = 1996; */

//FUNCTION DECLARATION

console.log(addDecl(2,3))
console.log(addExpression(2,3))
console.log(addArrow(2,3))

function addDecl(a,b){
    return a + b;
}

const addExpression = function(a,b){
    return a + b;
}

var addArrow = (a,b) => a +b; //arrow function

