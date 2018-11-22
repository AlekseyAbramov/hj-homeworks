const tabs = document.getElementById('tabs');
const menu = tabs.querySelector('.tabs-nav');
const menuLi = menu.querySelector('li');
const content = tabs.querySelector('.tabs-content');
const contentBlock = content.children;

menuLi.parentNode.removeChild(menuLi);
getMenu();
contentBlock[0].classList.remove('hidden');
menu.children[0].classList.add('ui-tabs-active');

function getMenu() {
    for (let block of contentBlock) {
        const menuEl = menu.appendChild(menuLi.cloneNode(true));
        menuEl.children[0].innerText = block.dataset.tabTitle;
        menuEl.children[0].classList.add(block.dataset.tabIcon);
        block.classList.add('hidden');
    }
}

for (let link of menu.children) {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event);
        for (let li of menu.children) {
          li.classList.remove('ui-tabs-active');
        }
        event.target.parentElement.classList.add('ui-tabs-active');
        for (let block of contentBlock) {
            block.classList.remove('ui-tabs-active');
            block.classList.add('hidden');
            if (event.target.firstChild.data == block.dataset.tabTitle) {
                block.classList.remove('hidden');
                block.classList.add('ui-tabs-active')
            }
        }
    })
}
