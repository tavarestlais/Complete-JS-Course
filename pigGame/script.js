'use strict';
//selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

//variables are created in the global scope
let scores, currentScore, activePlayer, playing;

//Starting conditions   
const init = function (){
    //and here we assign a velue for this variables, so we dont need to use the 'let', because they're already created
     scores = [0,0];
     currentScore = 0;
     activePlayer = 0;
     playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');

    player0El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active'); 
}

init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//when we click into roll dice we'll remove that hidden class so the dice can be visible again with the number rolled

//FUNCTIONALITY ROLL DICE

btnRoll.addEventListener('click', function(){
    if(playing){
        const dice = Math.trunc(Math.random()*6) +1;

        //DISPLAY DICE
        diceEl.classList.remove('hidden');

        //DICE IMAGE
        diceEl.src = `dice-${dice}.png`;

        if(dice !== 1){
            //add the dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }else{
            //switch to the next player
            switchPlayer();
        }   
    }
});     


btnHold.addEventListener('click', function(){
    if(playing){
    //score[1] = score[1]+ currentScore
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 100){
            //Finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            
        }

        switchPlayer();
    }
});

btnNew.addEventListener('click', init);
