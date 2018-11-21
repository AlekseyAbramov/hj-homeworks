'use strict';

const chat = document.querySelector('.chat');
const formMessageBox = chat.querySelector('.message-box');
const messageInput = chat.querySelector('.message-input');
const submitButton = chat.querySelector('.message-submit');
const messagesContent = chat.querySelector('.messages-content');
const messagesTemplates = chat.querySelector('.messages-templates');
const chatStatus = chat.querySelector('.chat-status');
const connect = new WebSocket('wss://neto-api.herokuapp.com/chat');

connect.addEventListener('open', () => {
  chatStatus.innerText = chatStatus.dataset.online;
  submitButton.disabled = false;
  const messagesStatus = messagesContent.appendChild(messagesTemplates.children[3].cloneNode(true));
  messagesStatus.innerText = 'Пользователь появился в сети';
})

connect.addEventListener('close', () => {
  chatStatus.innerText = chatStatus.dataset.offline;
  submitButton.disabled = true;
  const messagesStatus = messagesContent.appendChild(messagesTemplates.children[3].cloneNode(true));
})

connect.addEventListener('message', (event) => {
  if (event.data === '...') {
    const messagesStatus = messagesContent.appendChild(messagesTemplates.children[3].cloneNode(true));
    messagesStatus.innerText = 'Собеседник печатает сообщение';
  } else {
    if (messagesContent.lastChild.innerText === 'Собеседник печатает сообщение') {
      messagesContent.removeChild(messagesContent.lastChild);
    }
    const messagesStatus = messagesContent.appendChild(messagesTemplates.children[1].cloneNode(true));
    messagesStatus.querySelector('.message-text').innerText = event.data;
    messagesStatus.querySelector('.timestamp').innerText = getTime();
  }
})

submitButton.addEventListener('click', sendMessage);

function getTime() {
  const data = new Date();
  let hours, minuts;
  data.getHours() < 10 ? hours = '0' + data.getHours() : hours = data.getHours();
  data.getMinutes() < 10 ? minuts = '0' + data.getMinutes() : minuts = data.getMinutes();
  return `${hours} : ${minuts}`;
}

function sendMessage(event) {
  event.preventDefault();
  connect.send(messageInput.value)
  const messagesStatus = messagesContent.appendChild(messagesTemplates.children[2].cloneNode(true));
  messagesStatus.querySelector('.message-text').innerText = messageInput.value;
  messagesStatus.querySelector('.timestamp').innerText = getTime();
  messageInput.value = '';
}
