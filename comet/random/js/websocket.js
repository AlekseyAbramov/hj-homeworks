'use strict';

const websocket = document.querySelectorAll('.websocket div');

function updateCard(blocks, number) {
    for (let block of blocks) {
      block.classList.remove('flip-it');
    }
    blocks[number - 1].classList.add('flip-it');
  }

const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');
ws.addEventListener('message', event => {
  let data = JSON.parse(event.data);
  updateCard(websocket, data)
});