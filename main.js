
let body = document.body;

body.style.margin = "0";
body.style.display ="flex";
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
gridContainer.style.backgroundColor = "red";
gridContainer.style.minWidth = "400px";
gridContainer.style.minHeight = "400px";
gridContainer.style.maxWidth = "70%";
gridContainer.style.maxHeight = "70%";

masterFlex.appendChild(gridContainer);