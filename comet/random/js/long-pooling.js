'use strict';

const longPooling = document.querySelectorAll('.long-pooling div');
let inProcess = false;

setInterval(() => {
  if (inProcess) {
    return;
  }
  inProcess = true;
  fetch('https://neto-api.herokuapp.com/comet/long-pooling')
    .then(res => res.json())
    .then(num => {
      updateCard(longPooling, num);
      inProcess = false;
    });
}, 5000);