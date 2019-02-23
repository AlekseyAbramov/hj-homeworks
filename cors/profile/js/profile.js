'use strict';

const jsonpProfileURL = 'https://neto-api.herokuapp.com/profile/me';
let jsonpTechnologiesURL = 'https://neto-api.herokuapp.com/profile/:id/technologies';

const name = document.querySelector('*[data-name]');
const description = document.querySelector('*[data-description]');
const pic = document.querySelector('*[data-pic]');
const position = document.querySelector('*[data-position]');
const technologies = document.querySelector('*[data-technologies]');

const content = document.querySelector('.content');

function loadData(url) {
  return new Promise((done, fail) => {
    window.fillData = done;
    const script = document.createElement('script');
    script.src = `${url}?jsonp=fillData`;
    document.body.appendChild(script);
  });
}

function infoCallback(data) {
  name.textContent = data.name;
  description.textContent = data.description;
  position.textContent = data.position;
  pic.src = data.pic;

  const url = jsonpTechnologiesURL.replace(':id', data.id);
  loadData(url).then(technologiesCallback);
}

function technologiesCallback(data) {
  let technologiesHtmlString = data.map((technology) => {
    return `<span class="devicons devicons-${technology}"></span>`;
  }).join('');
  technologies.innerHTML = technologiesHtmlString;

  content.style.display = 'initial';
}

loadData(jsonpProfileURL).then(infoCallback);