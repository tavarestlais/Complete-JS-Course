'use strict';

//poll app
/*
question
array of options
array with the numbers of replies 4 ea option 
data is stored into an object (that has been given)
*/

/*
TASK
criar método: registerNewAnswer dentro do objeto poll
mostrar um prompt para o usuario inserir o numero da opção selecionada

Verificar se o numero inserido é valido ou nao
*/

//BONUS TEST DATA 1: [5,2,3]
//BONUS TEST DATA 2: [1 ,5 ,3 , 9 , 6 ,1]

const poll = {
    question: "What's your favourite programming language?",
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),

    registerNewAnswer(){
        const answer = Number(
            prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`)); 

            console.log(answer);

        //se qlqr uma das premissas for falsa, vai dar um short-circuiting e finalizar/não prosseguir
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        //console.log(this.answers);
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array'){ //array is the default option
        if(type === 'array'){
            console.log(this.answers);
        }else if(type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};

//poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers:[5, 2, 3]}, 'string');