'use strict';

const pic = document.querySelector('[data-pic]');
const title = document.querySelector('[data-title]');
const ingredients = document.querySelector('[data-ingredients]');
const rating = document.querySelector('[data-rating]');
const star = document.querySelector('[data-star]');
const votes = document.querySelector('[data-votes]');
const consumers = document.querySelector('[data-consumers]');

function randName() {
  return 'callback' + Math.floor(Math.random() * 10);
}

function loadData(url) {
  const funcName = randName();
  return new Promise((resolve, reject) => {
    window[funcName] = resolve;
    const script = document.createElement('script')
    script.src = `${url}?jsonp=${funcName}`;
    document.body.appendChild(script);
      });
    }

loadData('https://neto-api.herokuapp.com/food/42')
.then(loadRecipe);

loadData('https://neto-api.herokuapp.com/food/42/rating')
  .then(loadRating);

loadData('https://neto-api.herokuapp.com/food/42/consumers')
  .then(loadConsumers);

function loadRecipe(data) {
  title.textContent = data.title;
  ingredients.textContent = data.ingredients.join(', ');
  pic.style = `background-image: url("${data.pic}");`;
}

function loadRating(data) {
  rating.textContent = data.rating.toFixed(2);
  star.style.width = `${data.rating * 100 / 10}%`;
  votes.textContent = `(${data.votes} оценок)`;
}

function loadConsumers(data) {
  data.consumers.forEach(item => {
    const img = document.createElement('img');
    img.src = item.pic;
    img.title = item.name;
    consumers.appendChild(img);
  });
  const span = document.createElement('span');
  span.textContent = ` (+${data.total})`;
  consumers.appendChild(span);
}

