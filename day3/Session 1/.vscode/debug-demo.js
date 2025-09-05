// debug-demo.js — simple test for breakpoints
function multiply(a, b) {
  const res = a * b; // set breakpoint here
  console.log('product =', res);
  return res;
}

const x = 7;
const y = 8;
const value = multiply(x, y);
console.log('done', value);