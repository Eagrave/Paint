const parentBox = document.querySelector(".grid-container");
const createGrid = ()=>{
    for(let i=0; i<256; i++){
        const newBox = document.createElement("div");
        newBox.className = `grid-item`;
        parentBox.appendChild(newBox);
    }
}

createGrid();
