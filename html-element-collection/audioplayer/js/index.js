const sound = ['mp3/LA Chill Tour.mp3',
               'mp3/This is it band.mp3',
               'mp3/LA Fusion Jam.mp3'];
const titleList = ['LA Chill Tour','This is it band','LA Fusion Jam']
const player = document.getElementsByTagName('audio')[0];
const btnBack = document.getElementsByClassName('back')[0];
const btnPlayState = document.getElementsByClassName('playstate')[0];
const btnStop = document.getElementsByClassName('stop')[0];
const btnNext = document.getElementsByClassName('next')[0];
const mediaPlayer = document.getElementsByClassName('mediaplayer')[0];
let title = document.getElementsByClassName('title')[0];

btnPlayState.onclick = () => {
    if (mediaPlayer.classList.contains('play')) {
        mediaPlayer.classList.remove('play');
        player.pause();
    } else {
        mediaPlayer.classList.add('play');
        player.play();
    }
};

btnStop.onclick = () => {
    player.pause();
    mediaPlayer.classList.remove('play');
    player.currentTime = 0;
}

let i = 0;
player.src = sound[0];

btnNext.onclick = () => {
    i++;
    if (i === sound.length) {
        i = 0;
    }
    player.src = sound[i];
    title.title = titleList[i];
    if (mediaPlayer.classList.contains('play')) {
        player.play();
    }
}

btnBack.onclick = () => {
    i--;
    if (i === -1) {
        i = sound.length - 1;
    }
    player.src = sound[i];
    title.title = titleList[i];
    if (mediaPlayer.classList.contains('play')) {
        player.play();
    }
}