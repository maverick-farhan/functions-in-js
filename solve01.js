//Uncomment With Caution ;)

//Calculate Remainder With Modulus Operator
function reminder(a, b) {
  return a % b;
}
console.log(reminder(2, 2));

//Swapping Without Fourth Variable
/*
function SwapWithoutFourth(a, b, c) {
  console.log(`Before -> a:${1}, b:${b}, c:${c}`);
  a = a + b + c; //This should be assign in last(here a)
  b = a - b - c;
  c = a - b - c;
  a = a - b - c; //This should be assign in last(here a)
  return `After  -> a:${a}, b:${b}, c:${c}`;
}
console.log(SwapWithoutFourth(1, 2, 3));
*/

//Swapping Using Fourth Variable
/*
function SwapThird(a, b, c) {
  let temp = a; //temp=1
  a = b; //a=3
  b = c; //c=2
  c = temp; //b=1
  return `a: ${a}, b: ${b}, c:${c}`;
}
console.log(SwapThird(1, 2, 3));
*/

/*
 * Convert Centigrade to Fahrenhiet
//Fact -40 C == -40 F
  function Celcius(fahr) {
  let tempCelcius = ((fahr - 32) * 5) / 9;
  return tempCelcius;
}
console.log(Celcius(-40));
*/

//Total Time in seconds
/*
function time(hr, min, sec) {
  let total = hr * 3600 + min * 60 + sec;
  return total;
}
console.log(`${time(1, 1, 0)} secs`);
*/

//Area of circle
/*
function area(radius) {
  const PI = 3.14;
  return PI * radius ** 2;
}
console.log(area(2));
*/

//Average Of Numbers
/*
function avg(a, b, c, n) {
  return (a + b + c) / n;
}
console.log(avg(1, 1, 3, 2));
*/
/*Input Two Numbers and Print their Sum
function sum(x, y) {
  return x + y;
}
console.log(sum(10, 10));
*/
//Swapping Numbers
/*var a = 12;
var b = 11;
var c = 15;
var d = 14;
var e = 15;
var f = 14;
var g = 11;
var h = 42;
var i = 40;
var j = 40;
var k = 20;

//Swap k and f(Using Third Variable)
var temp;
console.log("Value of k before :" + k + "  Value of f before: " + f);
temp = k;
k = f;
f = temp;
console.log(" ");
console.log("Value of k after: " + k + "  Value of f after: " + f);

//Swap Without using Third (var temp)
k = 10;
f = 15;
k = k + f;
f = k - f;
k = k - f;
console.log("Value of k after: " + k + "  Value of f after: " + f);
*/
