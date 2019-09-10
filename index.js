const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');

button = document.createElement('button');
button.innerHTML = 'Modify canvas dimensions';

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
    let squareSide = 100 / size;

    container.style.gridTemplateRows = `repeat(${size}, ${squareSide}%)`;
    container.style.gridTemplateColumns = `repeat(${size}, ${squareSide}%)`;

    for ( let i=0; i < size; i++ ) {
        //let row = document.createElement('div');
        //row.classList.add('row');
        for ( let j=0; j < size; j++ ) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseover', purplizeBox);
            container.appendChild(square);
        }
        //container.appendChild(row);
    }
}

button.addEventListener('click', getSize)

generateGrid();
wrapper.appendChild(button);

