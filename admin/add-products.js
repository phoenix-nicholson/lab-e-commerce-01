import { addProduct } from '../utils.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const data = new FormData(form);
    const newPirate = {
        id: data.get('id'),
        name: data.get('name'),
        img: data.get('img'),
        bounty: Number(data.get('bounty')),
        crew: data.get('crew'),
        role: data.get('role')
    };
    // console.log(newPirate);
    addProduct(newPirate);
    alert('new pirate added');
    form.reset();
});