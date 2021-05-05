'use script';

const header = document.querySelector('h1');
header.style.color = 'red';

let currentColor = header.style.color;
console.log(currentColor);

document.querySelector('body').addEventListener('click', function(){

    if(currentColor == "red"){ 
        header.style.color = "blue";
        currentColor = "blue";
    } else {
        header.style.color = "red";
        currentColor = "red";
    };

});