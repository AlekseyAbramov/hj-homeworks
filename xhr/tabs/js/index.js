const links = document.querySelectorAll('nav a');
const content = document.getElementById('content');
let xhr = new XMLHttpRequest();
getTab();

for (const link of links) {
    link.addEventListener('click',(event) =>{
        event.preventDefault();
        for (const link of links) {
            link.classList.remove('active');
        }
        link.classList.add('active');
        getTab();
    })
}

function getTab() {
    xhr.addEventListener('load', onLoad);
    xhr.addEventListener("loadstart", onLoadStart);
    xhr.addEventListener("loadend", onLoadEnd);
    xhr.open("GET", document.querySelector('nav a.active').href, true);
    xhr.send();
}

function onLoad() {
    content.innerHTML = xhr.responseText;
}

function onLoadStart() {
    document.getElementById('preloader').classList.remove('hidden');
}

function onLoadEnd() {
    document.getElementById('preloader').classList.add('hidden');
}