import { pirates } from '../data/pirates.js';
import { cart } from '../data/cart-data.js';
import { calculateOrderTotal, findById } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';

const tbody = document.getElementById('table-body');

for (let cartItem of cart){
    const pirateData = findById(cartItem.id, pirates);
    const tr = renderLineItems(cartItem, pirateData);
    tbody.appendChild(tr);
}

const orderTotal = calculateOrderTotal(cart, pirates);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = orderTotal;
