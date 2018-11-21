'use strict';
let counter = document.querySelector('.counter');
let errors = document.querySelector('.errors');
const connect = new WebSocket('wss://neto-api.herokuapp.com/counter');

connect.addEventListener('message', (event) => {
  let message = JSON.parse(event.data);
  console.log(message);
  counter.innerText = message.connections;
  errors.innerText = message.errors;
})

window.addEventListener('beforeunload', () => {
  connection.onclose = function () {};
  connection.close(1000);
})
