function generateGrid(){

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

    function getSize(userInput){
        let boxSize = (750/userInput)*10/10;
        return boxSize;
    }

    console.log("size " + getSize(userInput))

    const size = getSize(userInput);

    const grid = document.querySelector('#grid');
    grid.innerHTML = '';

    console.log("Calculated size for each box:", size);

    const noOfBoxes = userInput*userInput;

    function makeGrid(size, noOfBoxes){

        for (let i=0; i<noOfBoxes; i++){
            console.log(`Creating box #${i + 1}`);
            const gridBox = document.createElement('div');
            gridBox.style.height = `${size}px`;
            gridBox.style.width = `${size}px`;
            gridBox.style.background  =" #FAF7F3";
            gridBox.style.margin = "0px"
            gridBox.style.padding = "0px"
            gridBox.style.boxSizing= "border-box"
            grid.appendChild(gridBox)
        }
    }
    makeGrid(size, noOfBoxes);

    function getRandomColor(){
        const red = Math.floor(Math.random()* 255);
        const green = Math.floor(Math.random()* 255);
        const blue = Math.floor(Math.random()* 255);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    console.log(getRandomColor())

    const multiBtn = document.querySelector("#multiBtn");
    multiBtn.addEventListener("click", () => {
        grid.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = getRandomColor();
        });
    });

    const blueBtn = document.querySelector("#blueBtn");
    blueBtn.addEventListener("click", () => {
        grid.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "#5B7E91";
        });
    });

    const yellowBtn = document.querySelector("#yellowBtn");
    yellowBtn.addEventListener("click", () => {
        grid.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "#D9A441";
        });
    });

    const redBtn = document.querySelector("#redBtn");
    redBtn.addEventListener("click", () => {
        grid.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "#B23A48";
        });
    });

    const greenBtn = document.querySelector("#greenBtn");
    greenBtn.addEventListener("click", () => {
        grid.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "#9CAF88";
        });
    });

    const orangeBtn = document.querySelector("#orangeBtn");
    orangeBtn.addEventListener("click", () => {
        grid.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "#D0845A";
        });
    });

    const clearSquareBtn = document.querySelector("#clearSquareBtn");
    clearSquareBtn.addEventListener("click", () => {
        const gridBoxes = grid.querySelectorAll('div'); // Get all the grid boxes
        gridBoxes.forEach(box => {
            box.style.backgroundColor = "#FAF7F3"; // Reset the background color of each box
        });
    });
}

generateGrid()

const genGridBtn = document.querySelector("#genGridBtn");
genGridBtn.addEventListener("click", () => {
    generateGrid();
});