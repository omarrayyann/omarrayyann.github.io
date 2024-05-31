const grid = document.getElementById('grid');
const preview = document.getElementById('preview');
const gridSize = 20;
let currentColor = 'black';

// Initialize the grid and preview
for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => toggleColor(cell, i));
    grid.appendChild(cell);

    const previewCell = document.createElement('div');
    previewCell.classList.add('preview-cell');
    const cross = document.createElement('div');
    cross.classList.add('cross');
    cross.style.color = 'white'; // Initialize as white (invisible)
    previewCell.appendChild(cross);
    preview.appendChild(previewCell);
}

function setColor(color) {
    currentColor = color;
}

function toggleColor(cell, index) {
    if (cell.classList.contains(currentColor)) {
        cell.classList.remove(currentColor);
    } else {
        cell.className = 'cell ' + currentColor;
    }
    updatePreview(index);
}

function updatePreview(index) {
    const previewCells = document.querySelectorAll('.preview-cell .cross');
    const gridCells = document.querySelectorAll('.cell');

    previewCells[index].style.color = gridCells[index].classList.contains('red') ? 'red' : 
                                      gridCells[index].classList.contains('black') ? 'black' : 
                                      'white';
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.className = 'cell';
    });
    const previewCells = document.querySelectorAll('.preview-cell .cross');
    previewCells.forEach(cross => {
        cross.style.color = 'white';
    });
}
