const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2025,
  start: function() {
    return this.brand + " " + this.model + " is starting...";
  }
};

function showCar() {
  let output = `
    <p><b>Brand:</b> ${car.brand}</p>
    <p><b>Model:</b> ${car.model}</p>
    <p><b>Year:</b> ${car.year}</p>
    <p><b>Status:</b> ${car.start()}</p>
  `;
  document.getElementById("carOutput").innerHTML = output;
}
