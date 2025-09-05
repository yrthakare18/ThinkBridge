# JavaScript Basics

## Variables
```js
let name = "Yash";
const age = 22;
var isStudent = true;
console.log(name, age, isStudent);

```
# String
```js
let str = "JavaScript";
console.log(str.length);
console.log(str.toUpperCase());
console.log(`Hello, ${str}!`);
```

## Arrays
```js
let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.pop();
console.log(arr[2]);
```
# Loops
```js

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}


```
# Conditionals
```js
let marks = 85;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
```