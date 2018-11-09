const form = document.querySelector('form');
const inputsForm = form.querySelectorAll('input, textarea');
const buttons = document.querySelectorAll('button');

for (let input of inputsForm) {
  input.addEventListener('input', inputTest)
}

function inputTest() {
  for (let input of inputsForm) {
    buttons.forEach(elem => {
      if (elem.type === 'submit') {
        elem.disabled = true;
      }
    })
    if (input.value != '') {
      buttons.forEach(elem => {
        if (elem.type === 'submit') {
          elem.disabled = false;
        }
      })
    }
  }
}
