const parentBox = document.querySelector(".grid-container");
const clearButton = document.querySelector(".button-clear")
let isMouseDown = false;
const createGrid = ()=>{
    for(let i=0; i<256; i++){
        const newBox = document.createElement("div");
        newBox.className = `grid-item`;
        parentBox.appendChild(newBox);
        newBox.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            e.target.style.backgroundColor = 'black';
        })
        newBox.addEventListener('mouseup', () => {
            isMouseDown = false;
           
        })
        newBox.addEventListener('mousemove', (e) => {
            if(isMouseDown) {
                e.target.style.backgroundColor = 'black';
            }
        });

    }
}

createGrid();
clearButton.addEventListener('click',()=> {
    let boxes = document.querySelectorAll(".grid-item");
    boxes.forEach((box) => {
        box.style.backgroundColor="white";
    })

})