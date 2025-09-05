// Change header on button click
const header = document.getElementById("header");
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
  header.textContent = "DOM Updated Successfully!";
  header.style.color = "green";
});

// Add new paragraph dynamically
const addParaBtn = document.getElementById("addParaBtn");
addParaBtn.addEventListener("click", () => {
  const para = document.createElement("p");
  para.textContent = "This paragraph was added dynamically!";
  document.body.appendChild(para);
});

// Input event demo
const nameInput = document.getElementById("nameInput");
const inputOutput = document.getElementById("inputOutput");
nameInput.addEventListener("input", () => {
  inputOutput.textContent = "You typed: " + nameInput.value;
});
