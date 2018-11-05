const drums = document.getElementsByTagName('li');
const musik =document.getElementsByTagName('audio');
for (let drum of drums) {
    drum.onclick = () => {
        let sound = drum.getElementsByTagName('audio')[0];
        sound.pause();
        sound.currentTime = 0;
        sound.play();
    }
};