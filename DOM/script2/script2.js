const body = document.querySelector('body')
const colores = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Brown', 'Gray', 'Black', 'Gold', 'Cyan', 'Maroon', 'Navy', 'Teal', 'Olive', 'Lavender', 'Indigo', 'Salmon', 'Turquoise'];
for(let i = 0 ; i<10 ; i++){
    const div = document.createElement('div')
    div.style.height = '100px'
    div.style.backgroundColor = colores.splice(Math.floor(Math.random() * colores.length), 1)[0]
    body.appendChild(div)
}
