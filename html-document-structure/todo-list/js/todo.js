const todoList = document.querySelector('.todo-list');
const done = todoList.querySelector('.done');
const undone = todoList.querySelector('.undone');
const checks = todoList.getElementsByTagName('input');

function goDone(event) {
  const label = event.target.parentElement;
  done.appendChild(label);
}

function goUndone(event) {
  const label = event.target.parentElement;
  undone.appendChild(label);
}

for (let check of checks) {
  check.addEventListener('input', (event) => {
    if (event.target.parentElement.parentElement.classList.contains('done')) {
      goUndone(event);
    } else {
      goDone(event);
    }
  });
}