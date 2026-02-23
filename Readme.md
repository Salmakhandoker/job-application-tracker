
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?



Answer to the Question:


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

These are all methods used to select elements from the HTML document (DOM).

🔹 getElementById()

It selects an element using its id.

An id should be unique, so this method returns only one element.

If no element is found, it returns null.

Example:

const box = document.getElementById("myBox");

This will select the element with id="myBox".

🔹 getElementsByClassName()

It selects elements using a class name.

Many elements can share the same class.

It returns a collection of elements (HTMLCollection).

You may need to use a loop to access each element.

Example:

let cards = document.getElementsByClassName("card");

This will select all elements with class="card".

🔹 querySelector()

It selects the first element that matches a CSS selector.

It is more flexible because you can use id, class, tag, or even complex selectors.

Example:

let item = document.querySelector(".card");

This selects the first element with class card.

🔹 querySelectorAll()

It selects all elements that match a CSS selector.

It returns a NodeList.

Example:

var items = document.querySelectorAll(".card");

This selects all elements with class card.

✅ Simple Comparison:

getElementById → one element by id

getElementsByClassName → multiple elements by class

querySelector → first match using CSS selector

querySelectorAll → all matches using CSS selector



2. How do you create and insert a new element into the DOM?

Answer:

To add a new element to a webpage using JavaScript, i usually follow three steps:

Step 1: Create the element
let newDiv = document.createElement("div");

This creates a new div element in memory (but it is not visible yet).

Step 2: Add content or attributes
newDiv.innerText = "Hello World";

Now the div has text inside it.

i can also add classes or ids:

newDiv.className = "box";
Step 3: Insert it into the webpage
document.body.appendChild(newDiv);

Now the div appears on the page.

So the process is:
Create → Add content → Insert into DOM


3. What is Event Bubbling? And how does it work?

Answer:

Event Bubbling is a process where an event starts from the element that was clicked (or triggered) and then moves upward to its parent elements.

Example:

If a button is inside a div:

<div>
  <button>Click Me</button>
</div>

If both the button and the div have click events:

First, the button's click event runs.

Then, the event moves up and the div's click event runs.

This upward movement is called Event Bubbling.

It happens automatically in JavaScript unless we stop it.




4. What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event Delegation means adding one event listener to a parent element instead of adding many event listeners to each child element.

It works because of Event Bubbling.

Example:

Instead of adding click events to 10 buttons:

button1.addEventListener(...)
button2.addEventListener(...)

we can add one event listener to the parent:

parentDiv.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
});
Why is it useful?

It improves performance.

It reduces code repetition.

It works for dynamically added elements.

It keeps the code clean and organized.




5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:

These two methods control how events behave.

🔹 preventDefault()

It stops the default behavior of an element.

Example:

Prevent a form  submitting.

Prevent a link from opening another page.

event.preventDefault();

If i use this inside a form submit event, the page will not reload.

🔹 stopPropagation()

It stops the event from moving up to parent elements.

event.stopPropagation();

If i use this in a button click event, the parent div will not receive the click event.

✅ Main Difference:

preventDefault() → stops the browser’s default action.

stopPropagation() → stops the event from bubbling up.
