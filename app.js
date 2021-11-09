const etchContainer = document.querySelector('.etch-container');
const clearBtn = document.querySelector('.clear-sketch');

let defaultGridSize = 16;

loadEtchContainer(defaultGridSize);
loadEventListeners();

function loadEtchContainer(size) {
    console.log(size);
    etchContainer.innerHTML = '';

    for(var i = 0; i < size; i++) {
        newRow = document.createElement('div');
        newRow.classList.add('row');
        console.log('new row added');

        for(var j = 0; j < size; j++) {
            newColumn = document.createElement('div');
            newColumn.classList.add('column');
            newRow.appendChild(newColumn);
            console.log('new column added');
        }

        etchContainer.appendChild(newRow);
    }
}

function loadEventListeners() {
    let etchSquares = etchContainer.querySelectorAll('.column');
    etchSquares.forEach(square => square.addEventListener('mouseover', colorSquare));
    clearBtn.addEventListener('click', clearSketch);
}

function colorSquare() {
    this.style.backgroundColor = 'black';
}

function clearSketch() {
    let etchSquares = etchContainer.querySelectorAll('.column');
    etchSquares.forEach(square => square.style.backgroundColor = 'white')
    let gridSize = prompt('What size grid would you lke?');
    
    loadEtchContainer(gridSize);
}