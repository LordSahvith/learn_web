var list = 5;

while (list > 0) {
  console.log(list);
  list--;
}

while (list < 5) {
  console.log(list);
  list++;
}

var items = ["apple", "orange", "peach", "banana"];

for (i = 0; i < items.length; i++) {
  printValue(items[i]);
}

items.forEach(function(item) {
  printValue(item);
});

var test = 6;
do {
  printValue(test);
  test++;
} while (test <= 10);

function printValue(value) {
  console.log(value);
}