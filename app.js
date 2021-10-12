import { renderPirate } from './render-pirate.js';
import { pirates } from '../data/pirates.js';

const pirateList = document.getElementById('pirate-list');

for (let pirate of pirates){
    const pirateCard = renderPirate(pirate);
    pirateList.append(pirateCard);
}