// Etch a Sketch

// Get elements from DOM
const gameBoard = document.querySelector('.gameboard');
const options = document.querySelector('.options');
const resetButton = document.querySelector('.reset');
const sizeButton = document.querySelector('.size');
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

// Add functionality to reset button
resetButton.addEventListener('click', function reset() {
    squares.forEach((square) => {
        square.style.backgroundColor = 'white'
        square.style.border = '1px solid black'
    })
}
)


// Add functionality to size button
sizeButton.addEventListener('click', function changeSize() {
    let size = prompt('Enter a number between 1 and 100')
    if (size < 1 || size > 100) {
        alert('Please enter a number between 1 and 100')
    }
    else {
        document.querySelectorAll('.square').forEach((square) => {
            square.remove()
        })
        document.querySelectorAll('.board-row').forEach((row) => {
            row.remove()
        })
        for (let i = 0; i < (size / 2); i++) {
            const row = document.createElement('div');
            row.classList = 'board-row';
            gameBoard.appendChild(row)
            for (let j = 0; j < (size / 2); j++) {
                const square = document.createElement('div');
                square.classList = 'square';
                row.appendChild(square)
            }
        }
        const squares = document.querySelectorAll('.square')
        squares.forEach((square) => {
            square.addEventListener('mouseover', function changeColor() {
                square.style.backgroundColor = 'black'
                square.style.border = '1px solid white'
            })
        })
    }
})