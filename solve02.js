//Functions In javaScript (v.02)
//Some More Problems using Functions

//First And Last Digit of a four digit numbers.
/*
function fourDigit(number) {
  let a;
  let b;
  a = number % 10; //Gives Last digit
  b = number / 1000; //Gives First digit of a four digit number
  console.log(`Four Digit Number is: ${number}`);
  console.log(`First Digit No = ${Math.floor(b)} & Last Digit No = ${a}`);
  return `Sum of First and Last digit is: ${Math.floor(a + b)}`;
}
console.log(fourDigit(3109));
*/

//Give The Range of a given number e.g (54 is between 50 and 60)
//This algorithm is best suited for (1-100) digits
/*
 function range(number) {
  let lower = Math.floor(number / 10) * 10;
  let upper = lower + 10;
  console.log(lower);
  return `The Number ${number} is between ${lower} & ${upper}`;
}
console.log(range(100));
*/

//Give the Rupee Notations e.g(Rs.1342 have 500x2, 200x1,100x1,20x2,2x1)

function rupeeNotation(rs) {}
console.log(rupeeNotation(1342));
