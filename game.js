const heading = document.createElement('h1');
heading.textContent = "Etch-A-Sketch";
document.body.appendChild(heading);

const button = document.createElement('button');
button.textContent = "Choose your grid size!";
button.setAttribute("style",
    "margin-bottom: 30px; padding: 10px 10px; font-size: 16px");
document.body.appendChild(button);

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container); 

function createGrid(size) {

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    container.innerHTML = '';

    for (let rows = 0; rows < size; rows++) {
        for (let columns = 0; columns < size; columns++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);
        }
    }
}

function hoverEffect() {
    const gridCell = document.querySelectorAll('.grid');
    const colors = ['#f0dab1', '#e39aac', '#c45d9f', '#634b7d', '#6461c2', '#2ba9b4', '#93d4b5'];
    let colorIndex = 0;

    gridCell.forEach((grid) => {
        grid.addEventListener('mouseenter', () => {
            grid.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
            })
        });
    };

button.addEventListener('click', () => {
    let size = parseInt(prompt("Choose your grid size:", "50 - 100"), 10);

    if (size < 50 || size > 100) {
        alert("Please enter a value between 50 and 100.")
        return
    }
    createGrid(size);
    hoverEffect();
});