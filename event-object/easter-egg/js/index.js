const nav = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];
const secretWord = 'KeyYKeyTKeyNKeyJKeyKKeyJKeyUKeyBKeyZ';

function showNav(event) {
    if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
        nav.classList.toggle('visible');
    }
}
document.addEventListener('keydown', showNav);

let word = '';
function netology(event) {
    if (event.ctrlKey || event.altKey) {
        return;
    }
    word = word + event.code;
    if (word === secretWord) {
        secret.classList.add('visible');
    }
    if (word.length === secretWord.length) {
        word ='';
    }
}
document.addEventListener('keydown', netology);