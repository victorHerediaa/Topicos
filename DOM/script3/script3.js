const body = document.querySelector('body')
// //const palabrasrellamable = ['hola', 'como', 'esta', 'la', 'cosa', 'bro','por', 'que', 'bien', 'mal',
//                 'rollo', 'primavera', 'equis','verdad', 'de', 'rapido', 'lento', 'soy', 'y', 'voy',
//                 'al', 'frente', 'veces', 'me', 'siento', 'feliz', 'triste', 'enojado', 'solo', 'escalofrios',
//                 'susto' ,'casa', 'terror', 'dice' ,'quieres', 'mundo', 'los', 'importan', 'mas', 'yo',
//                 'tu', 'ellos', 'nosotros', 'pensamos', 'pensando', 'hijo', 'hija', 'tio', 'tia', 'papa',
//                 'abuelo', 'madre', 'padre', 'abuela', 'nieto', 'nieta', 'ocho','nueve', 'diez', 'once' ,
//                 'doce','trece',"catorce",'quince','veinte','veintiuno','veintidos','veintitres','uno','dos',
//                 'tres','cuatro','cinco','cero','victor','estebar','roger','drogas','alcohol','alto',
//                 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Brown', 'Gray', 'Black',
//                 'Gold', 'Cyan', 'Maroon', 'Navy', 'Teal', 'Olive', 'Lavender', 'Indigo', 'Salmon', 'Turquoise']

function crearParrafo(){
    const palabras = ['hola', 'como', 'esta', 'la', 'cosa', 'bro','por', 'que', 'bien', 'mal',
                'rollo', 'primavera', 'equis','verdad', 'de', 'rapido', 'lento', 'soy', 'y', 'voy',
                'al', 'frente', 'veces', 'me', 'siento', 'feliz', 'triste', 'enojado', 'solo', 'escalofrios',
                'susto' ,'casa', 'terror', 'dice' ,'quieres', 'mundo', 'los', 'importan', 'mas', 'yo',
                'tu', 'ellos', 'nosotros', 'pensamos', 'pensando', 'hijo', 'hija', 'tio', 'tia', 'papa',
                'abuelo', 'madre', 'padre', 'abuela', 'nieto', 'nieta', 'ocho','nueve', 'diez', 'once' ,
                'doce','trece',"catorce",'quince','veinte','veintiuno','veintidos','veintitres','uno','dos',
                'tres','cuatro','cinco','cero','victor','estebar','roger','drogas','alcohol','alto',
                'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Brown', 'Gray', 'Black',
                'Gold', 'Cyan', 'Maroon', 'Navy', 'Teal', 'Olive', 'Lavender', 'Indigo', 'Salmon', 'Turquoise']
    min = Math.ceil(50);
    max = Math.floor(100);
    numero = Math.floor(Math.random() * (max - min + 1) + min)
    const parrafo = document.createElement('p')
    console.log(numero)
    for(let i = 0 ; i< numero+1 ; i++){

        const num = Math.floor(Math.random() * palabras.length)
        const palabra = palabras.splice(num, 1)[0]
        parrafo.textContent += palabra + ' '
    }

    caracteres = parrafo.textContent.length - numero
    console.log('los caracteres en total en el parrafo  son:')
    console.log(parrafo.textContent.length)
    console.log("los caracteres sin espacios en el parrafo  son:")
    console.log(caracteres)

    document.body.appendChild(parrafo)
    console.log('termina informacion de este parrafo')

}

crearParrafo()
crearParrafo()
crearParrafo()
crearParrafo()
crearParrafo()