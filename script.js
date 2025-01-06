console.log("Hello World")

input = parseInt(prompt("Enter number of boxes"), 10)

let size = (500/input)*10/10;

const grid = document.querySelector('#grid');
grid.innerHTML = '';

console.log("Calculated size for each box:", size);

const noOfBoxes = input*input;

console.log("No of boxes:", noOfBoxes);

for (let i=0; i<noOfBoxes; i++){
    console.log(`Creating box #${i + 1}`);
    const gridBox = document.createElement('div');
    gridBox.style.height = `${size}px`;
    gridBox.style.width = `${size}px`;
    gridBox.style.background  =" #f8f8f8"
    gridBox.style.border  ="2px solid purple"
    gridBox.style.margin = "0px"
    gridBox.style.padding = "0px"
    gridBox.style.boxSizing= "border-box"
    grid.appendChild(gridBox)
}





