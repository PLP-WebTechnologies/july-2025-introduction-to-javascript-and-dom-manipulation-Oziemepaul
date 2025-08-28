// ===================================
// Part 1: Variable Declarations and Conditionals
// ===================================
// Declare a variable.
let userLoggedIn = true;
let statusMessage = "";

// Use a conditional to check the variable's value.
if (userLoggedIn) {
    statusMessage = "You are logged in.";
} else {
    statusMessage = "Please log in to continue.";
}

// Display the result on the webpage (also a DOM interaction).
document.getElementById('part1-status').textContent = statusMessage;
console.log(statusMessage);


// ===================================
// Part 2: Two Custom Functions
// ===================================

// Function 1: A simple function to add two numbers.
function addNumbers(a, b) {
    return a + b;
}

// Function 2: A function that returns a greeting.
function getGreeting(name) {
    console.log("Generating greeting for", name);
}

// Call the functions and display their results.
let sum = addNumbers(5, 7);
let greeting = getGreeting("Alex");

document.getElementById('part2-function-output').textContent = `The sum is: ${sum}. ${greeting}`;


// ===================================
// Part 3: At least 2 Loop Examples
// ===================================

// Get the list element from the HTML.
const loopList = document.getElementById('part3-loop-output');

// Loop 1: A for loop to add list items.
for (let i = 0; i < 3; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `For loop item ${i + 1}`;
    loopList.appendChild(listItem);
}

// Loop 2: A while loop to add more list items.
let j = 0;
while (j < 2) {
    const listItem = document.createElement('li');
    listItem.textContent = `While loop item ${j + 1}`;
    loopList.appendChild(listItem);
    j++;
}


// ===================================
// Part 4: At least 3 DOM Interactions
// ===================================

// Interaction 1: Change text content.
const textElement = document.getElementById('dom-interaction1');
textElement.textContent = "This is new text!";

// Interaction 2: Change CSS style.
const colorDiv = document.getElementById('dom-interaction2');
colorDiv.style.backgroundColor = "lightblue";

// Interaction 3: Use an event listener on a button click.
const button = document.getElementById('dom-button');
button.addEventListener('click', () => {
    alert('The button was clicked!');
});