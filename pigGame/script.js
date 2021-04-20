'use strict';
//selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')


//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//when we click into roll dice we'll remove that hidden class so the dice can be visible again with the number rolled

//FUNCTIONALITY ROLL DICE

btnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random()*6) +1;

    //DISPLAY DICE
    diceEl.classList.remove('hidden');

    //DICE IMAGE
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1){
        //add the dice to current score
        currentScore += dice;
        current0El.textContent = currentScore;
    }else{
        //switch to the next player
    }
});     

