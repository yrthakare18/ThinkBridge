# 📘 Session 3 – Functions, Scope & Objects  

## 🔹 Functions  

Functions are blocks of reusable code that perform a specific task.  

### Function Declaration  
```js
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Yash")); // Hello, Yash
```

### Function Expression  
```js
const square = function(num) {
  return num * num;
};
console.log(square(5)); // 25
```

### Arrow Function  
```js
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7
```

---

## 🔹 Scope  

Scope defines where variables are accessible.  

- **Global Scope** → Available everywhere.  
- **Function Scope** → Available only inside a function.  
- **Block Scope (`let`, `const`)** → Available only inside `{ }`.  

```js
var x = 10; // global
function test() {
  let y = 20; // function scope
  if (true) {
    const z = 30; // block scope
    console.log(z); // 30
  }
  // console.log(z); ❌ Error: z not defined
}
test();
```

---

## 🔹 Objects  

Objects are collections of **key-value pairs**.  
They can hold both **data (properties)** and **functions (methods)**.  

```js
const person = {
  name: "Yash",
  age: 22,
  greet: function() {
    return "Hi, I’m " + this.name;
  }
};

console.log(person.name);   // Yash
console.log(person.greet()); // Hi, I’m Yash
```

### Iterating Over Object Properties  
```js
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

---

## 📂 Deliverables  

- `src/js/functions.js` → Examples of functions (declaration, expression, arrow).  
- `src/js/objects.js` → Examples of objects and property iteration.  

---
