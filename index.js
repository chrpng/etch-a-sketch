const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');

button = document.createElement('button');
button.innerHTML = 'Reset';

const getSize = () => {
    size = prompt('How many squares per side?');
    size ? generateGrid(size) : generateGrid();
}

const pickRandomN = (range) => {
    return Math.floor(Math.random()*(range+1));
}

const pickRandomInRange = (min, max) => {
    return Math.floor(Math.random()*(max-min)+min)
}

const purplizeBox = (e) => {
    e.target.style.background = `rgb(${pickRandomInRange(100, 256)}, ${50+pickRandomN(78)}, ${pickRandomInRange(100, 256)})`;
}

const generateGrid = (size=16) => {
    //Clear container of square divs
    container.innerHTML = '';

    //Calculate square size
    let squareSide = Math.floor (800 / size);

    //Resizes container if it fills unevenly
    container.style.maxWidth = `${squareSide*size}px`;
    container.style.maxHeight = `${squareSide*size}px`;
    container.style.top = `${(900 - squareSide*size) / 2}px`;

    for ( let i=0; i < size; i++ ) {
        let row = document.createElement('div');
        row.classList.add('row');
        for ( let j=0; j < size; j++ ) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.height = `${squareSide}px`;
            square.style.width = `${squareSide}px`;
            square.addEventListener('mouseover', purplizeBox);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
    container.appendChild(button);
}

button.addEventListener('click', getSize)

generateGrid();

