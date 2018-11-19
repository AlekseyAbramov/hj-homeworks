'use strict';

const colorSwatch = document.getElementById('colorSwatch');
const sizeSwatch = document.getElementById('sizeSwatch');
const quickCart = document.getElementById('quick-cart');
const addToCartForm = document.getElementById('AddToCartForm');
const addToCartButton = document.getElementById('AddToCart');

const urls = [
    'https://neto-api.herokuapp.com/cart/colors',
    'https://neto-api.herokuapp.com/cart/sizes',
    'https://neto-api.herokuapp.com/cart'
  ];

getData(urls[0]).then(colors => getColor(colors));
getData(urls[1]).then(sizes => getSize(sizes));
getData(urls[2]).then(cart => {
    console.log(cart);
    if (cart.length !== 0) {
        for (const product of cart) {
            getProduct(product);
            getCart(product);
        }
    }
});

function getData(url) {
   return fetch(url)
   .then(function(response) {
     return response.json()
   }).catch(function(ex) {
     console.log('parsing failed', ex)
   })
}

function getColor(colors) {
    for (const color of colors) {
        colorSwatch.innerHTML += `<div data-value="${color.type}" class="swatch-element color ${color.type} 
            ${color.isAvailable ? 'available' : 'soldout'}">
            <div class="tooltip">${color.title}</div>
            <input quickbeam="color" id="swatch-1-${color.type}" type="radio" name="color" value="${color.type}" checked>
            <label for="swatch-1-${color.type}" style="border-color: ${color.code};">
                <span style="background-color: ${color.type};"></span>
                <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
            </label>
        </div>`;
    }
}

function getSize(sizes) {
    for (const size of sizes) {
        sizeSwatch.innerHTML += `<div data-value="${size.type}" class="swatch-element plain ${size.type} 
            ${size.isAvailable ? 'available' : 'soldout'}">
            <input id="swatch-0-${size.type}" type="radio" name="size" value="${size.type}" 
            ${size.isAvailable ? '' : 'disabled'}>
            <label for="swatch-0-${size.type}">
                ${size.title}
                <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
            </label>
        </div>`;
    }
}

function getProduct(product) {
    quickCart.innerHTML += `<div class="quick-cart-product quick-cart-product-static" id="quick-cart-product-${product.id}" style="opacity: 1;">
    <div class="quick-cart-product-wrap">
      <img src="${product.pic}" title="${product.title}">
      <span class="s1" style="background-color: #000; opacity: .5">$${product.price}</span>
      <span class="s2"></span>
    </div>
    <span class="count hide fadeUp" id="quick-cart-product-count-${product.id}">${product.quantity}</span>
    <span class="quick-cart-product-remove remove" data-id="${product.id}"></span>
  </div>`
}

function getCart(product) {
    quickCart.innerHTML += `<a id="quick-cart-pay" quickbeam="cart-pay" class="cart-ico ${product.length === 0 ? '' : 'open'}">
    <span>
      <strong class="quick-cart-text">Оформить заказ<br></strong>
      <span id="quick-cart-price">$${product.price * product.quantity}</span>
    </span>
  </a>`
}

addToCartButton.addEventListener('click', (event) => {
    event.preventDefault();
    const id = String(addToCartForm.dataset.productId);
    console.log(id);
    const data = new FormData(addToCartForm);
    //console.log(formData);
    data.append('productId', addToCartForm.dataset.productId);
    console.log(data);
    fetch('https://neto-api.herokuapp.com/cart', {
        method: 'POST',
        body: data,
    }).then(function(response) {
        return response.json()
    }).then(cart => {
        console.log(cart);
        if (cart.length !== 0) {
            for (const product of cart) {
                getProduct(product);
                getCart(product);
            }
        }
    })
    .catch(e => console.log(e));
});
//quickCart.addEventListener('click', removeFromCart);