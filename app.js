const etchContainer = document.querySelector('.etch-container');
const clearBtn = document.querySelector('.clear-sketch');
const sizeSlider = document.querySelector('#size');
const colorSelector = document.querySelector('#color');

//default values
sizeSlider.value = 16;
colorSelector.value = 'black';
let gridSize = 16;
let color = colorSelector.value; //black

//load etch-a-sketch and event listeners once elements are created
loadEtchContainer(gridSize);
loadEventListeners();

function loadEtchContainer(gridSize) {
    etchContainer.innerHTML = "";

    //add a row, for each row, add gridSize columns
    for(var i = 0; i < gridSize; i++) {
        newRow = document.createElement('div');
        newRow.classList.add('row');

        for(var j = 0; j < gridSize; j++) {
            newColumn = document.createElement('div');
            newColumn.classList.add('column');
            newRow.appendChild(newColumn);
        }

        etchContainer.appendChild(newRow);
    }

    //load event listeners for each ethc-a-sketch square div
    loadGridEventListeners();
}

//event listeners for inputs
function loadEventListeners() {
    clearBtn.addEventListener('click', clearSketch);
    sizeSlider.addEventListener('input', changeGridSize);
    colorSelector.addEventListener('change', changeColor);
}

//load each event listener for each grid square
function loadGridEventListeners() {
    let etchSquares = etchContainer.querySelectorAll('.column');
    etchSquares.forEach(square => square.addEventListener('mouseover', colorSquare));
}

//colors the square when colorSqaure is called by the event listener
function colorSquare() {
    this.style.backgroundColor = color;
}

//clears sketch
function clearSketch() {
    let etchSquares = etchContainer.querySelectorAll('.column');
    etchSquares.forEach(square => square.style.backgroundColor = 'white')
}

//changes grid size by calling loadEtchContainer with input value
function changeGridSize(e) {
    loadEtchContainer(e.target.value);
}

//set global color variable value
function changeColor(e) {
    color = e.target.value;
}