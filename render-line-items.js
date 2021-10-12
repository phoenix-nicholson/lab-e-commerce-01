export function renderLineItems(cartItem, pirateData){
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
    return tr;

}