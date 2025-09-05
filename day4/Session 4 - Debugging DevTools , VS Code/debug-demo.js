function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

function calculate() {
  let x = 5;
  let y = 10;

  let sum = add(x, y);          // Breakpoint here
  let product = multiply(x, y); // Breakpoint here

  console.log(`Sum: ${sum}, Product: ${product}`);
}

calculate();
