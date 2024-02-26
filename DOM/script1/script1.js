const body = document.querySelector('body')
 const colores = ['red', 'orange', 'brown','violet','pink' , 'blue', 'gray', 'yellow','green','turquoise']
for(let i = 0 ; i<10 ; i++){
    const div = document.createElement('div')
    div.style.height = '100px'
    div.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)]
    body.appendChild(div)
} 