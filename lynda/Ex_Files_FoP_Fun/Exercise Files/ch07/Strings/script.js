var foo = "55";
checkIfNumber(foo);

foo = "joker";
checkIfNumber(foo);

foo = "2two";
checkIfNumber(foo);

function printValue(value, originalValue) {
  if (isNaN(value)) {
    console.log("\"" + originalValue + '"' + " is not a number");
  } else {
    console.log(value);
  }
}

function convertToNumber(string) {
  return Number(string);
}

function checkIfNumber(value) {
  var originalValue = value;
  var myNumber = convertToNumber(value);
  
  printValue(myNumber, originalValue);
}
