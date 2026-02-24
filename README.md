1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans. getElementById returns single element and selector type is ID only and typical use case is fast lookup by unique ID. getElementById returns HTML collection and selector type is Class name and typical use case is fast lookup by multiple elements by class. getElementById returns First element and selector type is CSS selector and typical use case is fast lookup by flexible single match. getElementById returns NodeList and selector type is CSS selector and typical use case is fast lookup by multiple flexible matches.

2. How do you create and insert a new element into the DOM?
Ans. I use document.createElement() to make a new element node. Then i added style or content to this new element. After customize the element I insert the element into the DOM using appendChild or other inserting method.

3. What is Event Bubbling? And how does it work?
Ans.Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. There are basically three types of phase capture phase , target phase and bubbling phase. When bubbling event happened it reversely reach in main window of DOM by touching all element from target element.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans.Event Delegation is a JavaScript technique where a single event listener is attached to a parent element to handle events for its child elements using event bubbling, making the code more efficient and dynamic.. Event Delegation is a useful pattern that allows you to write cleaner code, and create fewer event listeners with similar logic.
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans. event.preventDefault() stops the browser's default action for an event, while event.stopPropagation() stops the event from moving further up or down the DOM hierarchy.
