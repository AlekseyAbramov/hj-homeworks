let list, el;
const contacts = JSON.parse(loadContacts());
function contact() {
    el = document.querySelector('ul.contacts-list li');
    list = document.querySelector('ul.contacts-list');
    el.parentNode.removeChild(el);
    contacts.forEach(element => {
        const elem = list.appendChild(el.cloneNode(true));
        elem.dataset.email = element.email;
        elem.dataset.phone = element.phone;
        elem.innerHTML = '<strong>' + element.name + '</strong>';
    });
}
document.addEventListener('DOMContentLoaded', contact);