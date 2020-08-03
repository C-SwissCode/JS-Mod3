/***********************
 * Hoisting
 */


// functions
calcAge(1961);

function calcAge(year) {
  console.log(2020 - year);
}

calcAge(1989);


//retirement(1961);
var retirement = function (year) {
  console.log(65 - (2020 - year));
}

retirement(1989);

// variables

console.log(age);
var age = 31;
console.log(age);

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}

foo();
console.log(age);