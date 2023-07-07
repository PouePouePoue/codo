const a = 5;
const b = 7;
console.log(a+b,a*b);

const first = 'John';
const second = 'Smith';
const totalLength = first.length + second.length;
console.log(totalLength);

const num = prompt('Enter the number: ');
const digit3 = num % 10;
const digit1 = (num - num % 100)/100;
const digit2 = (num - digit1 * 100 - digit3)/10;
console.log(digit1 + digit2 + digit3);