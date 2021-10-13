import { pirates } from '../data/pirates.js';
import { calculateOrderTotal, findById, getCart, toUSD } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';

const tbody = document.getElementById('table-body');
const cart = getCart();

for (let cartItem of cart){
    const pirateData = findById(cartItem.id, pirates);
    const tr = renderLineItems(cartItem, pirateData);
    tbody.appendChild(tr);
}

const orderTotal = calculateOrderTotal(cart, pirates);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);

const orderButton = document.getElementById('order-button');
orderButton.addEventListener('click', ()=> {
    localStorage.remove('CART');
    window.location.replace('..');
});
