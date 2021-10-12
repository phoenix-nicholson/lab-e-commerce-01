import { pirates } from '../data/pirates.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';

const tbody = document.getElementById('table-body');

for (let cartItem of cart){
    const pirateData = findById(cartItem.id, pirates);
    const tr = renderLineItems(cartItem, pirateData);
    tbody.appendChild(tr);
}