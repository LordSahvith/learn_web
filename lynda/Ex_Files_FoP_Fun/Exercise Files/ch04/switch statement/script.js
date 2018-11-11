var grade = "Regular";

switch (grade) {
  case "Regular":
    console.log("It's $3.15");
    break;
  case "Premium":
    console.log("It's $3.35");
    break;
  case "Diesel":
    conosle.log("It's $3.47");
    break;
  default:
    console.log("It's none");
}

grade = "Diesel";

if (grade === "Regular") {
  console.log("It's $3.15");
}
if (grade === "Premium") {
  console.log("It's $3.35");
}
if (grade === "Diesel") {
  console.log("It's $3.47");
}
