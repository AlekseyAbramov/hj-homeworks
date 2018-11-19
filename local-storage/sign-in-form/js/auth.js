'use strict';

const formIn = document.querySelector('.sign-in-htm');
const formUp = document.querySelector('.sign-up-htm');
const outputIn = formIn.querySelector('output');
const outputUp = formUp.querySelector('output');

function getFormData(form) {
    const formData = new FormData(form);
    const data = {};
    for (const [k,v] of formData) {
        data[k] = v;
    }
    return data;
}

formIn.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = getFormData(formIn);
    fetch('https://neto-api.herokuapp.com/signin', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.error) {
            outputIn.value = data.message;
        }
        if (data.name) {
            outputIn.value = 'Пользователь ' + data.name + ' успешно авторизован';
        }
    })
})

formUp.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = getFormData(formUp);
    fetch('https://neto-api.herokuapp.com/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.error) {
            outputUp.value = data.message;
        }
        if (data.name) {
            outputUn.value = 'Пользователь ' + data.name + ' успешно зарегистрирован';
        }
    })
})

