const todoList = document.querySelector('.todo-list');
const done = todoList.querySelector('.done');
const undone = todoList.querySelector('.undone');
const checks = todoList.getElementsByTagName('input');

for (let check of checks) {
  check.addEventListener('input', (event) => {
    if (event.target.parentElement.parentElement.classList.contains('done')) {
      undone.appendChild(event.target.parentElement);
    } else {
      done.appendChild(event.target.parentElement);
    }
  });
}
