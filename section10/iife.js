'use strict';

//IIFE

(function(){
    console.log('This will never run again 🏃' );
})();

//IIFE but in an arrow function
(() => console.log('This will ALSO never run again 🏃'))();