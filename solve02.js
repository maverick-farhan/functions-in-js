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
/*
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
*/

//Profit and Loss By Seller
/*
function Seller(cp, sp) {
  if (cp > sp) {
    return `You Incurred Loss By ${cp - sp}`;
  } else if (sp > cp) {
    return `You Made Profit By ${sp - cp}`;
  }
}
console.log(Seller(20, 40));
*/
//Create A Calculator Which can do Addition Subtraction Multiplication Division Modulus(Remainder)
/*
function Calculator(choice, num1, num2) {
  console.log("1:Add\n2:Sub\n3:Mult\n4:Div\n5:Mod\n");
  switch (choice) {
    case 1:
      return `Add: ${num1} + ${num2} = ${num1 + num2}`;
      break;
    case 2:
      return `Sub: ${num1} - ${num2} = ${num1 - num2}`;
      break;
    case 3:
      return `Mult: ${num1} x ${num2} = ${num1 * num2}`;
      break;
    case 4:
      return `Div: ${num1} / ${num2} = ${num1 / num2}`;
      break;
    case 5:
      return `Mod: ${num1} % ${num2} = ${num1 % num2}`;
      break;
    default:
      return `Default Case`;
  }
}
console.log(Calculator(1, 30, 10));
*/

//check Even or Odd
/*
function checkEvenOrOdd(number) {
  if (number % 2 == 0) {
    return `${number} is Even`;
  } else if (number % 2 == 1) {
    return `${number} is Odd`;
  } else {
    return `${number} is Invalid Number`;
  }
}
console.log(checkEvenOrOdd(1));
*/

//Max Out Of Two Numbers
/*
function max(num1, num2) {
  if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  } else if (num2 > num1) {
    return `${num2} is greater than ${num1}`;
  } else {
    return `${num1} & ${num2} is Invalid Numbers`;
  }
}
console.log(max(10, 20));
*/

//Max Out Of Three Numbers
/*
function max(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) return `${num1} is greatest`;
  else if (num2 > num1 && num2 > num3) return `${num2} is greatest`;
  else if (num3 > num1 && num3 > num2) return `${num3} is greatest`;
  else {
    return `Invalid Values`;
  }
}
console.log(max(1, 1, 1));
*/

//Second Maximum Out of Three Numbers
/*
function secondMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
      return `${num2} is second maximum`;
    } else return `${num3} is second maximum`;
  } else if (num2 > num1 && num2 > num3) {
    if (num3 > num1) {
      return `${num3} is second maximum`;
    } else return `${num1} is second maximum`;
  } else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
      return `${num1} is second maximum`;
    } else return `${num2} is second maximum`;
  } else {
    return `Enter Valid Number`;
  }
}
console.log(secondMax(11, 1, 2));
*/

//Leap Year Or not
/*
function leapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return `YUP ${year} is leap year`;
      } else return `Sorry folk ${year} is not a leap year`;
    } else {
      return `YUP ${year} is leap year`;
    }
  } else {
    return `Sorry folk ${year} is not a leap year`;
  }
}
console.log(leapYear(2100));
*/

//Percentage And Grades
/*
function percentageGrades(perc) {
  if (perc >= 90 && perc <= 100) {
    return `Grade A`;
  } else if (perc >= 70 && perc <= 89) {
    return `Grade B`;
  } else if (perc >= 50 && perc <= 69) {
    return `Grade C`;
  } else {
    return `Grade F`;
  }
}console.log(percentageGrades(80));
*/

//Bill of a customer || Monthly Rental Rs. 100 rates are as follows
/*
function rental(NoCalls) {
  let monthly = 100;
  if (NoCalls > 0) {
    if (NoCalls >= 1 && NoCalls <= 100) {
      return `Your Charge is ${monthly}`;
    } else if (NoCalls >= 101 && NoCalls <= 200) {
      return `Your Charge is ${monthly + NoCalls * 0.8}`;
    } else if (NoCalls > 201 && NoCalls <= 500) {
      return `Your Charge is ${monthly + NoCalls * 1.0}`;
    } else if (NoCalls > 501) {
      return `Your Charge is ${monthly + NoCalls * 1.2}`;
    }
  } else {
    return `Enter Greater Than 0`;
  }
}
console.log(rental(120));
*/

//Palindrome Numbers(Enter Three Digit Number)
/*I'm Stuck Help Me Out
function palindrome(number) {
  let hundreds, tens, ones;
  let newNumber;
  ones = number % 10;
  hundreds = number / 100;
  number = number / 10;
  tens = number % 10;
  newNumber = ones * 100 + tens * 10 + hundreds;
  if (ones == hundreds && tens == tens) {
    return `${Maths.floor(newNumber)} is Palindrome`;
  } else {
    return `${Maths.floor(newNumber)} is Not a Palindrome`;
  }
}console.log(palindrome(121));
*/

//Capital | Small | Special Character
/*
function checkKey(keypress) {
  if (keypress >= 65 || keypress <= 90) {
    return `You Pressed ${toString(keypress)} Capital Letters`;
  } else if (keypress >= 97 || keypress <= 122) {
    return `You Press Small Letters`;
  } else if (keypress >= 48 || keypress <= 57) {
    return `You Press Numbers Letters`;
  } else if (
    (keypress >= 0 && keypress >= 47) ||
    (keypress >= 58 && keypress <= 64) ||
    (keypress >= 91 && keypress <= 96) ||
    keypress >= 123 ||
    keypress <= 127
  ) {
    return `You Press Specials Characters`;
  } else {
    return `Enter Valid Input`;
  }
}
console.log(checkKey(70));//Flaws IDK How it works
*/

//N natural Numbers
/*
function natural(n) {
  //Gives nutural Numebers Till N
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
console.log(natural(10));
*/

//Fibonnicci Series 1,1,2,3,5,8,13,...
/*
function fibu(n) {
  let prev = 0;
  let next = 1;
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    console.log(next);
    sum = prev + next;
    prev = next;
    next = sum;
  }
}
fibu(5);
*/

//Factorail Number
/*
function factorail(number) {
  let fact = 1;
  for (let i = number; i >= 1; i--) {
    fact = fact * i;
  }
  console.log(fact);
}
factorail(5);
*/

//Pattern 1
/*
function pattern1(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      return `${j}\n`;
    }
  }
}
console.log(pattern1(5));
*/
