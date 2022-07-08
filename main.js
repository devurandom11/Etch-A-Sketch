// Select main-board div
const mainBoard = document.querySelector('.main-board');

// Create i number of divs in main-board
for (let i = 0; i < 256; i++ ) {

    let div = document.createElement('div');
    div.style.cssText = "outline: 1px solid black; height: 30px; width: 30px; margin: 0; padding: 0;";
    mainBoard.appendChild(div);
    
}