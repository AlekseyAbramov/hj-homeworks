'use strict';

const video = document.createElement('video');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const app = document.querySelector('.app');
const errMessage = document.getElementById('error-message');
const button = document.getElementById('take-photo');
const imgGallery = document.querySelector('.list');
let photoReady = false;
const cameraAudio = document.createElement('audio');
cameraAudio.src = 'https://raw.githubusercontent.com/netology-code/hj-homeworks/master/media/photo-booth/audio/click.mp3';

function initializeVideoStream(stream) {
    if (typeof (video.srcObject) !== 'undefined') {
        video.srcObject = stream;
    }
    else {
        video.src = URL.createObjectURL(stream);
    }
}

navigator.mediaDevices.getUserMedia({video: true, audio: false})
.then((stream) => {
    video.autoplay = true;
    app.insertBefore(video, errMessage);
    initializeVideoStream(stream);
    document.querySelector('.controls').style.display = 'block';
    //app.style.display = 'flex';
    photoReady = true;
})
.catch((err) => {
    errMessage.style.display = 'block';
    errMessage.innerText = 'Нет доступа к видеокамере';
});

button.addEventListener('click', createPhoto);

function createPhoto() {
    if (photoReady) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);
        let imgData = canvas.toDataURL('image/jpeg');
        console.log(imgData);
        setInGallery(imgData);
        cameraAudio.play();
    }
}

function setInGallery(url) {
    const template = `
	    <figure>
			<img src="${url}">
			<figcaption>
				<a href="${url}" download="snapshot.png">
					<i class="material-icons">file_download</i>
				</a>
				<a><i class="material-icons">file_upload</i></a>
				<a><i class="material-icons">delete</i></a>
			</figcaption>
		</figure>`;
    imgGallery.innerHTML += template;
    imgGallery.querySelectorAll('figure').forEach(elem => elem.addEventListener('click', actionImg));
}

function actionImg(e) {
    if (e.target.innerText === 'file_download') {
        e.target.parentNode.remove();
    }
    else if (e.target.innerText === 'file_upload') {
        saveToServer(e.target.parentNode.previousElementSibling.href);
        e.target.parentNode.remove();
    }
    else if (e.target.innerText === 'delete') {
        e.target.parentNode.parentNode.parentNode.remove();
        Array.from(imgGallery).shift();
    }
}

function saveToServer() {
    const formData = new FormData;
    canvas.toBlob((img) => {
        formData.append('image', img);
        fetch('https://neto-api.herokuapp.com/photo-booth', {
            method: 'POST',
            body: formData
        }).then(response => response).then(resp => console.log(resp));
    });
}