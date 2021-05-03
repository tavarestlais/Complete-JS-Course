'use script';

/*TEST DATA
underscore_case
    first_name
Some_variable
    calculate_AGE
delayed_departure
*/
document.body.append(document.createElement
    ('textarea'));
document.body.append(document.createElement('button'));



document.querySelector('button').addEventListener('click', function (){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(text);

    for(const row of rows){
        const [first, second] = row.toLowerCase().trim().split('_');    
        const output = `${first}${second.replace(
            second[0], 
            second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20, ' ')} ${'✅'.repeat(i + 1)}`);    //adds 20 empty spaces at the end
    }
}); 
