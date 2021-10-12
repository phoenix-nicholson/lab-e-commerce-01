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

