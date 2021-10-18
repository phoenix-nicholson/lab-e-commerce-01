export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function calculateOrderTotal(cart, pirates){
    let orderTotal = 0;
    for (let item of cart){
        const pirate = findById(item.id, pirates);
        orderTotal = orderTotal + pirate.bounty * item.qty;
    }
    return orderTotal;
}
export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

export function getCart(){

    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id){
    const cart = getCart();
    const cartItem = findById(id, cart);
    if (cartItem){
        cartItem.qty++; 
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
        // const stringCart = JSON.stringify(cart);
        // localStorage.setItem('CART', stringCart);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}

import { pirates } from './data/pirates.js';

export function getProducts(){
    let lsProducts = localStorage.getItem('PRODUCTS');
    const products = JSON.parse(lsProducts);

    if (!products){
        const pirateString = JSON.stringify(pirates);
        localStorage.setItem('PRODUCTS', pirateString);
    }
    return products || pirates;
}

export function addProduct(newPirate){
    let products = getProducts();
    // console.log('PRODUCTS BEFORE', products);

    products.push(newPirate);
    // console.log('PRODUCTS AFTER', products);

    let productsString = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', productsString);
}

