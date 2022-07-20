// Etch a Sketch

// Get elements from DOM
const gameBoard = document.querySelector('.gameboard');
const options = document.querySelector('.options');


// Create 16x16 grid of squares 

for (let i = 0; i < 4; i++) {
    const rows = document.createElement('div');
    rows.classList = 'board-row';
    gameBoard.appendChild(rows)
    for (let j = 0; j < 4; j++) {
        const squares = document.createElement('div');
        squares.classList = 'square';
        rows.appendChild(squares)
    }
}