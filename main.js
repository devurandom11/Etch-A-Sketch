// create a game of etched a sketch in div class main-board

let mainBoard = document.querySelector('.main-board');
mainBoard.style.display = 'grid';
mainBoard.style.gridTemplateColumns = 'repeat(10, 1fr)';
mainBoard.style.gridTemplateRows = 'repeat(10, 1fr)';
mainBoard.style.height = '100vh';
mainBoard.style.width = '100vw';
mainBoard.style.border = '1px solid black';
mainBoard.style.borderRadius = '5px';
mainBoard.style.backgroundColor = '#fff';
mainBoard.style.margin = '0 auto';
mainBoard.style.marginTop = '50px';
mainBoard.style.marginBottom = '50px';
mainBoard.style.padding = '0';


// create a game of etched a sketch in div class main-board
const etchASketch = () => {
  // create a grid of divs
  for (let i = 0; i < 100; i++) {
    let div = document.createElement('div');
    div.classList.add('div');
    div.style.border = '1px solid black';
    div.style.borderRadius = '5px';
    div.style.backgroundColor = '#fff';
    div.style.margin = '0';
    div.style.padding = '0';
    mainBoard.appendChild(div);
  }
  // create a grid of divs
  let divs = document.querySelectorAll('.div');
  // add event listeners to divs
  divs.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = '#000';
    });
  }
  );
}

// change the brush color based on the the color selected
const changeColor = () => {
    let color = document.querySelector('.color-picker');
    color.addEventListener('change', (e) => {
        let color = e.target.value;
        let divs = document.querySelectorAll('.div');
        divs.forEach((div) => {
            div.style.backgroundColor = color;
        }
        );
    }
    );
}

// Remove the brush size option from the page
const removeBrushSize = () => {
    let brushSize = document.querySelector('.brush-size');
    brushSize.remove();
}


etchASketch();
