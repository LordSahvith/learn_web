var myArray = [500, 500, 500, 500, 500];

var total = 0;

for (var i = 0; i < myArray.length; i++) {
  // add the current element to the total	
  total = total + myArray[i];
}

// after we're done with the loop
printValue("The total is: " + total);

var items = ["apple", "orange", "peach", "banana"];

for (i = 0; i < items.length; i++) {
  printValue(items[i]);
}

items.sort();

items.forEach(function (item) {
  printValue(item);
});

function printValue(value) {
  console.log(value);
}
