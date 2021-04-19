'use strict';
//CALCULAR AMPLITUDE TÉRMICA
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/* const calcTempAmplitude = function(temps){

    let max = temps[0];      //we supouse the first element of the array is the max, as we dont loop the entire array yet
    let min = temps[0];
    
    for(let i = 0; i < temps.length; i++){      //should be the size of the array qe're passing
        const currentTemp = temps[i];

        if(typeof currentTemp !== 'number') continue;
        
        if(currentTemp > max) max = currentTemp;  //se o valor do array atual (temps[i]) é maior que o valor maximo (armazenado na var max), então substitui o valor máximo para aquele valor
        if(currentTemp < min) min = currentTemp;
    }
    console.log(max, min);
    return max - min;   //return the amplitude
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
 */
/* const array1 =['1','2','3'];
const array2 =['4','5'];
const array3 =array1.concat(array2); */

const calcTempAmplitudeNew = function(temp1, temp2){

    const temps = temp1.concat(temp2);
    console.log(temps);

    let max = temps[0];      //we supouse the first element of the array is the max, as we dont loop the entire array yet
    let min = temps[0];
    
    for(let i = 0; i < temps.length; i++){      //should be the size of the array qe're passing
        const currentTemp = temps[i];

        if(typeof currentTemp !== 'number') continue;
        
        if(currentTemp > max) max = currentTemp;  //se o valor do array atual (temps[i]) é maior que o valor maximo (armazenado na var max), então substitui o valor máximo para aquele valor
        if(currentTemp < min) min = currentTemp;
    }
    console.log(max, min);
    return max - min;   //return the amplitude
}

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
