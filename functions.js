/*My first function
* Create a function named "myFirstFunction" that has no parameters
* This function should print "Hello World" when invoked
*/
function myFirstFunction() {
  console.log('Hello World');
}

myFirstFunction();

/*ADD TWO NUMBERS
* Create a function named "sum" that has two parameters (a,b)
* This function should add the two numbers and print
  "The sum is" + sum when invoked
*/
function sum(a,b) {
  console.log('The sum is ' + (a+b));
}

sum(5,5);

/*AGE CALCULATOR
* Create a function named 'ageCalc' that takes in two parameters (currentYear, birthYear)
* Create a variable named 'age', this variable will do the calculations
* This function should calculate a persons age when and print
  "You are " + age "years old" when invoked
*/
function ageCalc(currentYear, birthYear) {
  var age = currentYear - birthYear;
  console.log('You are ' + age + ' years old');
}

ageCalc(2017, 1988);

/*DRAW A FACE
* Create a function named "draw" that has one parameter (howMany)
* This function should print the face @(^_^)@ the specified # of times when invoked
* You will need to use a for-loop inside your function
* Create your own character if you want
*/
function draw(howMany) {
  for (var i = 0; i < howMany; i++) {
    console.log('@(^_^)@');
  }
}

draw(5);


