// sample-dom.js — small interactive demo
document.addEventListener('DOMContentLoaded', () => {
  // selectors
  const title = document.getElementById('title');
  const desc = document.getElementById('desc');
  const nameInput = document.getElementById('nameInput');
  const greetBtn = document.getElementById('greetBtn');

  const todoForm = document.getElementById('todoForm');
  const todoInput = document.getElementById('todoInput');
  const charCount = document.getElementById('charCount');
  const todoList = document.getElementById('todoList');

  const themeToggle = document.getElementById('themeToggle');

  // Greet button
  greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim() || 'Guest';
    desc.innerText = `Hello, ${name}! Welcome to DOM practice.`;
    desc.classList.toggle('highlight');
  });

  // Live char counter for todo input
  todoInput.addEventListener('input', () => {
    charCount.innerText = todoInput.value.length;
  });

  // Add todo (form submit)
  todoForm.addEventListener('submit', e => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.textContent = text;
    li.tabIndex = 0;

    const remove = document.createElement('button');
    remove.textContent = '✖';
    remove.setAttribute('aria-label', 'remove todo');
    remove.style.marginLeft = '8px';

    li.appendChild(remove);
    todoList.appendChild(li);

    todoInput.value = '';
    charCount.innerText = 0;
  });

  // Event delegation for todo list
  todoList.addEventListener('click', e => {
    const target = e.target;
    if (target.tagName === 'BUTTON') {
      const li = target.closest('li');
      if (li) li.remove();
      return;
    }
    const li = target.tagName === 'LI' ? target : target.closest('li');
    if (li) li.classList.toggle('completed');
  });

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});
