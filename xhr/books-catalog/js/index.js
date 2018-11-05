let xhr = new XMLHttpRequest();
xhr.addEventListener('load', onLoad);
xhr.open("GET", "https://neto-api.herokuapp.com/book/", true);
xhr.send();
let data, elem, list;
function onLoad() {
  data = JSON.parse(xhr.responseText);
  elem = document.querySelector('#content li');
  list = document.getElementById('content');
  elem.parentNode.removeChild(elem);
  data.forEach(element => {
    const el = list.appendChild(elem.cloneNode(true));
    el.dataset.title = element.title;
    el.dataset.author = element.author.name;
    el.dataset.info = element.info;
    el.dataset.price = element.price;
    el.getElementsByTagName('img')[0].src = element.cover.small;
  });
}