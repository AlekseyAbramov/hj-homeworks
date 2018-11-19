'use strict';

if (!localStorage.result) {
    localStorage.result = 0;
}

document.getElementById('counter').innerText = localStorage.result;

document.querySelector('.wrap-btns').addEventListener('click', function(event) {
    if (event.target.id === 'increment') {
        localStorage.result++;
        document.getElementById('counter').innerText = localStorage.result;
    }
    if (event.target.id === 'decrement') {
        if (localStorage.result > 0) {
            localStorage.result--;
            document.getElementById('counter').innerText = localStorage.result;
        }
    }
    if (event.target.id === 'reset') {
        localStorage.result = 0;
        document.getElementById('counter').innerText = localStorage.result;
    }
})