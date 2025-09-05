## DOM and Events Notes

# 1. DOM Selection
```js
getElementById("id") → Selects a single element with the given id.
getElementsByClassName("class") → Returns all elements with that class (HTMLCollection).
getElementsByTagName("tag") → Returns all elements with that tag (HTMLCollection).
querySelector("selector") → Returns the first matching element (CSS selector).
querySelectorAll("selector") → Returns all matching elements (NodeList).
```
# 2. Events and Event Listeners
```js
Mouse Events → click, dblclick, mouseover, mouseout
Keyboard Events → keydown, keyup
Form Events → submit, input, change
element.addEventListener("event", function() {
  // code to run
});
```
# 3. Updating the DOM
```js
Change text → element.textContent, element.innerHTML
Change styles → element.style.property = value
Classes →
classList.add("className")
classList.remove("className")
classList.toggle("className")
```
# 4. Example Snippets
```js
// Select element
const heading = document.querySelector("h1");

// Change text
heading.textContent = "Hello DOM!";

// Add event
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
  heading.classList.toggle("highlight");
});

