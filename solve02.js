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
/*
function rupeeNotation(rs) {
  let fHund, twoHund, oneHund, fifty, twenty, ten, five, two;
  console.log(`  Rs.${rs} contains:`);
  fHund = rs / 500;
  rs = rs % 500;
  twoHund = rs / 200;
  rs = rs % 200;

  oneHund = rs / 100;
  rs = rs % 100;

  fifty = rs / 50;
  rs = rs % 50;

  twenty = rs / 20;
  rs = rs % 20;

  ten = rs / 10;
  rs = rs % 10;

  five = rs / 5;
  rs = rs % 5;

  two = rs / 2;
  rs = rs % 2;

  return ` | 500 x ${Math.floor(fHund)} | 200 x ${Math.floor(
    twoHund
  )} | 100 x ${Math.floor(oneHund)} | 50 x ${Math.floor(
    fifty
  )} | 20x ${Math.floor(twenty)} | 10 x ${Math.floor(ten)} | 5 x ${Math.floor(
    five
  )} | 2 x ${Math.floor(two)} |`;
}
console.log(rupeeNotation(1342));
*/

//calculate the sum of three digits number e.g (125 is 8)
/*
function sumDigit(number) {
  let fDigit, sDigit, tDigit;
  console.log(`Sum of Three Digit Number ${number} is :`);
  fDigit = number / 100;
  number = number % 100;
  sDigit = number / 10;
  tDigit = number % 10;
  return `${Math.floor(fDigit + sDigit + tDigit)}`;
}
console.log(sumDigit(125));
*/

//Merge Three Numbers to form three digit number
/*
function mergeDigits(a, b, c) {
  let number;
  number = a * 100 + b * 10 + c;
  return number;
}
console.log(mergeDigits(1, 2, 30)); //Flaws in this program
*/

//Reverse of 3 digit numbers
/*
function reverse(number) {
  let rev = number;
  rev = rev % 10;
  return rev;
}
console.log(reverse(123));
*/

//find real roots of the quadratic equation
//a,b,c are the coefficients of Qudratic Equation
function rootsQuad(a, b, c) {
  var r1, r1;
  let d;
  d = b * 2 - 4 * a * c;
  if (d < 0) {
    return `Roots are Imaginary`;
  } else {
    r1 = -b + Math.sqrt(d);
    r2 = -b - Math.sqrt(d);
    return `r1 = ${r1} \nr2 = ${r2}`;
  }
}

console.log(rootsQuad(1, 4, 1));
