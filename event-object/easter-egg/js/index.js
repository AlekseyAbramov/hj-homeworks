const nav = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];
const secretWord = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];

function showNav(event) {
    if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
        nav.classList.toggle('visible');
    }
}
document.addEventListener('keydown', showNav);

let i = 0;
function netology(event) {
    if (event.ctrlKey || event.altKey) {
        return;
    }
    if (event.code === secretWord[i]) {
      i++;
    } else {
      i = 0;
      return;
    }
    if (i === secretWord.length) {
        secret.classList.add('visible');
    }
}
document.addEventListener('keydown', netology);
