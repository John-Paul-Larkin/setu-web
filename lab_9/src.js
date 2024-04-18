"use strict";

// John Paul larkin - C00001754 - 18/4/2024 - lab 9

function divide() {
  let one = document.getElementById("numberOne").value;
  let two = document.getElementById("numberTwo").value;
  // Define result variable to hold string to be assigned to html
  let result = "";

  if (!isValidNumber(one) || !isValidNumber(two)) {
    // if either number is not valid
    result = "Please enter valid numbers";
  } else if (two == 0) {
    // two(input) is a string, implicit type conversion will test if the number entered is zero
    result = "Cannot divide by zero";
  } else {
    const sum = one / two;
    result = sum;
  }
  document.getElementById("result").innerHTML = result;
}

function multiply() {
  const one = document.getElementById("numberOne").value;
  const two = document.getElementById("numberTwo").value;
  let result = "";
  // Validation similar to above
  if (!isValidNumber(one) || !isValidNumber(two)) {
    result = "Please enter valid numbers";
  } else {
    const product = one * two;
    result = product;
  }
  document.getElementById("result").innerHTML = result;
}

function changeOperation() {
  // I was not entirely sure if this was what you were looking for here??
  // Attempting to access a Null element will result in an uncaught type error
  // Wrap the attempt in a try block and assign the error message to html

  try {
    const operation = document.getElementById("operationType").value;
  } catch (error) {
    document.getElementById("errors").innerHTML = error.message;
  }
}

function isValidNumber(input) {
  // Trim whitespace from beginning and end of the input
  input = input.trim();

  // if the input string is empty the number is not valid
  if (input.length === 0) {
    return false;
  }

  // loop through each char in the string
  for (let char of input) {
    // Get the ascii  value of the current char
    let current = char.charCodeAt(0);

    // return false if the ASCII code is NOT within the range of 0 to 9 (ascii 48 to 57)
    // and it is not a minus (ascii 45)
    // and it is not a dot (ascii 46)
    // otherwise negative numbers/floats would throw an error
    if ((current < 48 || current > 57) && current != 45 && current != 46) {
      return false;
    }
  }
  // if we get to this point every char is valid, so return true
  return true;
}

function handleImageError() {
  // This function is invoked when the onerror event is triggered on the image
  // AKA every time in this example as there is not image to load

  document.getElementById("errors").innerHTML = "failed to load image";
}
