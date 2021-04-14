const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan Studies Structure');
        console.log('Lorem ipsum');
        break;
    case 'tuesday':
        console.log('Exercise');
        console.log('Lorem ipsum dolor sit amet');
        break;
    case 'wednesday':
        console.log('Sit amet Lorem ipsum dolor');
        break;
    case 'thursday':
    case 'friday':
        console.log('Almost weekend dolor lorem ipsum dolor sit amet');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Weekend - Day off!');
        break;
    default:
        console.log('Not a valid day');
}


//ANOTHER RESOLUTION, USING COMPARISON AND BOOLEAN LOGIC

if (day == 'monday') {
    console.log('Plan Studies Structure');
    console.log('Lorem ipsum');
} else if (day == 'tuesday') {
    console.log('Exercise');
    console.log('Lorem ipsum dolor sit amet');
} else if (day == 'wednesday') {
    console.log('Wednesday Sit amet Lorem ipsum dolor');
} else if (day == 'thursday' || day == 'friday') {
    console.log('Almost weekend dolor lorem ipsum dolor sit amet');
} else if (day == 'saturday' || day == 'sunday') {
    console.log('Weekend - Day off!');
} else {
    console.log('Not a valid day');
}