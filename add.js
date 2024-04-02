function hello(name) {
  console.log("Hello " + name);
}
var firstName = "bob";
hello(firstName);
hello(firstName + " marley");
function concat(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw "parameters must be numbers";
  }
  return a + b;
}
try {
  console.log(concat("4", "2"));
} catch (e) {
  console.log("Error occured : " + e);
}
var wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);
