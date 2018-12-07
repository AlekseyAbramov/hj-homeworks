'use strict';

const inputText = document.querySelector('.textarea');
const block = document.querySelector('.block');
const message = document.querySelector('.message');

function debounce(callback,delay) {
    let timeout;
    return () => {
        clearTimeout(timeout);
        message.classList.remove('view');
        block.classList.add('active');
        timeout = setTimeout(function() {
            timeout = null;
            callback();
        }, delay)
    };
}

function chengeClass() {
    block.classList.toggle('active');
    message.classList.toggle('view');
}

inputText.addEventListener('focus', () => block.classList.add('active'));
inputText.addEventListener('blur', () => {
    block.classList.remove('active');
    message.classList.remove('view');
});
inputText.addEventListener('keydown', debounce(chengeClass, 2000));