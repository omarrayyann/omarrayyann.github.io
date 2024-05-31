const grid = document.getElementById('grid');
const preview = document.getElementById('preview');
const colorPicker = document.getElementById('colorPicker');
const gridSize = 50;
let currentColor = colorPicker.value;
let zIndexCounter = 1; // Counter to manage z-index

// Update current color when the color picker value changes
colorPicker.addEventListener('input', () => {
    currentColor = colorPicker.value;
});

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
    previewCell.appendChild(cross);
    preview.appendChild(previewCell);
}

function setEraser() {
    currentColor = 'white';
}

function toggleColor(cell, index) {
    const previewCells = document.querySelectorAll('.preview-cell .cross');

    if (currentColor === 'white') {
        cell.style.backgroundColor = 'white';
        previewCells[index].style.color = 'transparent'; // Make non-picked crosses transparent
        previewCells[index].style.zIndex = 0;
    } else {
        cell.style.backgroundColor = currentColor;
        previewCells[index].style.color = currentColor;
        previewCells[index].style.zIndex = zIndexCounter++; // Update z-index for the current cell
    }
}

function updatePreview(index) {
    const previewCells = document.querySelectorAll('.preview-cell .cross');
    const gridCells = document.querySelectorAll('.cell');

    previewCells[index].style.color = gridCells[index].style.backgroundColor === 'white' ? 'transparent' : gridCells[index].style.backgroundColor;
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
    const previewCells = document.querySelectorAll('.preview-cell .cross');
    previewCells.forEach(cross => {
        cross.style.color = 'transparent';
        cross.style.zIndex = 0;
    });
    zIndexCounter = 1; // Reset z-index counter
}

function savePreview() {
    html2canvas(preview).then(canvas => {
        const link = document.createElement('a');
        link.download = 'tatreez_preview.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
