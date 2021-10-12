import { pirates } from '../data/pirates.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';

const tbody = document.getGetElementById('table-body');
for (let cartItem of cart){
    const pirateData = findById(cartItem.id, pirates);

    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = pirateData.name;
    const tdBounty = document.createElement('td');
    tdBounty.textContent = pirateData.bounty;
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    const tdTotal = document.createElement('td');
    tdTotal.textContent = cartItem.qty * pirateData.bounty;

    tr.append(tdName, tdBounty, tdQty, tdTotal);
    tbody.appendChild(tr);
} 