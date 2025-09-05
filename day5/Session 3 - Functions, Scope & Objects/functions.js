function greet(name) {
  return "Hello, " + name;
}

const square = function(num) {
  return num * num;
};

const add = (a, b) => a + b;

// Interactive functions
function showGreeting() {
  const name = document.getElementById("nameInput").value || "Guest";
  document.getElementById("greetingOutput").textContent = greet(name);
}

function showSquare() {
  document.getElementById("squareOutput").textContent = "Square of 5: " + square(5);
}

function showAddition() {
  document.getElementById("addOutput").textContent = "7 + 3 = " + add(7, 3);
}
