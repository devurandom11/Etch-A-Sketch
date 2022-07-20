// Etch a Sketch

// Get elements from DOM
const gameBoard = document.querySelector('.gameboard');
const options = document.querySelector('.options');


// Create 16x16 grid of squares 

for (let i = 0; i < 4; i++) {
    const row = document.createElement('div');
    row.classList = 'board-row';
    gameBoard.appendChild(row)
    for (let j = 0; j < 4; j++) {
        const square = document.createElement('div');
        square.classList = 'square';
        row.appendChild(square)
    }
}

// Grids change color over hover
const squares = document.querySelectorAll('.square')

squares.forEach((square) => {
    square.addEventListener('mouseover', function changeColor() {
        square.style.backgroundColor = 'black'
        square.style.border = '1px solid white'
    })
})