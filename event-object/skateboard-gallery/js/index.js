const links = document.getElementsByTagName('a');
const view = document.getElementById('view');

function select(event) {
    event.preventDefault();
    view.src = event.currentTarget.href;
    for (const link of links) {
        link.classList.remove('gallery-current')
    }
    event.currentTarget.classList.add('gallery-current');
}
for (const link of links) {
    link.addEventListener('click',select)
}