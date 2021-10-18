export function renderPirate(pirate){
    const pirateCard = document.createElement('div');
    pirateCard.classList.add('pirate-card');

    const pirateHeader = document.createElement('h2');
    pirateHeader.textContent = pirate.name;

    const pirateButton = document.createElement('button');
    pirateButton.textContent = 'Add to list!';
    pirateButton.id = pirate.id;
    pirateButton.classList.add('add-button');

    const piratePTag = document.createElement('h3');
    piratePTag.textContent = pirate.crew;

    const pirateBounty = document.createElement('p');
    pirateBounty.textContent = pirate.bounty;
    
    const pirateRole = document.createElement('p2');
    pirateRole.textContent = pirate.role;

    const img = document.createElement('img');
    img.src = pirate.img;

    pirateCard.append(pirateHeader, img, pirateButton, piratePTag,
        pirateBounty, pirateRole,);
    return pirateCard;
}