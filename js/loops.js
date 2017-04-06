/*YOUR FIRST LOOP
* Create an array named "numArray", assign it the values of 1,2,3,4,5,6,7,8,9,10
* Create a basic for-loop that will loop through the array and print each number
*/
var numArray = [1,2,3,4,5,6,7,8,9,10];

for (var i = 0; i < numArray.length; i++) {
  console.log(numArray[i]);
}

/*SAY HELLO
* Create a variable named "hello", assign it a value of 10
* Create a for-loop that will print "Hello" 10 times
*/
var hello = 10;

for (var i = 0; i < hello; i++) {
  console.log('Hello');
}

/*DOUBLE A NUMBER
* Create an array named "doubled", assign it the values of [2,4,6,8,10]
* Use a for-loop to double each number in the array and print each out each new value
*/
var doubled = [2,4,6,8,10];

for (var i = 0; i < doubled.length; i++) {
  console.log(doubled[i] * 2);
}

/*FIND THE AVERAGE SCORE [average = total / # of scores]
* Create an array named "scores", assign it the values of [80,55,70,95,82]
* Create an array named "averageScore", assign it a value of 0
* Use a for-loop to compute an average test score based on the array values
* Print with message 'The average score is' + averageScore
*/
var scores = [80,55,70,95,82];
var averageScore = 0;

for (var i = 0; i < scores.length; i++) {
  averageScore += scores[i] / scores.length;
}

console.log('The average score is ' + averageScore);

/*EVEN OR ODD[Look up %]
* Create a variable named "num", assign it a value of 10
* Use a for-loop and conditionals that will check whether the number is even or odd and
  print "The number" + number + "is even/odd"
*/
var num = 10;

for (var i = 0; i < num; i++) {
  if(i === 0) {
    console.log('The number ' + i + ' is even');
  } else if(i % 2 === 0) {
    console.log('The number ' + i + ' is even');
  } else {
    console.log('The number ' + i + ' is odd');
  }
}