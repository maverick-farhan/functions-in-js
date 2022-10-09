//Define And Declaration Function()
//The Map method
//The reduce Methods
//Point-Free (or Tacit) Programming
//Closure & State
//Reimplementation Map with Reduce
//Function Composition
//Middlewares in Express.js
//Reducers
//Transducers

//Functions are units for computations.
//Take Inputs and Produce Outputs
//Function Declaration
//const z = myfunc(3, 5);
//Function Hoisted(compiler stores the value of return to memory and stores its value)
/*function myfunc(x, y) {
  return x + y;
}
console.log(z);
*/
/*
function myfunc(x, y) {
  return x + y;
}

const d = myfunc.apply(null, [2, 3, 4]);
console.log(myfunc(d));
*/
/*
Hoisting --> Functions (and Variable defined by ~var~ are put into the memory during the compilation phase. call from anywhere before the actualo definion)*/
/*
const compute1 = function (x, y) {
  return x + y;
};
console.log(compute1(1, 3));
*/
//IIFE
//Immediately Invoked Function Expressions
/*
const a = (function (x, y) {
  return x + y;
})(2, 4);
console.log(a);
//Arrow Functions
var compute3 = (x, y) => {
  return x + y;
};
console.log(compute3(1, 3));
//No this keyword in arrow function

var compute3 = (x, y) => x + y;
console.log(compute3(1, 3));
*/
//Impicit return
//
//
//In JS function is Objects
//
/*
function display(age) {
  let gmail = "farhan";
  let name = "mushtaque";
  let last = "@gmail.com";
  return name + gmail + age + last;
}
console.log(display(13));
*/
/*
const a = display().call(person);
console.log(a);
*/
//
//
//

//
//
//
