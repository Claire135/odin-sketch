console.log("Hello World")

function getInput(){
    let input;
    
    while(true){
        input = parseInt(prompt("Enter number of boxes between 1 and 100"), 10)

        if (isNaN(input)){
            alert("Please enter a valid number between 1 and 100.")
        }
        else if (input >100 || input<1){
            alert("Please enter a valid number between 1 and 100.")
        }
        else if (!isNaN(input) && input>0 && input<101){
            console.log("Valid input detected, exiting loop.");
            return input;
        }
    }
}


const userInput = getInput();
console.log(userInput)

let size = (500/userInput)*10/10;

const grid = document.querySelector('#grid');
grid.innerHTML = '';

console.log("Calculated size for each box:", size);

const noOfBoxes = userInput*userInput;

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

/*const genGridBtn = document.querySelector("#startBtn");
genGridBtn.addEventListener("click", () => {
    ""
});*/



