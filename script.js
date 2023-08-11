const parentBox = document.querySelector(".grid-container");
const clearButton = document.querySelector(".button-clear")
let isMouseDown = false;
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
            e.target.style.backgroundColor = hex;
        })
        newBox.addEventListener('mouseup', () => {
            isMouseDown = false;
           
        })
        newBox.addEventListener('mousemove', (e) => {
            if(isMouseDown) {
                e.target.style.backgroundColor = hex;
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
