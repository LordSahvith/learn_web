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
  console.log(items[i]);
}

items.forEach(function(item) {
  console.log(item);
});
