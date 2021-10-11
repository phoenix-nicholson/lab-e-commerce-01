// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { pirates } from '../pirates.js';
import { renderPirate } from '../render-pirate.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('Render Luffy Html snippet', (expect) => {
    const expected = `<div class="pirate-card"><h2>Monkey D. Luffy</h2><img src="./assets/luffy-2.jpeg"><button>Add</button><h3>Straw Hat Pirates</h3><p>1.5B Berries</p><p2>Captain</p2></div>`;
    const luffyPirate = pirates[0];
    const actual = renderPirate(luffyPirate).outerHTML;
    expect.equal(actual, expected);
});
test('Render Zoro Html snippet', (expect) => {
    const expected = `<div class="pirate-card"><h2>Roronoa Zoro</h2><img src="./assets/zoro.jpeg"><button>Add</button><h3>Straw Hat Pirates</h3><p>320M Berries</p><p2>Vice Captain</p2></div>`;
    const zoroPirate = pirates[1];
    const actual = renderPirate(zoroPirate).outerHTML;
    expect.equal(actual, expected);
});
test('Render Chopper HTMl snippet', (expect)=> {
    const expected = `<div class="pirate-card"><h2>Tony-Tony Chopper</h2><img src="./assets/chopper.jpeg"><button>Add</button><h3>Straw Hat Pirates</h3><p>100 Berries</p><p2>Doctor</p2></div>`;
    const chopperPirate = pirates[2];
    const actual = renderPirate(chopperPirate).outerHTML;
    expect.equal(actual, expected);
});
test('Render Law HTML snippet', (expect)=>{
    const expected = `<div class="pirate-card"><h2>Trafalgar D. Water Law</h2><img src="./assets/law.jpeg"><button>Add</button><h3>Heart Pirates</h3><p>500M Berries</p><p2>Captain</p2></div>`;
    const lawPirate = pirates[3];
    const actual = renderPirate(lawPirate).outerHTML;
    expect.equal(actual, expected);
});
test('Render Shanks HTML snippet', (expect)=>{
    const expected = `<div class="pirate-card"><h2>Red Haired Shanks</h2><img src="./assets/shanks.jpeg"><button>Add</button><h3>Red Hair Pirates</h3><p>4.05B Berries</p><p2>Captain</p2></div>`;
    const shanksPirate = pirates[4];
    const actual = renderPirate(shanksPirate).outerHTML;
    expect.equal(actual, expected);
});
test('Render Robin HTML snippet', (expect)=>{
    const expected = `<div class="pirate-card"><h2>Nico Robin</h2><img src="./assets/robin.png"><button>Add</button><h3>Straw Hat Pirates</h3><p>130M Berries</p><p2>Archaeologist</p2></div>`;
    const robinPirate = pirates[5];
    const actual = renderPirate(robinPirate).outerHTML;
    expect.equal(actual, expected);
});
