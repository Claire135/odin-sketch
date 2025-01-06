console.log("Hello World")

input = parseInt(prompt("Enter number of boxes"))

let size = 500/input;

const grid = document.querySelector('#grid');
const gridBox = document.createElement('div');
gridBox.style.height = `${size}px`;
gridBox.style.width = `${size}px`;
gridBox.style.boxSizing = "border-box";
grid.appendChild(gridBox)


/*function generateGrid (input, size){    
//    for (i=0; i<input; i++){
 //       const box = generateBox(size); //append result to DOM
  //      grid.appendChild(box);
   // }
//}

const genGridBtn = document.querySelector("#genGridBtn");
genGridBtn.addEventListener("click", () => {
    generateBox(size)
});*/





