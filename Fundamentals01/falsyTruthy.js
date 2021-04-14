console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('Ahri'));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if (money) {
    console.log("Don't spend it all 💰");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log("😢 Height is not defined");
}