'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours:{
    thu:{
      open: 12,
      close: 22,
    },
    fri:{
      open:11,
      close: 23,
    },
    sat:{
      open: 0,
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};


const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const{name: restaurantName, 
  openingHours: hours, 
  categories: tags} 
  = restaurant;
console.log(restaurantName, hours, tags);

const {menu = [], starterMenu: starters = []} = restaurant;

/* //old way
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//new way
const [x,y,z] = arr;
console.log(x, y ,z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

/* let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); */

/* [main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2,0));  //we want element number 2 from the starter menu and number 0/1 do principal

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p=1, q=1, r=1] = [8,9]; //you can assign values to the variables so it doesn't gets undefined
console.log(p, q, r); */