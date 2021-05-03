'use strict';
const currentYear = 2021;

function calcAge(birthYear){
    const age = currentYear - birthYear;
  
    function printAge(){
        const output = `You're ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const str = `Oh, you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b){  //the scope of this function is only the block in which was defined
                return a + b;
            }
        }
       /*  console.log(str); */
       console.log(millenial);      //it works because its a var variable, not a const or let. Var variables are function scoped
       /* console.log(add(2,3)); */
    }

    printAge();
    return age;
}

const firstName = 'Fiora';
calcAge(1996);