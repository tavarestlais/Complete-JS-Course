'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🎉'; 
//console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 2;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */
//DEFINE THE SECRET NUMBER
let secretNumber = Math.trunc(Math.random()*20) +1    //math is a object JS give us
/* console.log(number); */
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

//SET IF THE GUESS IS TOO LOW OR TOO HIGH
    if(!guess){     //if the guess is empty ou a invalid number
        /* document.querySelector('.message').textContent = `🚫 No Number 🚫`; */
        displayMessage(`🚫 No Number 🚫`);
   
    }else if(guess === secretNumber){
        displayMessage(`🎉 Correct Number! 🎉`); 
        document.querySelector('.number').textContent =  secretNumber;  
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
       if(score > highscore){
           highscore = score;
           document.querySelector('.highscore').textContent = highscore;
       }
    
    }else if(guess !== secretNumber){
        if(score > 1){
           displayMessage(guess > secretNumber ?`The number is too high! ↗️` : `The number is too low! ↘️`) ;
            score -= 1;
            document.querySelector('.score').textContent = score;  
        }else{
            displayMessage(`You lost the game 😢`);
            document.querySelector('.score').textContent = 0;  
        }
    }

})

//PLAY AGAIN

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    secretNumber = Math.trunc(Math.random()*20) +1 

    
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '#15rem';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
})