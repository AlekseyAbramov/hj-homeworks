const contentForm = document.querySelector('.contentform ');
const inputsForm = contentForm.querySelectorAll('input, textarea');
const sendButton = contentForm.querySelector('.button-contact[type="submit"]');
const outputForm = document.querySelector('#output');
const editButton = outputForm.querySelector('.button-contact');
const outputs = outputForm.querySelectorAll('output');

for (let input of inputsForm) {
  input.addEventListener('input', inputTest);
  if (input.name == 'zip') {
    input.addEventListener('keypress', setZip);
  }
}

sendButton.addEventListener('click', clickButton);
editButton.addEventListener('click', toggleForms);

function inputTest() {
  inputsForm.forEach(el => {
    sendButton.disabled = true;
    let i = 0;
    inputsForm.forEach(el => {
      if (el.value !== '') {
        i++;
      }
    })
    if (i === inputsForm.length) {
      sendButton.disabled = false;
    }
  })
}

function setZip(e) {
  if (e.ctrlKey || e.altKey || e.metaKey) return;

  let chr = getChar(e);

  if (chr == null) return;

  if (chr < '0' || chr > '9') {
    e.preventDefault();
  }
}

function getChar(event) {
  if (event.which != 0 && event.charCode != 0) {
    if (event.which < 32) return null;
    return String.fromCharCode(event.which);
  }

  return null;
}

function clickButton(event) {
  event.preventDefault();
  toggleForms();
  for (let output of outputs) {
		output.value = contentForm.querySelector(`[name = ${output.id}]`).value;
  }
}

function toggleForms() {
  contentForm.classList.toggle('hidden');
  outputForm.classList.toggle('hidden');
}