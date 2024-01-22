//Botones de Tabs
const botones = document.querySelectorAll('.boton-tabs');
const contenidos = document.querySelectorAll('.bloque-tabs');


botones.forEach((cadaboton , j )=>{
    botones[j].addEventListener('click', ()=>{
       
        botones.forEach( (cadaboton, j)=>{
            botones[j].classList.remove('activo');
            contenidos[j].classList.remove('activo');
        })

        botones[j].classList.add('activo');
        contenidos[j].classList.add('activo');
    })
})