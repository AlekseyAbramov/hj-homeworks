let count = 0;
let totalPrice = 0;
function addItem() {
    const triggers = document.querySelectorAll('button.add');
    for (let trigger of triggers) {
        trigger.addEventListener('click', (event) => {
            document.getElementById('cart-count').innerHTML = String(++count);
            document.getElementById('cart-total-price').innerHTML = getPriceFormatted(totalPrice += Number(event.currentTarget.dataset.price));
        })
    }
}

document.addEventListener('DOMContentLoaded', addItem);