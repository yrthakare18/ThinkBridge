// Change Header
const header = document.getElementById('header');
const changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', () => {
  header.textContent = "Header Updated Successfully!";
  header.style.color = "#e91e63";
});

// Add Dynamic Paragraph
const addParaBtn = document.getElementById('addParaBtn');

addParaBtn.addEventListener('click', () => {
  const para = document.createElement('p');
  para.textContent = "This paragraph was dynamically added!";
  para.style.transition = "transform 0.3s ease";
  para.style.transform = "scale(0)";
  document.querySelector('section:nth-of-type(2)').appendChild(para);

  setTimeout(() => {
    para.style.transform = "scale(1)";
  }, 10);
});

// Input Event Demo
const nameInput = document.getElementById('nameInput');
const inputOutput = document.getElementById('inputOutput');

nameInput.addEventListener('input', (e) => {
  inputOutput.textContent = `You typed: ${e.target.value}`;
});

// JavaScript Object Example
const student = {
  name: "Yash",
  age: 22,
  courses: ["HTML", "CSS", "JavaScript"],
  greet: function() {
    return `Hello, I am ${this.name} and I study ${this.courses.join(", ")}.`;
  }
};

// Display object in console
console.log(student);
console.log(student.greet());

// Display object info on page
const jsObjectSection = document.getElementById('jsObjectSection');
const objPara = document.createElement('p');
objPara.textContent = student.greet();
jsObjectSection.appendChild(objPara);
