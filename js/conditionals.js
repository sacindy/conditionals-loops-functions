/*WHO ARE YOU?
* Create a variable called "name" assign it a value of your name
* Write a conditional statement that prints out "Hi" + name
  if truthy, otherwise prints out "goodbye"
*/
var name="Cindy";
   if (name==="Cindy");{
    console.log ("hi" )

  }

/* HIGHER VALUE
* Create a variable called "num1", assign it a value of 10
* Create a variable called 'num2', assign it a value of 5
* Write a conditional statement that compares the two values and
  prints out the higher value.
*/
var num1 = 10;
var num2 = 5;

     if (num1 > num2){
  console.log (num1);
}
else{
    console.log (num2);
  }

}
console.log compareNum()();

/* AGE CHECKER [Look up logical/comparitive operators]
* Create a variable named "age", assign it your age
* Write the following conditionals:
  * age >= 16 < 18 = print "You are old enough to drive"
  * age >= 18 < 21 = print "You are old enough to vote"
  * age >= 21 = print "You are old enough to rent a car"
  * other = print "Sorry your to young"
*/
var age =30;
  if (age>= 16 < 18);{
   else if (age >= && age < 21)
    console.log "You are old enough to drive";
  }
{
  else if (age >= 18 && < 21){
    console.log "You are old enough to vote";
      }
  else if (age >=21){
    console.log "You are old enough to rent a car";
    else {
      console.log ("Sorry you are to young");
    }



/* GRADE CHECKER [Look up logical/comparitive operators]
* Create a variable named "testScore", assign it a value between 0-100
* Write the following conditionals:
  * 50-59 = print "You got an F, try harder"
  * 60-69 = print "You got a D, not good enough"
  * 70-79 = print "You got a C, I think you can do better"
  * 80-89 = print "You got a B, Not to bad"
  * 90-100 = print "You got an A, Your a rockstar"
  * other = print "Sorry we don't have a grade for that score "
*/

var testScore = 55;

if (testScore >=50 && testScore < 60) {
  console.log ("You got an F, try harder");
} else if (testScore >=60 && testScore <70); {
  console.log ("You got a D, not good enough");
} else if (testScore >= 70 && testScore < 80); {
  console.log ("You got a C, I think you can do better");
}  else if (testScore >=80 && testScore < 90); {
    console.log ("You got an B, Not to bad");
}else if  (testScore >=90); {
  console.log ("Sorry we don't have a grade for that score");
}
