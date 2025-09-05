# Session 4 – DOM & Events Notes

## DOM (Document Object Model)
- Represents HTML elements as a tree of objects.
- Can manipulate elements using JS.

### Selection Methods
- getElementById("id")
- getElementsByClassName("class")
- getElementsByTagName("tag")
- querySelector("selector")
- querySelectorAll("selector")

## DOM Manipulation
- Change text: element.textContent
- Change HTML: element.innerHTML
- Change style: element.style.property

## Events
- Actions by the user or browser (click, input, keydown, etc.)
- addEventListener(event, function) is preferred
- Common events: click, input, mouseover, keydown, keyup

## Creating Elements
- document.createElement("tag")
- element.textContent = "text"
- parent.appendChild(element)
- element.remove()

## Traversing DOM
- parentNode, children, nextElementSibling, previousElementSibling
