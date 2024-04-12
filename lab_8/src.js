"use strict";

// John Paul larkin - C00001754 - 12/4/2024 - lab 8

// Declare a variable to track the dark mode state
let darkMode;

// Grab references to various DOM elements that the script will interact with
const body = document.getElementById("body");
const button = document.getElementById("button");
const input = document.getElementById("input");
const markDisplay = document.getElementById("mark-display");

// Add an event listener that calls the start function when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", start);

function start() {
  // Retrieve the dark mode setting from local storage
  darkMode = localStorage.getItem("mode");
  // Convert the retrieved string value to a boolean
  darkMode = darkMode === "true" ? true : false;
  // Apply the dark or light mode based on the retrieved setting
  darkMode === true ? setDark() : setLight();
}

function changeMode() {
  // Invert the darkMode boolean using the logical NOT operator
  darkMode = !darkMode;
  // Apply the dark or light mode based on the new setting
  darkMode ? setDark() : setLight();
}

function setDark() {
  // Set dark color themes for the body and button
  body.style.backgroundColor = "black";
  body.style.color = "white";
  button.style.backgroundColor = "white";
  button.style.color = "black";
  button.innerText = "Light Mode";
  // Update local storage
  localStorage.setItem("mode", "true");
}

function setLight() {
  // Set light color themes for the body and button
  body.style.backgroundColor = "white";
  body.style.color = "black";
  button.style.backgroundColor = "black";
  button.style.color = "white";
  button.innerText = "Dark Mode";
  // Update local storage
  localStorage.setItem("mode", "false");
}

function getMark() {
  // Retrieve the mark from the input field
  const mark = input.value;
  // Variable to store the grade
  let grade;
  // Determine the grade based on the mark using conditional statements
  if (mark >= 70 && mark <= 100) {
    grade = "Distinction";
  } else if (mark >= 63 && mark <= 69) {
    grade = "Merit1";
  } else if (mark >= 55 && mark <= 62) {
    grade = "Merit2";
  } else if (mark >= 40 && mark <= 54) {
    grade = "Pass";
  } else if (mark >= 0 && mark <= 39) {
    grade = "Fail";
  } else {
    // If mark is out of range, fall back to an empty string
    grade = "";
  }
  // Update the grade on screen
  markDisplay.innerText = grade;
}
