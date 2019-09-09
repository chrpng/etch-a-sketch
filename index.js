const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');

button = document.createElement('button');
button.innerHTML = 'Reset';

const getSize = () => {
    size = prompt('How many squares per side?');
    size ? generateGrid(size) : generateGrid();
}

const pickRandom256 = () => {
    return Math.floor(Math.random()*257);
}

const colorizeBox = (e) => {
    e.target.style.background = `rgb(${pickRandom256()}, ${pickRandom256()}, ${pickRandom256()})`;
}

const generateGrid = (size=16) => {
    //Clear container of square divs
    container.innerHTML = '';

    //Calculate square size
    let squareSide = Math.floor (800 / size);

    //Resizes container if it fills unevenly
    wrapper.style.maxWidth = `${squareSide*size}px`;
    wrapper.style.maxHeight = `${squareSide*size}px`;

    for ( let i=0; i < size; i++ ) {
        let row = document.createElement('div');
        row.classList.add('row');
        for ( let j=0; j < size; j++ ) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.height = `${squareSide}px`;
            square.style.width = `${squareSide}px`;
            square.addEventListener('mouseover', colorizeBox);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

button.addEventListener('click', getSize)

generateGrid();
wrapper.appendChild(button);

