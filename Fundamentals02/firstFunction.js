'use strict';

function logger() {
    console.log('Dogs are awesome 🐕');
}

logger(); //aqui nao adianta passar parâmetro, afinal, não tem return
logger();
logger();

function fruitProcessor(apples, oranges) {   //espaço vazio que precisamos preencher quando chamamos a função
    console.log(apples, oranges);
    const juice = `Juice with  ${apples} apples 🍎 and ${oranges} oranges 🍊`;
    return juice; //resultado de executar essa função
}

const appleJuice = fruitProcessor(5, 0);   //valor desses parâmetros passados são chamados de argumento (arguments)
//o resultado de chamar essa função vai ser o parâmetro passado em return
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); //aqui só registra o resultado de chamar a função

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);