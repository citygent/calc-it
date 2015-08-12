var op = prompt('Choose an operation. This calculator can do\n(A)ddition +, (S)ubtraction -, (M)ultiplication *, (D)ivision /, (P)ower ^, or s(Q)uareroute \u221A').toUpperCase(); 
  console.log('op', op);
  var num1 = prompt('Choose your first number');
  console.log('num1', num1);
if (op != 'Q') {
  var num2 = prompt('Your second number is?')
  console.log('num2', num2);
}
var goodNum1 = parseFloat(num1);
  console.log('gdnm1', goodNum1);
var goodNum2 = parseFloat(num2);
  console.log('gdnm2', goodNum2);


if (op === 'A' || op === '+') {
  var answer = (goodNum1 + goodNum2);
}
else if (op === 'S' || op === '-') {
  var answer = (goodNum1 - goodNum2);
}
else if (op === 'M' || op === '*') {
  var answer = (goodNum1 * goodNum2);
}
else if (op === 'D' || op === '/') {
  var answer = (goodNum1 / goodNum2);
}
else if (op === 'P' || op === '^') {
  var answer = Math.pow(goodNum1, goodNum2);
}
else if (op === 'Q') {
  var answer = Math.sqrt(goodNum1);
}

// if (isNaN(goodNum1) === true) {
//   alert('You have to pick a number for this to work. Try again');
// }
// else {
// }

// //Below not great symantically?
// while (op === 'A') {
//   var answer = (goodNum1 + goodNum2)
//   break;
// }
// while (op === 'S') {
//   var answer = (goodNum1 - goodNum2)
//   break;
// }
// while (op === 'M') {
//   var answer = (goodNum1 * goodNum2)
//   break;
// }
// while (op === 'D') {
//   var answer = (goodNum1 / goodNum2)
//   break;
// }
alert('The answer is ' + answer);
// var again = prompt('Would you like to perform another calculation? Y/N')
// if (again = 'Y') {
//   Location.reload(true);
// }
// else {

// }
