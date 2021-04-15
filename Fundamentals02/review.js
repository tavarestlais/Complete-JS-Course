const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement <= 0) {
        return `${firstName} is already retired 🏖`;
    } else {
        return `${firstName} retires in ${retirement} years 🕔`;
    }
}

console.log(yearsUntilRetirement(1996, 'Laís'));
console.log(yearsUntilRetirement(1941, 'Samira'));
//in this example the variable birthYear is a local value, so these two dont have anything to do with each other
//another way to do the same thing
//const yearsUntilRetirement = function (birthYear, firstName) {
 //   const age = calcAge(birthYear);
   // const retirement = 65 - age;
   // if (retirement > 0) {
   //     console.log(`${firstName} retires in ${retirement} years 🕔`);
  //      return retirement;
   // } else {
  //      console.log(`${firstName} is already retired 🏖`);
 //       return -1;
 //   }
//}