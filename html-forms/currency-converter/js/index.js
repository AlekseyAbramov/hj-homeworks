let xhr = new XMLHttpRequest();
xhr.addEventListener('load', onLoad);
xhr.open("GET", "https://neto-api.herokuapp.com/currency", true);
xhr.send();
const content = document.getElementById('content');
const result = document.getElementById('result');
let from = document.getElementById('from');
let to = document.getElementById('to');
const select = document.getElementsByTagName('select');
const source = document.getElementById('source');
let countFrom, countTo;

xhr.addEventListener('load', onLoad);
xhr.addEventListener("loadstart", onLoadStart);
xhr.addEventListener("loadend", onLoadEnd);
for (let value of select) {
  value.addEventListener('input', getResult);
}
source.addEventListener('input', getResult);

function onLoad() {
  const data = JSON.parse(xhr.responseText);
  data.forEach(el => {
    let optionFrom = document.createElement('option');
    optionFrom.innerHTML = el.code;
    let optionTo = document.createElement('option');
    optionTo.innerHTML = el.code;
    from.appendChild(optionFrom);
    to.appendChild(optionTo);
  })
  getResult();
}

function onLoadStart() {
  document.getElementById('loader').classList.remove('hidden');
}

function onLoadEnd() {
  document.getElementById('loader').classList.add('hidden');
  content.classList.remove('hidden');
}

function getResult() {
  const data = JSON.parse(xhr.responseText);
  data.forEach(el => {
    if (from.value == el.code) {
      countFrom = el.value;
    }
    if (to.value == el.code) {
      countTo = el.value;
    }
  })
  result.value = (countFrom * source.value / countTo).toFixed(2);
}
