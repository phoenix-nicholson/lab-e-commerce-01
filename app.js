import { renderPirate } from './render-pirate.js';
import { pirates } from './data/pirates.js';
import { addItem } from './utils.js';

const pirateList = document.getElementById('pirate-list');

for (let pirate of pirates){
    const pirateCard = renderPirate(pirate);
    pirateList.append(pirateCard);
}
const pirateButtons = document.querySelectorAll('.add-button');
for (let addBtn of pirateButtons){
    addBtn.addEventListener('click', ()=> {
        addItem(addBtn.id);
        
    });
}
