const parentBox = document.querySelector(".grid-container");
const clearButton = document.querySelector(".button-clear");
let gridButton = document.querySelector(".button-grid");
let isMouseDown = false;
let isGridOn = true;
let defaultColor = "black";
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano', 
      
    components: {

     
        preview: true,
        opacity: true,
        hue: true,

       
        interaction: {
            hex: true,
            rgba: false,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: false,
            clear: false,
            save: true
        }
    }
});

const createGrid = ()=>{
let hex = ''
 pickr.on('save', (color, instance) => {
    let newColor = color.toHEXA(); 
    hex = '#' + newColor.join('');
  
});
    for(let i=0; i<256; i++){
        const newBox = document.createElement("div");
        newBox.className = `grid-item`;
        parentBox.appendChild(newBox);
        newBox.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            hex === '' ?e.target.style.backgroundColor = defaultColor:e.target.style.backgroundColor = hex;
                
        })
        newBox.addEventListener('mouseup', () => {
            isMouseDown = false;
        })
        newBox.addEventListener('mousemove', (e) => {
            if (isMouseDown) {
                hex === '' ?e.target.style.backgroundColor = defaultColor:e.target.style.backgroundColor = hex;
            }
        });

    }

}

createGrid();
gridButton.addEventListener('click',()=>{
    isGridOn = !isGridOn;
    const allGrid = document.querySelectorAll(".grid-item")
    allGrid.forEach((grid)=>{
        isGridOn === true ? grid.style.border = "1px solid black" : grid.style.border = "none";
    })
  })   

clearButton.addEventListener('click',()=> {
    let boxes = document.querySelectorAll(".grid-item");
    boxes.forEach((box) => {
        box.style.backgroundColor="white";
    })

})
