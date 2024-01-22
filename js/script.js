

const bloque = document.querySelectorAll('.bloque');
const titulo = document.querySelectorAll('.pregunta');


titulo.forEach( (titulos, i )=>{
    titulo[i].addEventListener('mouseenter', ()=> {
    
        bloque.forEach( (bloques, i ) =>{
            bloque[i].classList.remove('activo');
        })
        bloque[i].classList.add('activo');
    })
})

const enlaces = document.querySelectorAll('.cont-grupo-imagenes .a');
const lightbox = document.querySelector('.ligthbox');
const grande = document.querySelector('.grande');

enlaces.forEach((enlace , n) => {
    enlaces[n].addEventListener('mouseenter', (e)=>{
        e.preventDefault();
        let ruta = enlace.querySelector('.img').src;
        console.log(ruta);

        lightbox.classList.add('activo');
        grande.setAttribute('src', ruta);
    })
})

grande.addEventListener('click', ()=>{
    lightbox.classList.remove('activo');
    grande.setAttribute('src', "");
})




