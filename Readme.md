
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?



Answer to the Question:

1️⃣ Difference between getElementById, getElementsByClassName, querySelector & querySelectorAll

Answer:

These are used to select elements from the DOM.

getElementById → selects one element by id.

getElementsByClassName → selects multiple elements by class.

querySelector → selects the first matching element using CSS selector.

querySelectorAll → selects all matching elements using CSS selector.

2️⃣ How do you create and insert a new element?

Answer:

First, I create the element using createElement().

Then I add content or class.

Finally, I insert it into the DOM using appendChild().

So the process is:
Create → Add content → Insert.

3️⃣ What is Event Bubbling?

Answer:

Event Bubbling is when an event starts from the target element and moves upward to its parent elements.

For example, if I click a button inside a div, first the button event runs, then the div event runs.

4️⃣ What is Event Delegation? Why useful?

Answer:

Event Delegation means adding one event listener to a parent instead of many child elements.

It works because of event bubbling.

It is useful because:

It improves performance

It reduces code

It works for dynamic elements

5️⃣ Difference between preventDefault() and stopPropagation()

Answer:

preventDefault() stops the browser’s default action.

stopPropagation() stops the event from bubbling to parent elements.