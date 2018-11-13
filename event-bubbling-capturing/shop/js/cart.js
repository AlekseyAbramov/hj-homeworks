'use strict';
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('add-to-cart')) {
		event.preventDefault();
		addToCart(event.target.dataset);
	}
});