var a = 5;
var b = 10;
var c = 20;
var d = a + b + c;

calculateValue(a, b, c);
printValue(d * 5);

function calculateValue(a, b, c) {
  printValue(a * b + c);
}

function printValue(a) {
  console.log("The value of a is: " + a);
}


