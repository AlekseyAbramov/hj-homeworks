'use strict';

const  connect = new WebSocket('wss://neto-api.herokuapp.com/mouse');

connect.addEventListener('open', () => {
  showBubbles(connect);
})

document.addEventListener('click', (event) => {
  connect.send(JSON.stringify({
    x: event.pageX,
    y: event.pageY
  }));
})
