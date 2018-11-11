function addTwoNumbers(a, b) {
  var result = a + b;
  printValue(result);
}

function getNumber(a, b) {
  return a + b;
}

function printValue(a) {
  console.log(a);
}

var a = 5;
var b = 10;

addTwoNumbers(a * 3, b + 4 - a);

var x = getNumber(a, b);
printValue(x);