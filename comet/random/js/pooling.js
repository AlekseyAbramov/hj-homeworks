'use strict';

const pooling = document.querySelectorAll('.pooling div');

setInterval(() => {
  fetch('https://neto-api.herokuapp.com/comet/pooling')
    .then(res => res.json())
    .then(num => updateCard(pooling, num));
}, 5000);