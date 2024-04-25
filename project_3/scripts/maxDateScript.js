/* C00001754  */
/* John Paul larkin  */
/* Project Part 3 20%  */

// This script gets todays date, formats it
// and puts it on the max attribute of the date input
// So users select a date following today

// Get todays date
var todaysDate = new Date();
var dd = String(todaysDate.getDate()).padStart(2, "0");
var mm = String(todaysDate.getMonth() + 1).padStart(2, "0"); // January is 0!
var yyyy = todaysDate.getFullYear();

todaysDate = yyyy + "-" + mm + "-" + dd;

// Set the max attribute of the date input to todays date
document.getElementById("last_eat").setAttribute("max", todaysDate);
