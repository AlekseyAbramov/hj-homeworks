const ul = document.getElementsByTagName('ul')[0];
const keys = document.getElementsByTagName('li');
const keySounds = document.getElementsByTagName('audio');
const sound = {
    lower: ['sounds/lower/first.mp3','sounds/lower/second.mp3','sounds/lower/third.mp3','sounds/lower/fourth.mp3','sounds/lower/fifth.mp3'],
    middle: ['sounds/middle/first.mp3','sounds/middle/second.mp3','sounds/middle/third.mp3','sounds/middle/fourth.mp3','sounds/middle/fifth.mp3'],
    higher: ['sounds/higher/first.mp3','sounds/higher/second.mp3','sounds/higher/third.mp3','sounds/higher/fourth.mp3','sounds/higher/fifth.mp3']
};

function changeSound(type) {
    ul.classList.remove('middle', 'lower', 'higher');
    ul.classList.add(type);
    let i = 0;
    for (const key of keySounds) {
        key.src = sound[type][i];
        i++;
    }
}
changeSound('middle');

function play(event) {
  console.log(event.target.getElementsByTagName('audio')[0]);
    event.target.getElementsByTagName('audio')[0].pause();
    event.target.getElementsByTagName('audio')[0].currentTime = 0;
    event.target.getElementsByTagName('audio')[0].play();
}

for (const key of keys) {
    key.addEventListener('click', play);
}

function changeTone(event) {
    if (event.altKey) {
        changeSound('higher');
        return;
    }

    if (event.shiftKey) {
        changeSound('lower');
        return;
    }
    if (!ul.classList.contains('middle')) {
        changeSound('middle');
        console.log('middle');
    }
}
document.addEventListener('keydown', changeTone);
document.addEventListener('keyup', changeTone);
