const wrapperDropdown = document.getElementsByClassName('wrapper-dropdown')[0];
const li = document.getElementsByTagName('li');

wrapperDropdown.onclick = () => {
    wrapperDropdown.classList.toggle('active');
}