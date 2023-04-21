// The if and else statement && switch statements 
/* Generally, if else is better suited if there is a binary
choice in the condition.
For example, in plain English: if it's sunny, wear sunglasses. Otherwise, don't 

NB: A binary decision is a choice between two alternatives, for instance between taking some specific action or not taking it.

*/

var age = 10;

if (age >= 65) {

   console.log('You get your income from your pension')

} else if (age < 65 && age >= 18) {

   console.log('Each month you get a salary')

} else if (age < 18) {

   console.log('You get an allowance')

} else {

   //this block will run if none of the condition is met

   console.log('The value of the age variable is not numerical')

}


// Using switch statement

var day = `Sunday`;

switch(day) {
   case 'Monday':
       console.log('Read a book');

       break;

   case 'Tuesday':
       console.log('Watch a movie');

       break;

   case 'Wednesday':
       console.log('Read a book');

       break;

   case 'Thursday':
       console.log('Play basketball');

       break;

   case 'Friday':
       console.log('Socialize');

       break;

   case 'Saturday':
       console.log('Chill');

       break;

   case 'Sunday':
       console.log('Have barbecue');

       break;

   default:
       //this block will run if none of condition is met

       console.log('There is no such day');

}
