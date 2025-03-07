//UNA IGLESIA RESTAURADA

function expandeSeccion(){
    const secciones=document.querySelectorAll('.seccion-titulo');
    secciones.forEach((seccion) => {
        seccion.addEventListener('click', function(){
            const texto=this.closest('.seccion').querySelector('.seccion-texto');
            const flecha=this.querySelector('.fa-solid');

            if(texto){
                texto.classList.toggle('expande');
            }

            if(flecha){
                flecha.classList.toggle('gira');
            }
        })
    })
}
expandeSeccion();


//ACERCATE A CRISTO

function abreConvenio(){
    const convenios=document.querySelectorAll('.convenio');

    convenios.forEach((convenio) => {
        convenio.addEventListener('click',function(){
            convenio.classList.toggle('rotar');
        })
    })

};
abreConvenio();

//ALL

function efectoMantenido(event) {
    if (event.button === 0 || event.pointerType === "touch") {
        event.currentTarget.classList.add('mantener');
    }
}

function efectoNoMantenido(event) {
    if (event.button === 0 || event.pointerType === "touch") {
        event.currentTarget.classList.remove('mantener');
    }
}

const divClicks=document.querySelectorAll('.convenio-front, .pagina, .seccion-titulo');




divClicks.forEach((div) => {
    div.addEventListener('pointerdown', efectoMantenido);
    div.addEventListener('pointerup', efectoNoMantenido);
    div.addEventListener('pointerleave', efectoNoMantenido);
    div.addEventListener('pointercancel', efectoNoMantenido);
});














