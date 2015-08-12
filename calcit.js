var op = prompt('Choose an operation\nYou can perform (A)ddition, (S)ubtraction, (M)ultiplication, or (D)ivision');
  console.log('op', op);
var num1 = prompt('Choose your first number');
  console.log('num1', num1);
var num2 = prompt('Your second number is?')
  console.log('num2', num2);

var goodNum1 = parseFloat(num1);
  console.log('gdnm1', goodNum1);
var goodNum2 = parseFloat(num2);
  console.log('gdnm2', goodNum2);


// if (isNaN(goodNum1) === true) {
//   alert('You have to pick a number for this to work. Try again');
// }
// else {
// }
while (op === 'A') {
  var answer = (goodNum1 + goodNum2)
  break;
}
while (op === 'S') {
  var answer = (goodNum1 - goodNum2)
  break;
}
while
  alert('The answer is ' + answer)