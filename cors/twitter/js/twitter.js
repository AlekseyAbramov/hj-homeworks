'use strict';

const jsonpURL = 'https://neto-api.herokuapp.com/twitter/jsonp';

const wallpaper = document.querySelector('*[data-wallpaper]');
const username = document.querySelector('*[data-username]');
const description = document.querySelector('*[data-description]');
const pic = document.querySelector('*[data-pic]');
const tweets = document.querySelector('*[data-tweets]');
const followers = document.querySelector('*[data-followers]');
const following = document.querySelector('*[data-following]');

function loadData(url) {
  return new Promise((done, fail) => {
    window.fillData = done;
    const script = document.createElement('script');
    script.src = `${url}?jsonp=fillData`;
    document.body.appendChild(script);
  });
}

function callback(data) {
  wallpaper.src = data.wallpaper;
  username.textContent = data.username;
  description.textContent = data.description;
  pic.src = data.pic;
  tweets.textContent = data.tweets;
  followers.textContent = data.followers;
  following.textContent = data.following;
}

loadData(jsonpURL).then(callback);