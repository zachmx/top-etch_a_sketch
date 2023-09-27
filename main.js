//Functions

function nestedDivs(divNumber, parentDiv, axis, totalToCreate){
    
    let count = 0

    while (count < totalToCreate){

        let nestedDiv = document.createElement('div');
        nestedDiv.id =`${axis}${divNumber}`;
        nestedDiv.style.display = "flex";
        nestedDiv.style.backgroundColor = "white";
        //nestedDiv.style.borderStyle = "solid";
        nestedDiv.style.flexGrow = "1";


        parentDiv.appendChild(nestedDiv);
        count++;
        divNumber++;
        
        nestedDiv.addEventListener('mouseover', function(e) {
            nestedDiv.style.backgroundColor = "black";
        })

    }


}

function createDiv(divNumber, axis, totalDivs){
   
    let div = document.createElement('div');
    div.id =`${axis}${divNumber}`;
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.backgroundColor = "white";
    //div.style.borderStyle = "solid";
    div.style.flexGrow = "1";
    

    nestedDivs(divNumber, div, 'y', totalDivs);

    return div;

    
    
}

// initial container

let body = document.body;

body.style.margin = "0";
body.style.display ="flex";
body.style.flexDirection = "column";
body.style.height = "100vh";
body.style.justifyContent ="center";
body.style.alignItems = "center";

let masterFlex = document.createElement('div');

body.appendChild(masterFlex);
masterFlex.id ="main-container";
masterFlex.style.display ="flex";
masterFlex.style.justifyContent ="center";
masterFlex.style.alignItems ="center";
masterFlex.style.backgroundColor = "gray";
masterFlex.style.height = "500px";
masterFlex.style.width = "500px";

let gridContainer = document.createElement('div');
gridContainer.id = "grid-container";
gridContainer.style.display = "flex";
gridContainer.style.backgroundColor = "red";
gridContainer.style.minWidth = "400px";
gridContainer.style.minHeight = "400px";
gridContainer.style.maxWidth = "70%";
gridContainer.style.maxHeight = "70%";

masterFlex.appendChild(gridContainer);

let userInputBox = document.createElement('form');
    userInputBox.id = "form-box";
    userInputBox.display = "flex";
    userInputBox.flexDirection = "column";

let inputRequest = document.createElement('p');
    inputRequest.innerText = "Desired Grid Size // Max size 75x75";
    inputRequest.display = "flex";
    inputRequest.flexGrow = "1";
    inputRequest.style.textAlign = "center";

let inputWrapper = document.createElement('div')
    inputWrapper.id = "input-wrapper";

let input = document.createElement('input');
    input.style.flexGrow = "1";
    input.id = "input";

let inputButton = document.createElement('button');
    inputButton.innerText = "Submit";
    inputButton.style.margin = "0px 10px 0px 10px";

body.appendChild(userInputBox);

userInputBox.appendChild(inputRequest);

userInputBox.appendChild(inputWrapper);

inputWrapper.appendChild(input);
inputWrapper.appendChild(inputButton);

userInputBox.appendChild

let squaresToCreate = inputButton.addEventListener(
    "click",
     function(e) {
        e.preventDefault();
        let value = input.value;
        console.log(value);

    return false;
});


// Create Grid Loop




let squaresCreated = 0;

while (squaresCreated < squaresToCreate) {

   gridContainer.appendChild(createDiv(squaresCreated, "x", squaresToCreate));

   squaresCreated++;    

}
